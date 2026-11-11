/* =========================================================
   آکادمی زبان آوا — منطق سبک کلاینت (بدون وابستگی به SDK)
   ========================================================= */

const IMG = {
  hero: 'https://images.pexels.com/photos/6285266/pexels-photo-6285266.jpeg?auto=compress&cs=tinysrgb&w=1280',
  partner: 'https://images.pexels.com/photos/8518732/pexels-photo-8518732.jpeg?auto=compress&cs=tinysrgb&w=1280',
  vocab: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800',
  conversation: 'https://images.pexels.com/photos/12898882/pexels-photo-12898882.jpeg?auto=compress&cs=tinysrgb&w=800',
  grammar: 'https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg?auto=compress&cs=tinysrgb&w=800',
  expressions: 'https://images.pexels.com/photos/6595066/pexels-photo-6595066.jpeg?auto=compress&cs=tinysrgb&w=800',
  listening: 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=800',
  speaking: 'https://images.pexels.com/photos/6953870/pexels-photo-6953870.jpeg?auto=compress&cs=tinysrgb&w=800',
  teacher1: 'https://images.pexels.com/photos/7983621/pexels-photo-7983621.jpeg?auto=compress&cs=tinysrgb&w=800',
  teacher2: 'https://images.pexels.com/photos/20604558/pexels-photo-20604558.jpeg?auto=compress&cs=tinysrgb&w=800',
  teacherMain: 'https://images.pexels.com/photos/6929165/pexels-photo-6929165.jpeg?auto=compress&cs=tinysrgb&w=800',
  student1: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
  student2: 'https://images.pexels.com/photos/9490503/pexels-photo-9490503.jpeg?auto=compress&cs=tinysrgb&w=800',
  student3: 'https://images.pexels.com/photos/6084049/pexels-photo-6084049.jpeg?auto=compress&cs=tinysrgb&w=800',
  team: 'https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg?auto=compress&cs=tinysrgb&w=1280'
};

const COURSES = [
  { id: 'vocab', title: 'Vocabulary کاربردی', cat: 'Vocabulary', level: 'Beginner', teacher: 'سارا احمدی', duration: '۸ هفته', sessions: '۲۴ جلسه', lessons: '۴۸ درس', price: '۱,۴۹۰,۰۰۰ تومان', old: '۱,۷۹۰,۰۰۰ تومان', img: IMG.vocab, desc: 'کلمات ضروری را در جمله، موقعیت و مکالمه یاد بگیر.' },
  { id: 'conversation', title: 'Conversation از پایه تا روانی', cat: 'Conversation', level: 'Intermediate', teacher: 'امیر رضایی', duration: '۱۰ هفته', sessions: '۳۰ جلسه', lessons: '۶۰ درس', price: '۲,۴۹۰,۰۰۰ تومان', old: '۲,۸۹۰,۰۰۰ تومان', img: IMG.conversation, desc: 'برای مکالمه‌های واقعی با اعتمادبه‌نفس آماده شو.' },
  { id: 'grammar', title: 'Grammar شفاف و کاربردی', cat: 'Grammar', level: 'Beginner', teacher: 'نگار موسوی', duration: '۹ هفته', sessions: '۲۷ جلسه', lessons: '۵۴ درس', price: '۳,۹۹۰,۰۰۰ تومان', old: '', img: IMG.grammar, desc: 'گرامر را ساده و قابل استفاده در مکالمه یاد بگیر.' },
  { id: 'expressions', title: 'Expressions روزمره', cat: 'Expressions', level: 'Advanced', teacher: 'سارا احمدی', duration: '۶ هفته', sessions: '۱۸ جلسه', lessons: '۳۶ درس', price: '۲,۴۹۰,۰۰۰ تومان', old: '', img: IMG.expressions, desc: 'اصطلاحات طبیعی و عبارت‌های کاربردی انگلیسی.' },
  { id: 'listening', title: 'Listening هوشمند', cat: 'Listening', level: 'Intermediate', teacher: 'امیر رضایی', duration: '۸ هفته', sessions: '۲۴ جلسه', lessons: '۴۰ درس', price: '۳,۹۹۰,۰۰۰ تومان', old: '', img: IMG.listening, desc: 'شنیدن انگلیسی طبیعی را مرحله‌به‌مرحله تمرین کن.' },
  { id: 'speaking', title: 'Speaking با اعتمادبه‌نفس', cat: 'Speaking', level: 'Advanced', teacher: 'نگار موسوی', duration: '۱۰ هفته', sessions: '۳۰ جلسه', lessons: '۵۰ درس', price: '۶,۹۹۰,۰۰۰ تومان', old: '۷,۴۹۰,۰۰۰ تومان', img: IMG.speaking, desc: 'صدایت را در ارائه و گفت‌وگوهای حرفه‌ای پیدا کن.' }
];

const TEACHERS = [
  { id: 'sara', name: 'سارا احمدی', specialty: 'Vocabulary و Expressions', level: 'A1 تا C1', exp: '۹ سال سابقه', langs: 'فارسی، انگلیسی', img: IMG.teacherMain, about: 'مدرس و منتور زبان با تمرکز بر ساختن عادت یادگیری پایدار و مکالمه طبیعی.' },
  { id: 'amir', name: 'امیر رضایی', specialty: 'Conversation و Speaking', level: 'A2 تا C2', exp: '۸ سال سابقه', langs: 'فارسی، انگلیسی', img: IMG.teacher1, about: 'همراه تو برای تبدیل دانسته‌ها به گفت‌وگوهای روان و حرفه‌ای.' },
  { id: 'negar', name: 'نگار موسوی', specialty: 'Grammar و Listening', level: 'A1 تا B2', exp: '۷ سال سابقه', langs: 'فارسی، انگلیسی', img: IMG.teacher2, about: 'طرفدار آموزش روشن، تمرین‌های کوتاه و بازخورد دقیق.' }
];

const STUDENTS = [
  { name: 'آوا', level: 'B1', course: 'Conversation', img: IMG.student1, quote: 'بالاخره بدون ترس شروع به حرف‌زدن کردم.' },
  { name: 'کیان', level: 'A2', course: 'Vocabulary', img: IMG.student2, quote: 'درس‌ها کوتاه و کاملاً کاربردی هستند.' },
  { name: 'مهسا', level: 'B2', course: 'Speaking', img: IMG.student3, quote: 'بازخورد مدرس، پیشرفت من را چند برابر کرد.' }
];

const TESTIMONIALS = [
  { name: 'مریم', course: 'Conversation', quote: '«بعد از چند هفته، اولین مکالمه کاری‌ام را با آرامش انجام دادم.»' },
  { name: 'آرمان', course: 'Vocabulary', quote: '«روش تمرین‌ها باعث شد کلمات واقعاً در ذهنم بمانند.»' },
  { name: 'رها', course: 'Speaking', quote: '«فضای دوستانه و بازخوردهای دقیق، اعتمادبه‌نفسم را ساخت.»' }
];

const FAQS = [
  { q: 'چطور سطح زبانم را تعیین کنم؟', a: 'در ساخت پروفایل، سطح فعلی‌ات را انتخاب کن یا از گزینه تعیین سطح رایگان کمک بگیر.' },
  { q: 'بعد از ثبت‌نام به دوره چه دسترسی دارم؟', a: 'جلسه‌ها، تمرین‌ها، آزمون‌ها و محتوای ویدیویی دوره برایت در داشبورد قابل مشاهده می‌شود.' },
  { q: 'چطور پارتنر مکالمه پیدا کنم؟', a: 'به بخش پارتنر مکالمه برو، سطح و موضوع دلخواهت را انتخاب کن و جست‌وجو را شروع کن.' },
  { q: 'گواهی پایان دوره چگونه صادر می‌شود؟', a: 'پس از تکمیل شرایط و آزمون جمع‌بندی، گواهی پایان دوره در داشبورد نمایش داده می‌شود.' }
];

