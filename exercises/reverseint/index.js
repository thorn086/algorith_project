// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   //convert to a string
   //reverse string
   //join string
   //check for a negitive number
  let x = n.toString().split('').reverse().join('');
  return parseInt(x)*Math.sign(n);
}

module.exports = reverseInt;
// const x = n.toString().split('').reverse().join('');
// return parseInt(x) * Math.sign(n);