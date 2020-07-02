// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
//using recursion
//find the base case
    if (n === row){
        return;
    }
//when to move on to the next row
    if (n === stair.length){
        console.log(stair);
        return steps(n, row +1);
    }
//what happens within each row
    // if (row >= stair.length){
    //     stair += '#';
    // }else{
    //     stair += ' ';
    // }
    const add = stair.length <= row ?'#':' '; 
     steps(n, row,stair+add)
  
    
}

module.exports = steps;
//solution #1
// for (let i = 0; i < n; i++){
//     let stair ='';
//     for (let j = 0; j < n; j++){
//         if (j <= i){
//             stair += '#';
//         }else{
//             stair += ' ';
//         }
//     }
//     console.log(stair);
// }