const PLANS = [
  { name: 'Bronze', price: '۱,۴۹۰,۰۰۰ تومان', sessions: '۱۲ جلسه', level: 'A1–A2' },
  { name: 'Silver', price: '۲,۴۹۰,۰۰۰ تومان', sessions: '۲۴ جلسه', level: 'A2–B1' },
  { name: 'Gold', price: '۳,۹۹۰,۰۰۰ تومان', sessions: '۳۶ جلسه', level: 'B1–B2', old: '۴,۴۹۰,۰۰۰ تومان' },
  { name: 'Diamond', price: '۶,۹۹۰,۰۰۰ تومان', sessions: '۶۰ جلسه', level: 'B2–C2' }
];

const BENEFITS = [
  { icon: 'book-open', title: 'آموزش کاربردی', text: 'آنچه یاد می‌گیری، همان چیزی است که استفاده می‌کنی.' },
  { icon: 'award', title: 'مدرس‌های حرفه‌ای', text: 'بازخورد دقیق از مدرس‌ها و منتورهای باتجربه.' },
  { icon: 'map', title: 'مسیر یادگیری شخصی', text: 'مسیر مناسب سطح و هدف خودت را پیدا کن.' },
  { icon: 'messages-square', title: 'تمرین مکالمه', text: 'تمرین واقعی با پارتنر و موقعیت‌های روزمره.' },
  { icon: 'heart-handshake', title: 'پشتیبانی آموزشی', text: 'در هر مرحله یک همراه آموزشی کنار توست.' },
  { icon: 'monitor-play', title: 'دسترسی آنلاین', text: 'یادگیری منعطف، هر زمان و هر جا.' }
];

const PATHS = [
  { title: 'Vocabulary', text: 'آموزش کامل کلمات و واژگان کاربردی انگلیسی', id: 'vocab', icon: 'book-marked' },
  { title: 'Conversation', text: 'مکالمه انگلیسی از پایه تا پیشرفته', id: 'conversation', icon: 'messages-square' },
  { title: 'Grammar', text: 'گرامر انگلیسی از صفر تا مباحث پیشرفته', id: 'grammar', icon: 'text-quote' },
  { title: 'Expressions', text: 'اصطلاحات و عبارت‌های کاربردی انگلیسی', id: 'expressions', icon: 'sparkles' }
];

const STEPS = [
  { t: 'ثبت‌نام', i: 'user-plus' },
  { t: 'تعیین سطح', i: 'clipboard-check' },
  { t: 'انتخاب مسیر', i: 'map' },
  { t: 'شروع دوره', i: 'play' },
  { t: 'تمرین و مکالمه', i: 'messages-square' },
  { t: 'دریافت بازخورد', i: 'message-circle-heart' },
  { t: 'رسیدن به هدف', i: 'trophy' }
];

const NOTIFS = [
  { t: 'دوره جدید منتشر شد', i: 'sparkles' },
  { t: 'تمرین جدید داری', i: 'pen-line' },
  { t: 'کلاس بعدی نزدیک است', i: 'calendar-clock' },
  { t: 'پاسخ پشتیبانی دریافت شد', i: 'message-circle' },
  { t: 'پارتنر جدید پیدا شد', i: 'heart-handshake' }
];

/* ---------- state & storage ---------- */
const PKEY = 'ava_profile_v1';
const NKEY = 'ava_notifs_v1';
const CKEY = 'ava_contact_v1';

const state = {
  filter: 'همه',
  teacherFilter: 'همه',
  testimonial: 0,
  partnerStage: 'search',
  chat: [
    { who: 'them', text: 'Hi! Nice to meet you. How was your day?' },
    { who: 'you', text: 'Hi! It was good, thank you. I studied English today.' },
    { who: 'them', text: 'Great! Tell me one new word you learned.' }
  ]
};

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}
function writeJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage full/blocked */ }
}

function getProfile() { return readJSON(PKEY, null); }
function setProfile(p) { writeJSON(PKEY, p); }
function readNotifs() { return new Set(readJSON(NKEY, [])); }
function setNotifs(set) { writeJSON(NKEY, Array.from(set)); }

/* ---------- helpers ---------- */
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function icon(name, size) {
  const s = size || 19;
  return '<i data-lucide="' + name + '" style="width:' + s + 'px;height:' + s + 'px"></i>';
}
function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function () { t.classList.remove('show'); }, 3200);
}
function parseHash() {
  const raw = location.hash.replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean);
  return { route: parts[0] || 'home', param: parts[1] || null };
}
function go(route, param) {
  const target = '#/' + route + (param ? '/' + param : '');
  if (location.hash === target) render();
  else location.hash = target;
  closeMenu();
}
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('menuBtn');
  const open = menu.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('menuBtn');
  if (menu) menu.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function courseCard(c) {
  return '<article class="card card-hover course-card">' +
    '<img class="course-img" src="' + c.img + '" alt="' + esc(c.title) + '" loading="lazy">' +
    '<div class="course-body">' +
      '<div class="course-top"><span class="badge">' + esc(c.cat) + '</span><span class="muted">' + esc(c.level) + '</span></div>' +
      '<h3 class="course-title">' + esc(c.title) + '</h3>' +
      '<p class="course-desc">' + esc(c.desc) + '</p>' +
      '<div class="course-meta"><span>' + esc(c.sessions) + '</span><span>' + esc(c.duration) + '</span></div>' +
      '<div class="course-foot">' +
        '<div>' + (c.old ? '<span class="price-old">' + esc(c.old) + '</span>' : '') + '<span class="price">' + esc(c.price) + '</span></div>' +
        '<button class="btn btn-primary btn-sm" onclick="go(\'course\',\'' + c.id + '\')">مشاهده دوره</button>' +
      '</div>' +
    '</div>' +
  '</article>';
}

function teacherCard(t) {
  return '<article class="card card-hover" style="overflow:hidden">' +
    '<img class="person-img" src="' + t.img + '" alt="پرتره ' + esc(t.name) + '" loading="lazy">' +
    '<div class="person-body">' +
      '<h3 class="person-name">' + esc(t.name) + '</h3>' +
      '<p class="person-role">' + esc(t.specialty) + '</p>' +
      '<div class="person-meta"><span>' + esc(t.level) + '</span><span>' + esc(t.exp) + '</span></div>' +
      '<button class="btn btn-light btn-block btn-sm" style="margin-top:16px" onclick="go(\'teacher\',\'' + t.id + '\')">مشاهده پروفایل</button>' +
    '</div>' +
  '</article>';
}

function studentCards() {
  return STUDENTS.map(function (s) {
    return '<article class="card card-hover" style="overflow:hidden">' +
      '<img class="person-img" style="height:200px" src="' + s.img + '" alt="هنرجوی ' + esc(s.name) + '" loading="lazy">' +
      '<div class="person-body">' +
        '<div style="display:flex;justify-content:space-between;align-items:center">' +
          '<h3 class="person-name">' + esc(s.name) + '</h3><span class="badge">' + esc(s.level) + '</span>' +
        '</div>' +
        '<p class="small muted" style="margin-top:8px">' + esc(s.course) + '</p>' +
        '<p class="small" style="margin-top:10px;color:#43506a">«' + esc(s.quote) + '»</p>' +
      '</div>' +
    '</article>';
  }).join('');
}

