// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let b = str.split('').reverse().join('');
    return str === b;
}

module.exports = palindrome;
    // let a = str;
    // let b = str.split('').reduce((rev, char)=>{
    //     return char + rev;

    // }, '');
    // if( a === b){
    //     return true;
    // }else{
    //     return
    // }

    //solution2
    //return str.split('').every((val, i)=> {return val === str[str.length-i-1]});
