'use strict';
const Learning = (() => {
  const DAY = 86400000;
  const normalize = text => String(text).trim().toLowerCase().replace(/\s+/g, ' ');
  function nextReview(card, correct, now = Date.now()) {
    const repetitions = correct ? Math.min((card.repetitions || 0) + 1, 3) : 0;
    const days = correct ? [2, 3, 7][repetitions - 1] : 0;
    return {...card, repetitions, due: now + (correct ? days * DAY : 10 * 60000), attempts: (card.attempts || 0) + 1};
  }
  function complete(progress, id, now = Date.now()) {
    if (progress.cards[id]) return progress;
    return {...progress, cards: {...progress.cards, [id]: {repetitions:0, due:now + DAY, attempts:0}}, activities: [...progress.activities, {kind:'lesson', id, at:now}]};
  }
  function dueCards(progress, now = Date.now()) {
    return Object.entries(progress.cards).filter(([, card]) => card.due <= now && card.repetitions < 3).map(([id]) => id);
  }
  function canSpeak(used, subscribed = false) { return subscribed || used < 5; }
  function validPhone(value) { return /^09\d{9}$/.test(value); }
  function digits(value) { return value.replace(/[۰-۹٠-٩]/g, c => String('۰۱۲۳۴۵۶۷۸۹'.includes(c) ? '۰۱۲۳۴۵۶۷۸۹'.indexOf(c) : '٠١٢٣٤٥٦٧٨٩'.indexOf(c))); }
  return {normalize, nextReview, complete, dueCards, canSpeak, validPhone, digits};
})();
if (typeof module !== 'undefined') module.exports = Learning;