/* ---------- pages ---------- */
function home() {
  return '<div class="page"><div class="wrap">' +
    '<section class="hero"><div class="hero-grid">' +
      '<div>' +
        '<span class="eyebrow">' + icon('sparkles') + ' یادگیری واقعی، پیشرفت واقعی</span>' +
        '<h1 class="hero-title">انگلیسی را فقط یاد نگیر؛ زندگی‌اش کن.</h1>' +
        '<p class="hero-sub">از اولین کلمه تا مکالمه حرفه‌ای، قدم‌به‌قدم کنار تو هستیم.</p>' +
        '<div class="hero-actions">' +
          '<button class="btn btn-primary" onclick="go(\'courses\')">مشاهده دوره‌ها ' + icon('arrow-left') + '</button>' +
          '<button class="btn btn-orange" onclick="go(\'signup\')">شروع یادگیری</button>' +
        '</div>' +
        '<div class="hero-checks">' +
          '<span>' + icon('circle-check') + ' آموزش آنلاین</span>' +
          '<span>' + icon('circle-check') + ' تمرین واقعی</span>' +
          '<span>' + icon('circle-check') + ' بازخورد مدرس</span>' +
        '</div>' +
      '</div>' +
      '<div class="hero-media">' +
        '<img class="hero-img" src="' + IMG.hero + '" alt="کلاس یادگیری زبان انگلیسی">' +
        '<div class="hero-badge"><strong>جلسه امروز آماده است</strong><span>شروع کن و ادامه بده</span></div>' +
      '</div>' +
    '</div></section>' +

    '<section class="stats">' +
      [['+۵۰۰۰', 'هنرجوی فعال'], ['+۵۰', 'دوره آموزشی'], ['+۲۰', 'مدرس و منتور'], ['+۹۵٪', 'رضایت هنرجویان']].map(function (x) {
        return '<div class="stat"><strong>' + x[0] + '</strong><span>' + x[1] + '</span></div>';
      }).join('') +
    '</section>' +

    '<section class="section"><div class="center"><span class="eyebrow">قدم‌به‌قدم تا هدف</span><h2 class="section-title">مسیر یادگیری تو</h2></div>' +
      '<div class="steps">' + STEPS.map(function (s) {
        return '<div class="step"><div class="step-dot">' + icon(s.i) + '</div><p>' + s.t + '</p></div>';
      }).join('') + '</div>' +
    '</section>' +

    '<section class="section"><div class="section-head"><div><span class="eyebrow">انتخاب هوشمندانه</span><h2 class="section-title">مسیر مناسب خودت را پیدا کن</h2></div>' +
      '<button class="btn btn-light btn-sm" onclick="go(\'courses\')">همه دوره‌ها ' + icon('arrow-left') + '</button></div>' +
      '<div class="grid cols-4" style="margin-top:28px">' + PATHS.map(function (p) {
        return '<button class="card card-hover path-card" onclick="go(\'course\',\'' + p.id + '\')">' +
          '<span class="step-dot">' + icon(p.icon) + '</span><h3>' + p.title + '</h3><p>' + p.text + '</p></button>';
      }).join('') + '</div>' +
    '</section>' +

    '<section class="section"><div class="center"><span class="eyebrow">پلن‌های تخصصی</span><h2 class="section-title">با برنامه‌ای که برای تو ساخته شده پیش برو</h2></div>' +
      '<div class="grid cols-4" style="margin-top:32px">' + PLANS.map(function (p, i) {
        const featured = i === 2;
        return '<article class="card plan' + (featured ? ' featured' : '') + '">' +
          (featured ? '<span class="plan-tag">محبوب‌ترین انتخاب</span>' : '') +
          '<h3>' + p.name + '</h3>' +
          '<p class="plan-price">' + p.price + '</p>' +
          '<p class="plan-old">' + (p.old || '') + '</p>' +
          '<div class="plan-features">' +
            [p.price.replace(' تومان', '') + ' ارزش آموزشی', p.sessions + ' آموزشی', 'سطح ' + p.level, 'درس، تمرین و آزمون', 'پشتیبانی آموزشی', 'دسترسی به ویدئوها', 'گواهی پایان دوره'].map(function (t) {
              return '<div class="feature">' + icon('check', 16) + ' ' + t + '</div>';
            }).join('') +
          '</div>' +
          '<button class="btn ' + (featured ? 'btn-pink' : 'btn-primary') + ' btn-block" style="margin-top:20px" onclick="go(\'courses\')">انتخاب پلن</button>' +
        '</article>';
      }).join('') + '</div>' +
    '</section>' +

    '<section class="banner"><div class="banner-copy">' +
      '<span class="eyebrow eyebrow-light">Conversation Partner</span>' +
      '<h2>وقتشه انگلیسی رو با یک پارتنر واقعی تمرین کنی!</h2>' +
      '<p>با پارتنر مکالمه انگلیسی تمرین کن، صحبت کن، اشتباه کن و بهتر شو.</p>' +
      '<button class="btn btn-orange" style="margin-top:24px" onclick="go(\'partner\')">ورود به پارتنر مکالمه ' + icon('arrow-left') + '</button>' +
    '</div><img class="banner-img" src="' + IMG.partner + '" alt="تمرین مکالمه انگلیسی" loading="lazy"></section>' +

    '<section class="section"><div class="center"><span class="eyebrow">تفاوت را حس کن</span><h2 class="section-title">چرا اینجا یادگیری فرق دارد؟</h2></div>' +
      '<div class="grid cols-3" style="margin-top:30px">' + BENEFITS.map(function (b) {
        return '<div class="card card-hover card-pad"><span class="step-dot" style="margin:0">' + icon(b.icon) + '</span>' +
          '<h3 style="font-weight:800;color:var(--navy);margin-top:16px">' + b.title + '</h3>' +
          '<p class="small muted" style="margin-top:8px">' + b.text + '</p></div>';
      }).join('') + '</div>' +
    '</section>' +

    '<section class="section"><div class="section-head"><div><span class="eyebrow">منتورهای همراه</span><h2 class="section-title">معلم‌های ما</h2></div>' +
      '<button class="btn btn-light btn-sm" onclick="go(\'teachers\')">همه معلم‌ها</button></div>' +
      '<div class="grid cols-3" style="margin-top:28px">' + TEACHERS.map(teacherCard).join('') + '</div>' +
    '</section>' +

    '<section class="section"><div class="center"><span class="eyebrow">از جامعه ما</span><h2 class="section-title">هنرجویان ما</h2></div>' +
      '<div class="grid cols-3" style="margin-top:28px">' + studentCards() + '</div>' +
    '</section>' +

    '<section class="section">' + testimonialBlock() + '</section>' +

    '<section class="cta"><h2 class="section-title" style="max-width:32rem;margin:0 auto">امروز شروع کن؛ انگلیسی فردای تو از همین‌جا ساخته می‌شود.</h2>' +
      '<button class="btn btn-orange" style="margin-top:24px" onclick="go(\'signup\')">شروع یادگیری ' + icon('arrow-left') + '</button></section>' +
  '</div></div>';
}

function testimonialBlock() {
  const t = TESTIMONIALS[state.testimonial];
  return '<div class="card testimonial">' +
    '<div class="testimonial-head">' +
      '<div><span class="eyebrow">تجربه هنرجویان</span><h2 class="section-title">چیزی فراتر از یک دوره</h2></div>' +
      '<div style="display:flex;gap:8px">' +
        '<button class="btn btn-light btn-icon" onclick="moveTestimonial(1)" aria-label="نظر بعدی">' + icon('chevron-left') + '</button>' +
        '<button class="btn btn-light btn-icon" onclick="moveTestimonial(-1)" aria-label="نظر قبلی">' + icon('chevron-right') + '</button>' +
      '</div>' +
    '</div>' +
    '<div class="stars">★★★★★</div>' +
    '<p class="quote">' + t.quote + '</p>' +
    '<div style="margin-top:16px"><strong style="color:var(--navy)">' + t.name + '</strong><span class="muted small"> · دوره ' + t.course + '</span></div>' +
    '<div class="dots">' + TESTIMONIALS.map(function (_, i) {
      return '<span class="dot' + (i === state.testimonial ? ' active' : '') + '"></span>';
    }).join('') + '</div>' +
  '</div>';
}

function moveTestimonial(d) {
  state.testimonial = (state.testimonial + d + TESTIMONIALS.length) % TESTIMONIALS.length;
  render();
}

