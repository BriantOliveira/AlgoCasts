// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/** 1st METHOD */
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

/** 2nd METHOD */
function reverse(str) {
  return str.split('').reverse().join('');
}

/** 3rd METHOD */
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

/** 4th METHOD */
// function reverse(str) {
//   str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

module.exports = reverse;
