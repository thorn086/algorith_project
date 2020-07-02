// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const a =  convertStr(stringA);
  const b = convertStr(stringB);

  return a === b;
}
function convertStr(str) {
  return str.replace(/[^\w]/g).split('').sort().join('');
}

module.exports = anagrams;
// const aCharMap = charOnly(stringA);
//     const bCharMap = charOnly(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     }

//     for ( let item in aCharMap){
//         if (aCharMap[item] !== bCharMap[item]){
//             return false;
//         }else{
//             return true;
//         }
//     }
//     function charOnly(str){
//         charMap={};
//         for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
//             charMap[char] = charMap[char]+1||1;
//         }
//         return charMap;
//     }

  // //Option #2 performance issue -take note-
  // const a = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
  // const b = stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
  //   return a === b;