function coursesPage() {
  const filters = ['همه', 'Vocabulary', 'Conversation', 'Grammar', 'Expressions', 'Listening', 'Speaking', 'Beginner', 'Intermediate', 'Advanced'];
  const list = state.filter === 'همه' ? COURSES : COURSES.filter(function (c) {
    return c.cat === state.filter || c.level === state.filter;
  });
  return '<div class="page"><div class="wrap">' +
    '<div class="center" style="max-width:40rem;margin:0 auto"><span class="eyebrow">یادگیری هدفمند</span>' +
      '<h1 class="section-title">دوره‌های آموزش زبان انگلیسی</h1>' +
      '<p class="section-sub" style="margin-inline:auto">مسیرت را انتخاب کن و هر روز یک قدم به مکالمه روان‌تر نزدیک شو.</p></div>' +
    '<div class="filters">' + filters.map(function (f) {
      return '<button class="filter' + (state.filter === f ? ' active' : '') + '" onclick="filterCourses(\'' + f + '\')">' + f + '</button>';
    }).join('') + '</div>' +
    '<div class="grid cols-3" style="margin-top:32px">' +
      (list.length ? list.map(courseCard).join('') : '<div class="card card-pad center muted" style="grid-column:1/-1">دوره‌ای با این فیلتر پیدا نشد.</div>') +
    '</div>' +
  '</div></div>';
}

function filterCourses(f) { state.filter = f; render(); }

function courseDetail(id) {
  const c = COURSES.find(function (x) { return x.id === id; }) || COURSES[0];
  return '<div class="page"><div class="wrap">' +
    '<button class="btn btn-light btn-sm" onclick="go(\'courses\')">' + icon('arrow-right') + ' بازگشت به دوره‌ها</button>' +
    '<section class="grid cols-2" style="margin-top:24px;align-items:start;gap:36px">' +
      '<img src="' + c.img + '" alt="' + esc(c.title) + '" style="width:100%;height:360px;object-fit:cover;border-radius:24px" loading="lazy">' +
      '<div>' +
        '<span class="eyebrow">' + esc(c.cat) + ' · ' + esc(c.level) + '</span>' +
        '<h1 class="section-title">' + esc(c.title) + '</h1>' +
        '<p class="muted" style="margin-top:16px">' + esc(c.desc) + ' این دوره برای ساختن مهارت پایدار، تمرین روزانه و استفاده واقعی از انگلیسی طراحی شده است.</p>' +
        '<div class="grid cols-2" style="margin-top:24px;gap:12px">' +
          [['مدت دوره', c.duration], ['جلسات', c.sessions], ['درس‌ها', c.lessons], ['مدرس', c.teacher]].map(function (x) {
            return '<div style="background:var(--paper);border-radius:12px;padding:12px"><span class="small muted" style="display:block">' + x[0] + '</span><strong style="color:var(--navy)">' + esc(x[1]) + '</strong></div>';
          }).join('') +
        '</div>' +
        '<div style="margin-top:24px">' + (c.old ? '<span class="price-old">' + esc(c.old) + '</span>' : '') +
          '<strong style="display:block;font-size:1.5rem;color:var(--navy)">' + esc(c.price) + '</strong></div>' +
        '<button class="btn btn-orange" style="margin-top:20px" onclick="enroll(\'' + c.id + '\')">ثبت‌نام در دوره ' + icon('arrow-left') + '</button>' +
      '</div>' +
    '</section>' +
    '<section class="grid cols-2" style="margin-top:48px">' +
      '<div class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.15rem">مناسب چه کسانی است؟</h2><p class="muted small" style="margin-top:10px">برای زبان‌آموزانی که به دنبال آموزش ساختارمند، تمرین‌های قابل انجام و بازخورد روشن هستند.</p></div>' +
      '<div class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.15rem">پیش‌نیاز و پشتیبانی</h2><p class="muted small" style="margin-top:10px">نیازی به پیش‌نیاز پیچیده نیست. تمرین‌ها، آزمون‌ها و پشتیبانی آموزشی در طول دوره همراه تو هستند.</p></div>' +
    '</section>' +
    '<section class="card card-pad" style="margin-top:24px"><h2 style="font-weight:800;color:var(--navy);font-size:1.15rem">سرفصل‌ها و جلسات</h2>' +
      '<div class="grid cols-3" style="margin-top:20px">' +
        ['شروع هوشمند و تعیین هدف', 'درس‌های کاربردی و کوتاه', 'تمرین شنیداری و گفتاری', 'بازخورد و اصلاح اشتباه‌ها', 'آزمون جمع‌بندی', 'گواهی پایان دوره'].map(function (x, i) {
          return '<div style="background:var(--paper);border-radius:12px;padding:16px"><span style="color:var(--blue);font-weight:800">۰' + (i + 1) + '</span><p class="small" style="font-weight:600;margin-top:8px">' + x + '</p></div>';
        }).join('') +
      '</div></section>' +
  '</div></div>';
}

function teachersPage() {
  const filters = ['همه', 'Beginner', 'Intermediate', 'Advanced', 'Conversation', 'Grammar'];
  const list = state.teacherFilter === 'همه' ? TEACHERS : TEACHERS.filter(function (t) {
    return t.level.indexOf(state.teacherFilter) !== -1 || t.specialty.indexOf(state.teacherFilter) !== -1;
  });
  return '<div class="page"><div class="wrap">' +
    '<section class="hero center" style="padding:clamp(28px,5vw,52px)"><span class="eyebrow">منتورهای باتجربه</span>' +
      '<h1 class="section-title">با مدرس مناسب خودت یاد بگیر.</h1>' +
      '<p class="section-sub" style="margin-inline:auto">هر مدرس یک سبک، یک تخصص و یک همراهی واقعی برای مسیر تو دارد.</p></section>' +
    '<div class="filters">' + filters.map(function (f) {
      return '<button class="filter' + (state.teacherFilter === f ? ' active' : '') + '" onclick="filterTeachers(\'' + f + '\')">' + f + '</button>';
    }).join('') + '</div>' +
    '<div class="grid cols-3" style="margin-top:32px">' +
      (list.length ? list.map(teacherCard).join('') : '<p class="center muted" style="grid-column:1/-1;padding:40px">مدرسی با این فیلتر پیدا نشد.</p>') +
    '</div>' +
  '</div></div>';
}

function filterTeachers(f) { state.teacherFilter = f; render(); }

function teacherDetail(id) {
  const t = TEACHERS.find(function (x) { return x.id === id; }) || TEACHERS[0];
  return '<div class="page"><div class="wrap">' +
    '<button class="btn btn-light btn-sm" onclick="go(\'teachers\')">' + icon('arrow-right') + ' بازگشت به معلم‌ها</button>' +
    '<section class="card" style="margin-top:24px;overflow:hidden"><div class="grid cols-2" style="gap:0;align-items:stretch">' +
      '<img src="' + t.img + '" alt="پرتره ' + esc(t.name) + '" style="width:100%;height:100%;min-height:340px;object-fit:cover" loading="lazy">' +
      '<div style="padding:28px">' +
        '<span class="eyebrow">مدرس منتخب</span>' +
        '<h1 class="section-title">' + esc(t.name) + '</h1>' +
        '<p style="color:var(--blue);font-weight:700;margin-top:8px">' + esc(t.specialty) + '</p>' +
        '<p class="muted" style="margin-top:16px">' + esc(t.about) + '</p>' +
        '<div class="grid cols-2" style="margin-top:24px;gap:12px">' +
          [['تخصص', t.specialty], ['سطح تدریس', t.level], ['تجربه', t.exp], ['زبان‌ها', t.langs]].map(function (x) {
            return '<div style="background:var(--paper);padding:12px;border-radius:12px"><span class="small muted">' + x[0] + '</span><strong style="display:block;color:var(--navy)">' + esc(x[1]) + '</strong></div>';
          }).join('') +
        '</div>' +
        '<div style="color:var(--orange);margin-top:20px">★★★★★ <span class="muted small">۴.۹ از ۵ · ۱۲۸ نظر</span></div>' +
        '<button class="btn btn-primary" style="margin-top:24px" onclick="go(\'courses\')">مشاهده دوره‌ها ' + icon('arrow-left') + '</button>' +
      '</div>' +
    '</div></section>' +
  '</div></div>';
}

