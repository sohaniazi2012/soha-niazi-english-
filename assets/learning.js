'use strict';
const Learning = (() => {
  const normalize = text => String(text).trim().toLowerCase().replace(/\s+/g, ' ');
  function complete(progress, id, now = Date.now()) {
    if (progress.cards[id]) return progress;
    return {...progress, cards: {...progress.cards, [id]: {completedAt:now}}, activities: [...progress.activities, {kind:'lesson', id, at:now}]};
  }
  function canSpeak(used, subscribed = false) { return subscribed || used < 5; }
  function validPhone(value) { return /^09\d{9}$/.test(value); }
  function digits(value) { return value.replace(/[۰-۹٠-٩]/g, c => String('۰۱۲۳۴۵۶۷۸۹'.includes(c) ? '۰۱۲۳۴۵۶۷۸۹'.indexOf(c) : '٠١٢٣٤٥٦٧٨٩'.indexOf(c))); }
  return {normalize, complete, canSpeak, validPhone, digits};
})();
if (typeof module !== 'undefined') module.exports = Learning;
