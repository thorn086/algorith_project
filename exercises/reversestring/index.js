// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   return str.split('').reverse().join('');
}

module.exports = reverse;
			 //return str.split('').reduce((rev, char)=>{
      // return char + rev;}, '');
    //return str.split('').reverse().join(''); //solution #1
//solution 2
// let reversed = '';
// for (let character of str) {
//     reversed = character + reversed;
// }
// return reversed;