function studentsPage() {
  return '<div class="page"><div class="wrap">' +
    '<div class="center"><span class="eyebrow">یادگیری کنار هم</span><h1 class="section-title">جامعه هنرجویان ما</h1>' +
      '<p class="section-sub" style="margin-inline:auto">داستان‌های واقعی از آدم‌هایی که تصمیم گرفتند انگلیسی را وارد زندگی‌شان کنند.</p></div>' +
    '<div class="grid cols-4" style="margin-top:32px">' +
      [['+۵۰۰۰', 'هنرجوی فعال'], ['۷۸٪', 'ادامه یادگیری'], ['+۳۰۰', 'گواهینامه'], ['۴.۹/۵', 'امتیاز تجربه']].map(function (x) {
        return '<div class="card card-pad center"><strong style="font-size:1.5rem;color:var(--navy)">' + x[0] + '</strong><span class="small muted" style="display:block;margin-top:6px">' + x[1] + '</span></div>';
      }).join('') +
    '</div>' +
    '<div class="grid cols-3" style="margin-top:32px">' + studentCards() + '</div>' +
    '<section class="cta"><h2 class="section-title">تو هم می‌توانی بخشی از این جامعه باشی.</h2>' +
      '<button class="btn btn-orange" style="margin-top:22px" onclick="go(\'signup\')">شروع یادگیری</button></section>' +
  '</div></div>';
}

function about() {
  return '<div class="page"><div class="wrap">' +
    '<section class="hero"><div class="hero-grid">' +
      '<div><span class="eyebrow">داستان ما</span><h1 class="section-title">ما اینجا هستیم تا یادگیری انگلیسی را ساده‌تر کنیم.</h1>' +
        '<p class="muted" style="margin-top:18px">ما باور داریم زبان فقط یک درس نیست؛ پلی است برای ارتباط، فرصت و اعتمادبه‌نفس بیشتر.</p></div>' +
      '<img src="' + IMG.team + '" alt="تیم آموزشی" style="width:100%;height:290px;object-fit:cover;border-radius:22px" loading="lazy">' +
    '</div></section>' +
    '<section class="grid cols-2" style="margin-top:40px">' +
      '<div class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.15rem">مأموریت ما</h2><p class="muted small" style="margin-top:10px">ساخت تجربه‌ای ساده، کاربردی و انسانی که هر زبان‌آموز بتواند با آن پیشرفت قابل اندازه‌گیری داشته باشد.</p></div>' +
      '<div class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.15rem">چشم‌انداز ما</h2><p class="muted small" style="margin-top:10px">جامعه‌ای از زبان‌آموزان بااعتمادبه‌نفس که در هر گفت‌وگو، فرصت تازه‌ای می‌بینند.</p></div>' +
    '</section>' +
    '<section style="margin-top:40px"><h2 class="section-title center">ارزش‌های ما</h2>' +
      '<div class="grid cols-5" style="margin-top:24px">' +
        ['کیفیت', 'سادگی', 'اعتماد', 'پیشرفت', 'تمرین واقعی'].map(function (x) {
          return '<div class="card card-pad center" style="font-weight:800;color:var(--navy)">' + x + '</div>';
        }).join('') +
      '</div></section>' +
  '</div></div>';
}

function support() {
  return '<div class="page"><div class="wrap" style="max-width:900px">' +
    '<div class="center"><span class="eyebrow">مرکز راهنما</span><h1 class="section-title">چطور می‌توانیم کمکت کنیم؟</h1></div>' +
    '<div style="position:relative;margin-top:26px">' +
      '<i data-lucide="search" style="position:absolute;right:16px;top:15px;color:var(--muted);width:20px;height:20px"></i>' +
      '<input id="faqSearch" class="input" style="padding-right:46px" placeholder="سؤالت را جستجو کن..." oninput="searchFaq()">' +
    '</div>' +
    '<div class="grid cols-4" style="margin-top:24px">' +
      ['حساب کاربری', 'دوره‌ها', 'پرداخت', 'تعیین سطح', 'کلاس‌ها', 'پارتنر مکالمه', 'گواهینامه'].map(function (x) {
        return '<button class="card card-pad small" style="font-weight:700;color:var(--navy)" onclick="toast(\'راهنمای ' + x + ' انتخاب شد.\')">' + x + '</button>';
      }).join('') +
    '</div>' +
    '<div id="faqList" style="display:grid;gap:12px;margin-top:28px">' + FAQS.map(function (f) {
      return '<details class="faq"><summary>' + f.q + icon('chevron-down') + '</summary><p>' + f.a + '</p></details>';
    }).join('') + '</div>' +
    '<div class="center" style="margin-top:40px"><h2 style="font-weight:800;color:var(--navy)">جواب سؤالت را پیدا نکردی؟</h2>' +
      '<button class="btn btn-primary" style="margin-top:16px" onclick="go(\'contact\')">ارتباط با پشتیبانی</button></div>' +
  '</div></div>';
}

function searchFaq() {
  const input = document.getElementById('faqSearch');
  if (!input) return;
  const q = input.value.trim();
  document.querySelectorAll('.faq').forEach(function (el) {
    el.style.display = !q || el.textContent.indexOf(q) !== -1 ? '' : 'none';
  });
}

function contact() {
  return '<div class="page"><div class="wrap">' +
    '<div class="split">' +
      '<section class="card card-pad"><span class="eyebrow">ارتباط مستقیم</span><h1 class="section-title">با ما در ارتباط باش</h1>' +
        '<form class="form-grid" onsubmit="saveContact(event)">' +
          '<label class="field">نام<input id="contactName" class="input" required></label>' +
          '<label class="field">شماره تماس<input id="contactPhone" class="input" inputmode="tel" required></label>' +
          '<label class="field">ایمیل<input id="contactEmail" class="input" type="email" required></label>' +
          '<label class="field">موضوع<input id="contactSubject" class="input" required></label>' +
          '<label class="field full">پیام<textarea id="contactMessage" class="textarea" required></textarea></label>' +
          '<p id="contactStatus" class="status full" style="display:none"></p>' +
          '<button id="contactSubmit" class="btn btn-orange full" type="submit">ارسال پیام ' + icon('send') + '</button>' +
        '</form>' +
      '</section>' +
      '<aside style="background:var(--navy);color:#fff;border-radius:24px;padding:28px">' +
        '<h2 style="font-weight:800;font-size:1.4rem">کنار تو هستیم</h2>' +
        '<div style="display:grid;gap:18px;margin-top:24px;font-size:.9rem;color:#dbeafe">' +
          [['phone', '۰۲۱-۱۲۳۴۵۶۷۸'], ['mail', 'hello@ava-academy.ir'], ['map-pin', 'تهران، آموزش آنلاین برای همه'], ['clock', 'شنبه تا پنج‌شنبه، ۹ تا ۱۸']].map(function (x) {
            return '<div style="display:flex;gap:12px;align-items:center">' + icon(x[0]) + '<span>' + x[1] + '</span></div>';
          }).join('') +
        '</div>' +
      '</aside>' +
    '</div>' +
  '</div></div>';
}

function saveContact(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const status = document.getElementById('contactStatus');
  const btn = document.getElementById('contactSubmit');

  if (!name || !message) {
    status.textContent = 'نام و متن پیام را کامل کن.';
    status.className = 'status full err';
    status.style.display = 'block';
    return;
  }

  const all = readJSON(CKEY, []);
  all.push({ name: name, phone: phone, email: email, subject: subject, message: message, at: new Date().toISOString() });
  writeJSON(CKEY, all);

  status.textContent = 'پیامت با موفقیت ثبت شد. به‌زودی با تو در تماس هستیم.';
  status.className = 'status full ok';
  status.style.display = 'block';
  btn.disabled = true;
  e.target.reset();
  toast('پیام شما ثبت شد.');
}

