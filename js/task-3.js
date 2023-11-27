'use strict';

const badWord1 = 'spam';
const badWord2 = 'sale';

function checkForSpam(message) {
  const hasBadWord1 = message.toLowerCase().includes(badWord1);
  const hasBadWord2 = message.toLowerCase().includes(badWord2);
  return hasBadWord1 || hasBadWord2;
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
