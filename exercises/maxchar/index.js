// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// make the str into an object
    //count str and return larges number

    
function maxChar(str) {
    
    let charStr = {};
    let max =0;
    let maxChar = '';
    for (let char of str){
        charStr[char] = charStr[char]+1 || 1;
    }
    
    for (let char in charStr){
        if(charStr[char]>max){
            max = charStr[char];
            maxChar = char
        }
    }
    return maxChar;
}

module.exports = maxChar;
// const charStr = {};
// let max = 0;
// let maxChar = '';
// for (let char of str){
//     charStr[char] = charStr[char]+1 || 1;
// }

// for (let char in charStr){
//     if (charStr[char] > max){
//         max = charStr[char];
//         maxChar = char;
//     }
// }
// return maxChar;