function signup() {
  const p = getProfile() || {};
  const levels = ['مبتدی / A1', 'پایه / A2', 'متوسط / B1', 'متوسط رو به بالا / B2', 'پیشرفته / C1', 'حرفه‌ای / C2', 'نمی‌دانم'];
  const chosen = p.level || 'نمی‌دانم';
  return '<div class="page"><div class="wrap" style="max-width:760px">' +
    '<section class="card card-pad">' +
      '<span class="eyebrow">شروع مسیر</span>' +
      '<h1 class="section-title">' + (p.name ? 'اطلاعات پروفایلت را کامل کن' : 'حساب کاربری خودت را بساز') + '</h1>' +
      '<p class="muted small" style="margin-top:8px">پروفایل آموزشی‌ات را بساز تا مسیر پیشنهادی خودت را ببینی.</p>' +
      '<form id="signupForm" class="form-grid" onsubmit="saveProfile(event)">' +
        '<label class="field">نام<input class="input" id="firstName" value="' + esc(p.name) + '" required></label>' +
        '<label class="field">نام خانوادگی<input class="input" id="lastName" value="' + esc(p.family) + '" required></label>' +
        '<label class="field">شماره تماس<input class="input" id="phone" inputmode="tel" value="' + esc(p.phone) + '" required></label>' +
        '<label class="field">تاریخ تولد<input class="input" id="birthday" type="date" value="' + esc(p.birthday) + '"></label>' +
        '<label class="field full">ایمیل<input class="input" id="email" type="email" value="' + esc(p.email) + '" required></label>' +
        '<fieldset class="full" style="border:0;padding:0;margin:0">' +
          '<legend class="field" style="margin-bottom:8px">سطح زبان انگلیسی من</legend>' +
          '<div class="radio-grid">' + levels.map(function (l) {
            return '<label class="radio"><input type="radio" name="level" value="' + l + '"' + (l === chosen ? ' checked' : '') + ' onchange="togglePlacement(this.value)"> ' + l + '</label>';
          }).join('') + '</div>' +
          '<button id="placementBtn" type="button" class="btn btn-light btn-sm" style="margin-top:12px" onclick="toast(\'تعیین سطح رایگان به‌زودی برای تو آماده می‌شود.\')">تعیین سطح رایگان</button>' +
        '</fieldset>' +
        '<label class="check full"><input type="checkbox" required> قوانین و شرایط استفاده را مطالعه کرده‌ام و می‌پذیرم.</label>' +
        '<p id="signupStatus" class="status full" style="display:none"></p>' +
        '<button id="signupSubmit" class="btn btn-orange full" type="submit">ثبت‌نام و شروع یادگیری ' + icon('arrow-left') + '</button>' +
      '</form>' +
    '</section>' +
  '</div></div>';
}

function togglePlacement(value) {
  const btn = document.getElementById('placementBtn');
  if (btn) btn.style.display = value === 'نمی‌دانم' ? '' : 'none';
}

function saveProfile(e) {
  e.preventDefault();
  const status = document.getElementById('signupStatus');
  const btn = document.getElementById('signupSubmit');
  const levelInput = document.querySelector('input[name="level"]:checked');

  const record = {
    name: document.getElementById('firstName').value.trim(),
    family: document.getElementById('lastName').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    email: document.getElementById('email').value.trim(),
    birthday: document.getElementById('birthday').value,
    level: levelInput ? levelInput.value : 'نمی‌دانم',
    enrolled: (getProfile() || {}).enrolled || [],
    createdAt: new Date().toISOString()
  };

  if (!record.name || !record.family || !record.email) {
    status.textContent = 'نام، نام خانوادگی و ایمیل را کامل کن.';
    status.className = 'status full err';
    status.style.display = 'block';
    return;
  }

  setProfile(record);
  status.textContent = 'پروفایل آموزشی با موفقیت ساخته شد.';
  status.className = 'status full ok';
  status.style.display = 'block';
  btn.disabled = true;
  toast('خوش آمدی، ' + record.name + '!');
  setTimeout(function () { go('dashboard'); }, 600);
}

function enroll(id) {
  const course = COURSES.find(function (c) { return c.id === id; });
  if (!course) return;
  const p = getProfile();
  if (!p) {
    toast('برای ثبت‌نام، ابتدا پروفایل آموزشی‌ات را بساز.');
    go('signup');
    return;
  }
  const enrolled = Array.isArray(p.enrolled) ? p.enrolled.slice() : [];
  if (enrolled.indexOf(id) === -1) enrolled.push(id);
  p.enrolled = enrolled;
  setProfile(p);
  toast('دوره «' + course.title + '» به داشبورد تو اضافه شد.');
  go('dashboard');
}

function login() {
  const p = getProfile();
  return '<div class="page"><div class="wrap" style="max-width:520px">' +
    '<section class="card card-pad center">' +
      '<span class="eyebrow">داشبورد آموزشی</span>' +
      '<h1 class="section-title">خوش برگشتی!</h1>' +
      '<p class="muted small" style="margin-top:10px">برای مشاهده داشبورد و ادامه مسیر آموزشی، وارد شو.</p>' +
      '<div style="background:var(--soft);color:var(--navy);padding:16px;border-radius:14px;font-size:.85rem;margin-top:22px;text-align:right">' +
        'این نسخه اطلاعات ورود یا رمز عبور دریافت نمی‌کند و پروفایل فقط در همین مرورگر ذخیره می‌شود.' +
      '</div>' +
      (p
        ? '<button class="btn btn-primary btn-block" style="margin-top:22px" onclick="go(\'dashboard\')">ورود به داشبورد ' + icon('arrow-left') + '</button>'
        : '<button class="btn btn-primary btn-block" style="margin-top:22px" onclick="demoLogin()">ورود با حساب نمونه ' + icon('arrow-left') + '</button>') +
      '<p class="small muted" style="margin-top:18px">حساب آموزشی نداری؟ <button style="color:var(--blue);font-weight:700" onclick="go(\'signup\')">ثبت‌نام کن</button></p>' +
    '</section>' +
  '</div></div>';
}

function demoLogin() {
  setProfile({
    name: 'آوا', family: 'کریمی', phone: '', email: 'demo@ava-academy.ir', birthday: '',
    level: 'متوسط / B1', enrolled: ['conversation'], createdAt: new Date().toISOString()
  });
  toast('ورود با حساب نمونه انجام شد.');
  go('dashboard');
}

