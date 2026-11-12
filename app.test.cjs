const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const Learning = require('./assets/learning.js');
const CONTENT = require('./assets/content.js');

function app(saved = {}) {
  const data = new Map(Object.entries(saved));
  const elements = new Map();
  function element(id) {
    if (!elements.has(id)) elements.set(id, {value:'',innerHTML:'',textContent:'',classList:{add(){},remove(){},toggle(){}},setAttribute(){},focus(){}});
    return elements.get(id);
  }
  const events = [];
  const context = vm.createContext({
    console, AbortController, TypeError, FormData,
    setTimeout: () => 1, clearTimeout(){},
    CustomEvent: class { constructor(name, options) { this.detail = options.detail; } },
    location:{hash:'#/home'},
    localStorage:{getItem:key => data.get(key) ?? null, setItem:(key,value) => data.set(key,value)},
    document:{getElementById:element,querySelectorAll:() => [],title:''},
    window:{addEventListener(){},dispatchEvent:event => events.push(event.detail),scrollTo(){}},
    fetch:async () => ({ok:false,status:503,headers:{get:() => 'application/json'}})
  });
  for (const file of ['content.js','learning.js','app.js']) {
    vm.runInContext(fs.readFileSync(__dirname + '/assets/' + file,'utf8'),context,{filename:file});
  }
  return {run:code => vm.runInContext(code,context), element, data, events, context};
}

test('normalizes English recall and Persian/Arabic mobile digits', () => {
  assert.equal(Learning.normalize('  BREAK   the Ice  '),'break the ice');
  assert.equal(Learning.digits('۰۹۱۲٣٤٥٦٧٨٩'),'09123456789');
  assert.ok(Learning.validPhone('09123456789'));
  assert.ok(!Learning.validPhone('9123456789'));
});

test('SRS follows day 2, 4 and 7 and repeats difficult cards sooner', () => {
  const DAY = 86400000;
  let progress = Learning.complete({cards:{},activities:[]},'ice',0);
  assert.equal(progress.cards.ice.due,DAY);
  assert.deepEqual(Learning.dueCards(progress,DAY-1),[]);
  assert.deepEqual(Learning.dueCards(progress,DAY),['ice']);
  let card = Learning.nextReview(progress.cards.ice,true,DAY);
  assert.equal(card.due,3*DAY);
  card = Learning.nextReview(card,true,3*DAY);
  assert.equal(card.due,6*DAY);
  card = Learning.nextReview(card,true,6*DAY);
  assert.equal(card.repetitions,3);
  assert.deepEqual(Learning.dueCards({cards:{ice:card}},20*DAY),[]);
  card = Learning.nextReview(card,false,20*DAY);
  assert.equal(card.repetitions,0);
  assert.equal(card.due,20*DAY + 600000);
  assert.equal(Learning.complete(progress,'ice',DAY),progress);
});

test('free conversation rule rejects the sixth conversation', () => {
  assert.equal(Learning.canSpeak(4),true);
  assert.equal(Learning.canSpeak(5),false);
  assert.equal(Learning.canSpeak(5,true),true);
});

test('every route renders and all generated event handlers compile', () => {
  const a=app();
  const routes=a.run('Object.keys(PAGES)');
  for(const name of routes) {
    const param=name==='course' ? 'daily' : name==='lesson' ? 'ice' : name==='checkout' ? 'monthly' : '';
    const html=a.run(`PAGES[${JSON.stringify(name)}](${JSON.stringify(param)})`);
    assert.ok(html.includes('<h1'),name);
    assert.ok(!html.includes('undefined'),name);
    for(const match of html.matchAll(/\bon(?:click|submit|change)="([^"]*)"/g)) {
      assert.doesNotThrow(() => new vm.Script(`(function(event){${match[1]}})`),`${name}: ${match[1]}`);
    }
  }
  assert.match(a.run("courseDetail('missing')"),/این مسیر پیدا نشد/);
  assert.match(a.run("lesson('missing')"),/این مسیر پیدا نشد/);
});

test('quiz preserves choices, supports multiple interests and gates navigation', () => {
  const a=app();
  a.run('nextQuiz()');
  assert.equal(a.run('quiz.step'),0);
  a.run('chooseQuiz(0,1); nextQuiz(); chooseQuiz(1,2); nextQuiz(); chooseQuiz(2,0); chooseQuiz(2,2); nextQuiz()');
  assert.equal(a.context.location.hash,'#/signup');
  const saved=JSON.parse(a.data.get('academy.quiz'));
  assert.equal(saved.interests.length,2);
  const reloaded=app(Object.fromEntries(a.data));
  assert.equal(reloaded.run('quiz.level'),CONTENT.levels[2]);
  assert.equal(reloaded.run('quiz.interests.length'),2);
});