function dashboard() {
  const p = getProfile();
  const name = p ? (p.name + ' ' + (p.family || '')).trim() : 'آوا کریمی';
  const first = name.split(' ')[0] || 'آوا';
  const level = (p && p.level) || 'متوسط / B1';
  const enrolledIds = (p && p.enrolled && p.enrolled.length) ? p.enrolled : ['conversation'];
  const enrolled = enrolledIds.map(function (id) { return COURSES.find(function (c) { return c.id === id; }); }).filter(Boolean);
  const progress = (p && typeof p.progress === 'number') ? p.progress : 68;

  const sideLinks = [
    ['layout-dashboard', 'داشبورد', 'dashboard'],
    ['book-open', 'دوره‌های من', 'courses'],
    ['bell', 'اعلان‌ها', 'notifications'],
    ['messages-square', 'پارتنر مکالمه', 'partner'],
    ['settings', 'تنظیمات', 'settings']
  ];

  return '<div class="page"><div class="wrap"><div class="dash">' +
    '<aside class="card sidebar">' +
      '<div class="side-user"><div class="avatar">' + esc((name[0] || 'آ')) + '</div>' +
        '<strong style="color:var(--navy)">' + esc(name) + '</strong><span class="small muted">' + esc(level) + '</span></div>' +
      sideLinks.map(function (x) {
        return '<button class="side-link" data-route="' + x[2] + '" onclick="go(\'' + x[2] + '\')">' + icon(x[0]) + x[1] + '</button>';
      }).join('') +
    '</aside>' +

    '<section>' +
      '<div class="section-head"><div><span class="eyebrow">داشبورد من</span><h1 class="section-title">سلام ' + esc(first) + '، آماده‌ای ادامه بدی؟</h1></div>' +
        '<button class="btn btn-light btn-sm" onclick="go(\'notifications\')">' + icon('bell') + ' اعلان‌ها</button></div>' +

      '<div class="dash-top" style="margin-top:28px">' +
        '<div class="kpis">' +
          [['book-open', 'دوره‌های من', enrolled.length], ['circle-play', 'در حال یادگیری', Math.max(enrolled.length, 2)], ['award', 'گواهینامه‌ها', 1]].map(function (x) {
            return '<div class="card kpi"><span style="color:var(--blue)">' + icon(x[0]) + '</span>' +
              '<strong>' + x[2] + '</strong><span>' + x[1] + '</span></div>';
          }).join('') +
        '</div>' +
        '<div class="card card-pad center"><div class="ring" style="--p:' + progress + '"><div><span>پیشرفت کلی</span><strong>' + progress + '٪</strong></div></div></div>' +
      '</div>' +

      '<section class="card card-pad" style="margin-top:20px">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px">' +
          '<h2 style="font-weight:800;color:var(--navy);font-size:1.15rem">ادامه یادگیری</h2>' +
          '<button style="color:var(--blue);font-weight:700;font-size:.85rem" onclick="go(\'courses\')">همه دوره‌ها</button>' +
        '</div>' +
        '<div class="grid cols-2" style="margin-top:18px">' + enrolled.map(function (c) {
          return '<div style="border:1px solid var(--line);border-radius:16px;padding:16px">' +
            '<div style="display:flex;justify-content:space-between;gap:8px"><strong style="color:var(--navy)">' + esc(c.title) + '</strong>' +
              '<span class="small" style="color:var(--blue)">در حال یادگیری</span></div>' +
            '<div class="progress"><div class="progress-bar" style="width:' + progress + '%"></div></div>' +
            '<p class="small muted" style="margin-top:8px">' + progress + '٪ تکمیل شده</p>' +
            '<button class="btn btn-primary btn-sm" style="margin-top:14px" onclick="toast(\'درس بعدی برایت باز شد.\')">ادامه دوره</button>' +
          '</div>';
        }).join('') + '</div>' +
      '</section>' +

      '<section class="grid cols-2" style="margin-top:20px">' +
        '<div class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.05rem">فعالیت اخیر</h2>' +
          '<div style="display:grid;gap:12px;margin-top:16px">' +
            ['تمرین مکالمه امروز تکمیل شد', 'درس سوم Vocabulary دیده شد', 'بازخورد مدرس دریافت شد'].map(function (x) {
              return '<div style="display:flex;gap:8px;align-items:center;color:#58667c" class="small">' + icon('circle-check', 17) + ' ' + x + '</div>';
            }).join('') +
          '</div></div>' +
        '<div class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.05rem">پارتنر مکالمه</h2>' +
          '<p class="muted small" style="margin-top:10px">برای تمرین گفت‌وگوی واقعی، پارتنر مناسب خودت را پیدا کن.</p>' +
          '<button class="btn btn-pink btn-sm" style="margin-top:16px" onclick="go(\'partner\')">پیدا کردن پارتنر</button></div>' +
      '</section>' +
    '</section>' +
  '</div></div></div>';
}

function partner() {
  const levelFilters = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const topics = ['Daily Life', 'Travel', 'Work', 'Movies', 'Business', 'Education', 'Free Talk'];
  const kinds = ['هم‌سطح من', 'کمی قوی‌تر از من', 'پارتنر تصادفی'];

  let content = '';
  if (state.partnerStage === 'search') {
    content = '<div id="partnerContent" class="split" style="margin-top:28px">' +
      '<section class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.15rem">پارتنر مناسب خودت را پیدا کن</h2>' +
        '<div style="display:grid;gap:20px;margin-top:22px">' +
          partnerGroup('سطح', levelFilters, 2) +
          partnerGroup('موضوع گفت‌وگو', topics, 0) +
          partnerGroup('نوع پارتنر', kinds, 0) +
          '<button class="btn btn-orange" onclick="findPartner()">پیدا کردن پارتنر ' + icon('search') + '</button>' +
        '</div></section>' +
      '<aside class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.05rem">پارتنرهای آنلاین</h2>' +
        '<div style="display:grid;gap:16px;margin-top:18px">' +
          [['آرین', 'B1', IMG.student2], ['الناز', 'B2', IMG.student3], ['سام', 'A2', IMG.teacher1]].map(function (x) {
            return '<div style="display:flex;align-items:center;gap:12px">' +
              '<div style="position:relative"><img src="' + x[2] + '" alt="" style="width:44px;height:44px;border-radius:50%;object-fit:cover">' +
                '<span style="position:absolute;bottom:0;left:0;width:12px;height:12px;background:#22c55e;border-radius:50%;border:2px solid #fff"></span></div>' +
              '<div><strong class="small">' + x[0] + '</strong><span class="small muted" style="display:block">' + x[1] + ' · آنلاین</span></div></div>';
          }).join('') +
        '</div></aside>' +
    '</div>';
  } else if (state.partnerStage === 'found') {
    content = '<div id="partnerContent" class="split" style="margin-top:28px">' +
      '<section class="card card-pad center">' +
        '<div style="width:64px;height:64px;border-radius:50%;background:var(--soft);color:var(--blue);display:grid;place-items:center;margin:0 auto">' + icon('heart-handshake', 28) + '</div>' +
        '<h2 style="font-size:1.5rem;font-weight:800;color:var(--navy);margin-top:16px" dir="ltr">Partner Found!</h2>' +
        '<img src="' + IMG.student3 + '" alt="پارتنر مکالمه" style="width:96px;height:96px;object-fit:cover;border-radius:50%;margin:20px auto 0">' +
        '<h3 style="font-weight:800;font-size:1.2rem;margin-top:12px">الناز، سطح B1</h3>' +
        '<p class="muted small" style="margin-top:8px">زبان: فارسی و انگلیسی · موضوع مورد علاقه: Daily Life</p>' +
        '<button class="btn btn-primary" style="margin-top:22px" onclick="startChat()">شروع مکالمه ' + icon('message-circle') + '</button>' +
      '</section>' +
      '<aside class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.05rem">آماده‌ای؟</h2>' +
        '<p class="muted small" style="margin-top:10px">با یک معرفی کوتاه شروع کن؛ اشتباه‌کردن بخشی از یادگیری است.</p></aside>' +
    '</div>';
  } else {
    content = '<div id="partnerContent" class="split" style="margin-top:28px">' +
      '<section class="card chat">' +
        '<div class="chat-head"><div style="display:flex;align-items:center;gap:10px">' +
          '<img src="' + IMG.student3 + '" alt="" style="width:40px;height:40px;border-radius:50%;object-fit:cover">' +
          '<div><strong class="small">الناز</strong><span class="small" style="display:block;color:#16a34a">آنلاین</span></div></div>' +
          '<button class="btn btn-light btn-icon" onclick="toast(\'صدا بی‌صدا شد.\')" aria-label="بی‌صدا">' + icon('volume-x') + '</button></div>' +
        '<div class="chat-body" id="chatBody">' + state.chat.map(function (m) { return bubble(m.who, m.text); }).join('') + '</div>' +
        '<form class="chat-form" onsubmit="sendChat(event)">' +
          '<input id="chatInput" class="input" placeholder="پیام آموزشی خودت را بنویس..." autocomplete="off">' +
          '<button class="btn btn-primary btn-icon" aria-label="ارسال">' + icon('send') + '</button>' +
        '</form>' +
      '</section>' +
      '<aside class="card card-pad"><h2 style="font-weight:800;color:var(--navy);font-size:1.05rem">گفت‌وگوی آموزشی</h2>' +
        '<p class="muted small" style="margin-top:10px">پیشنهاد: از جمله‌های کوتاه استفاده کن و درباره روزت حرف بزن.</p>' +
        '<button class="btn btn-pink btn-block" style="margin-top:22px" onclick="endChat()">پایان مکالمه</button></aside>' +
    '</div>';
  }

  return '<div class="page"><div class="wrap">' +
    '<section style="background:var(--navy);color:#fff;border-radius:28px;padding:clamp(24px,4vw,48px)">' +
      '<span class="eyebrow eyebrow-light">Social Learning Platform</span>' +
      '<h1 style="font-size:clamp(1.6rem,3.4vw,2.4rem);font-weight:800;margin-top:16px" dir="ltr">English Conversation Partner</h1>' +
      '<p style="color:#dbeafe;margin-top:12px">یک پارتنر پیدا کن و انگلیسی را در مکالمه واقعی تمرین کن.</p></section>' +
    content +
  '</div></div>';
}

function partnerGroup(title, items, selectedIndex) {
  return '<fieldset style="border:0;padding:0;margin:0"><legend class="small" style="font-weight:700;color:var(--navy)">' + title + '</legend>' +
    '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px">' + items.map(function (x, i) {
      return '<button type="button" class="filter' + (i === selectedIndex ? ' active' : '') + '" onclick="selectPartner(this)">' + x + '</button>';
    }).join('') + '</div></fieldset>';
}

function selectPartner(el) {
  const group = el.parentElement;
  group.querySelectorAll('.filter').forEach(function (b) { b.classList.remove('active'); });
  el.classList.add('active');
}

function findPartner() { state.partnerStage = 'found'; render(); }
function startChat() {
  state.partnerStage = 'chat';
  if (!state.chat.length) {
    state.chat = [{ who: 'them', text: 'Hi! Nice to meet you. How was your day?' }];
  }
  render();
}
function endChat() { state.partnerStage = 'search'; render(); }

function bubble(who, text) {
  return '<div class="bubble ' + (who === 'you' ? 'bubble-you' : 'bubble-them') + '">' + esc(text) + '</div>';
}

function sendChat(e) {
  e.preventDefault();
  const input = document.getElementById('chatInput');
  const body = document.getElementById('chatBody');
  if (!input || !body) return;
  const text = input.value.trim();
  if (!text) return;
  state.chat.push({ who: 'you', text: text });
  body.insertAdjacentHTML('beforeend', bubble('you', text));
  input.value = '';
  body.scrollTop = body.scrollHeight;
  toast('پیام آموزشی ارسال شد.');
}

function notifications() {
  const read = readNotifs();
  const unreadCount = NOTIFS.filter(function (_, i) { return !read.has(i); }).length;
  return '<div class="page"><div class="wrap" style="max-width:900px">' +
    '<div class="section-head"><div><span class="eyebrow">مرکز اطلاع‌رسانی</span><h1 class="section-title">اعلان‌ها</h1></div>' +
      '<button class="btn btn-light btn-sm" onclick="markAllRead()">خواندن همه</button></div>' +
    '<div class="filters" style="justify-content:flex-start;margin-top:20px">' +
      '<span class="filter active">همه</span><span class="filter">' + unreadCount + ' خوانده‌نشده</span></div>' +
    '<div style="display:grid;gap:12px;margin-top:24px">' + NOTIFS.map(function (n, i) {
      const isUnread = !read.has(i);
      return '<button class="card notif' + (isUnread ? ' unread' : '') + '" onclick="readNotif(' + i + ')">' +
        '<span class="step-dot" style="margin:0;flex:none">' + icon(n.i) + '</span>' +
        '<span><strong style="display:block;color:var(--navy)">' + n.t + '</strong>' +
          '<small class="muted">' + (isUnread ? 'چند دقیقه پیش' : 'خوانده شده') + '</small></span>' +
      '</button>';
    }).join('') + '</div>' +
  '</div></div>';
}

function readNotif(i) {
  const read = readNotifs();
  read.add(i);
  setNotifs(read);
  toast('اعلان خوانده شد.');
  render();
}

function markAllRead() {
  setNotifs(new Set(NOTIFS.map(function (_, i) { return i; })));
  toast('همه اعلان‌ها خوانده شدند.');
  render();
}

function settings() {
  const p = getProfile();
  if (!p) {
    return '<div class="page"><div class="wrap" style="max-width:600px">' +
      '<section class="card card-pad center"><h1 class="section-title">تنظیمات</h1>' +
        '<p class="muted" style="margin-top:10px">برای دیدن تنظیمات، ابتدا پروفایل آموزشی بساز.</p>' +
        '<button class="btn btn-primary" style="margin-top:20px" onclick="go(\'signup\')">ساخت پروفایل</button></section>' +
    '</div></div>';
  }
  const rows = [
    ['user-round', 'اطلاعات شخصی', p.name + ' ' + (p.family || '') + ' · ' + (p.email || 'بدون ایمیل')],
    ['graduation-cap', 'سطح زبان', p.level || 'نامشخص'],
    ['bell', 'اعلان‌ها', 'یادآوری تمرین‌ها و پیام‌های آموزشی'],
    ['shield-check', 'حریم خصوصی', 'اطلاعات فقط در همین مرورگر ذخیره می‌شود.']
  ];
  return '<div class="page"><div class="wrap" style="max-width:820px">' +
    '<span class="eyebrow">مدیریت حساب</span><h1 class="section-title">تنظیمات</h1>' +
    '<div style="display:grid;gap:16px;margin-top:26px">' + rows.map(function (x) {
      return '<section class="card card-pad" style="display:flex;justify-content:space-between;gap:16px;align-items:center">' +
        '<div style="display:flex;gap:14px;align-items:center"><span class="step-dot" style="margin:0">' + icon(x[0]) + '</span>' +
          '<div><h2 style="font-weight:800;color:var(--navy);font-size:1rem">' + x[1] + '</h2>' +
          '<p class="muted small" style="margin-top:2px">' + esc(x[2]) + '</p></div></div>' +
      '</section>';
    }).join('') +
    '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
      '<button class="btn btn-light" onclick="go(\'signup\')">ویرایش پروفایل</button>' +
      '<button class="btn btn-pink" onclick="logout()">خروج از حساب</button>' +
    '</div></div></div>';
}

function logout() {
  try { localStorage.removeItem(PKEY); } catch (e) { /* ignore */ }
  toast('از حساب خارج شدی.');
  go('home');
}

function legal(type) {
  const title = type === 'terms' ? 'Terms & Conditions' : 'Privacy Policy';
  return '<div class="page"><div class="wrap" style="max-width:820px">' +
    '<section class="card card-pad"><span class="eyebrow">اطلاعات حقوقی</span>' +
      '<h1 class="section-title">' + title + '</h1>' +
      '<div class="muted" style="display:grid;gap:16px;margin-top:24px">' +
        '<p>استفاده از این پلتفرم به معنای پذیرش قوانین آموزشی، رعایت احترام در ارتباطات و استفاده مسئولانه از محتوا است.</p>' +
        '<p>اطلاعات آموزشی تنها برای ارائه تجربه بهتر، پیگیری پیشرفت و پشتیبانی از مسیر یادگیری نگهداری می‌شود.</p>' +
        '<p>در بخش پارتنر مکالمه، گفت‌وگوها باید محترمانه، آموزشی و مطابق با اصول جامعه امن یادگیری باشند.</p>' +
        '<p>برای پرسش درباره این موارد، از بخش تماس با ما استفاده کن.</p>' +
      '</div></section>' +
  '</div></div>';
}

/* ---------- router ---------- */
const PAGES = {
  home: home,
  courses: coursesPage,
  course: courseDetail,
  teachers: teachersPage,
  teacher: teacherDetail,
  students: studentsPage,
  about: about,
  support: support,
  contact: contact,
  partner: partner,
  signup: signup,
  login: login,
  dashboard: dashboard,
  notifications: notifications,
  settings: settings,
  terms: function () { return legal('terms'); },
  privacy: function () { return legal('privacy'); }
};

function render() {
  const parsed = parseHash();
  const page = PAGES[parsed.route] || home;
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = page(parsed.param);
  afterRender(parsed.route, parsed.param);
}

function afterRender(route, param) {
  const activeRoute = route === 'course' ? 'courses' : route === 'teacher' ? 'teachers' : route;
  document.querySelectorAll('[data-route]').forEach(function (el) {
    el.classList.toggle('active', el.dataset.route === activeRoute);
  });
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
  if (route === 'signup') {
    const checked = document.querySelector('input[name="level"]:checked');
    if (checked) togglePlacement(checked.value);
  }
  if (route === 'partner' && param === 'chat') {
    const body = document.getElementById('chatBody');
    if (body) body.scrollTop = body.scrollHeight;
  }
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', function () {
  if (!location.hash) location.hash = '#/home';
  render();
});