test('all four package levels and all class formats can be filtered', () => {
  const a=app();
  for(const level of ['مبتدی','متوسط','پیشرفته','حرفه‌ای']) {
    const count=a.run(`filter=${JSON.stringify(level)}; (coursesPage().match(/class="package-card"/g)||[]).length`);
    assert.equal(count,2);
  }
  assert.equal(a.run("filter='همه'; classFilter='حضوری'; (coursesPage(true).match(/class=\"package-card\"/g)||[]).length"),2);
  assert.match(a.run("search='no-results'; coursesPage()"),/نتیجه‌ای پیدا نشد/);
});

test('lesson cannot complete without successful recall and apply', () => {
  const a=app();
  a.run("finishLesson('ice')");
  assert.equal(a.run('Object.keys(progress.cards).length'),0);
  a.run("advanceLesson('ice')");
  a.element('recall').value='wrong';
  a.run("checkRecall({preventDefault(){}},'ice'); advanceLesson('ice')");
  assert.equal(a.run('draft("ice").step'),1);
  a.element('recall').value=' BREAK   THE ICE ';
  a.run("checkRecall({preventDefault(){}},'ice'); advanceLesson('ice')");
  assert.equal(a.run('draft("ice").step'),2);
  a.element('apply').value='I will break the iceberg today.';
  a.run("checkApply({preventDefault(){}},'ice')");
  assert.equal(a.run('draft("ice").applied'),false);
  a.element('apply').value='I will break the ice today.';
  a.run("checkApply({preventDefault(){}},'ice'); finishLesson('ice'); finishLesson('ice')");
  assert.equal(a.run('progress.activities.length'),1);
  assert.equal(a.run('draft("ice").step'),3);
  assert.ok(JSON.parse(a.data.get('academy.progress')).cards.ice);
});

test('review only grades the current revealed card once', () => {
  const a=app();
  a.run("progress.cards.ice={due:0,repetitions:0}; reviewIds=['ice']; gradeReview('ice',true)");
  assert.equal(a.run('progress.cards.ice.repetitions'),0);
  a.run("revealed=true; gradeReview('ice',true); gradeReview('ice',true)");
  assert.equal(a.run('progress.cards.ice.repetitions'),1);
  assert.equal(a.run('progress.activities.length'),1);
});

test('preview does not overwrite another account learning history', () => {
  const a=app({'academy.profile':JSON.stringify({id:'user-a',name:'Test',preview:false}),
    'academy.progress.user-a':JSON.stringify({cards:{ice:{due:123}},activities:[],drafts:{}})});
  assert.equal(a.run('Object.keys(progress.cards).length'),1);
  a.run('previewLogin()');
  assert.equal(a.run('Object.keys(progress.cards).length'),0);
  assert.ok(JSON.parse(a.data.get('academy.progress.user-a')).cards.ice);
});

test('dynamic profile and search are escaped', () => {
  const a=app();
  const html=a.run("profile={name:'<img src=x onerror=alert(1)>',preview:true}; dashboard()");
  assert.ok(html.includes('&lt;img'));
  assert.ok(!html.includes('<img'));
  assert.ok(a.run(`search='<script>'; coursesPage()`).includes('&lt;script&gt;'));
});

test('unconfigured AI fails honestly and records no completed conversation', async () => {
  const a=app();
  a.run('previewLogin()');
  await a.run('startConversation()');
  assert.equal(a.run('conversation.session'),null);
  assert.equal(a.run('conversation.messages.length'),0);
  assert.ok(a.run('conversation.error.length')>0);
  assert.ok(!a.events.some(e => e.name==='ai_conversation_started'));
  assert.equal(a.run('conversation.busy'),false);
});

test('failed sends preserve the draft even when user navigates away', async () => {
  const a=app();
  a.run("conversation.session='example'; profile={preview:true};");
  a.element('chatInput').value='Hello there';
  await a.run('sendMessage({preventDefault(){}})');
  assert.equal(a.run('conversation.messages.length'),0);
  assert.equal(a.element('chatInput').value,'Hello there');
  assert.equal(a.run('conversation.busy'),false);
});

test('successful AI start cannot create a duplicate active conversation', async () => {
  const a=app();
  let requests=0;
  a.context.fetch=async () => {requests++; return {ok:true,status:200,headers:{get:()=> 'application/json'},json:async () => ({sessionId:'session',message:'Hello'})};};
  a.run('previewLogin()');
  await a.run('startConversation()');
  await a.run('startConversation()');
  assert.equal(requests,1);
  assert.equal(a.run('conversation.messages.length'),1);
});

test('logout clears conversation and authentication state', async () => {
  const a=app();
  a.run("previewLogin(); conversation.session='example'; conversation.messages=[{role:'user',text:'Private'}]; auth.phone='09123456789';");
  await a.run('logout()');
  assert.equal(a.run('profile'),null);
  assert.equal(a.run('conversation.session'),null);
  assert.equal(a.run('conversation.messages.length'),0);
  assert.equal(a.run('auth.phone'),'');
});
