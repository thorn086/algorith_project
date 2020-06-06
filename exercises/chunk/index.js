// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
   const chunked =[];

   for (let items of array){
     let last = chunked[chunked.length -1];

     if( !last || last.length === size){
         chunked.push([items])
     }else{
         last.push(items);
     }
   }
   return chunked;
}

module.exports = chunk;
 //create a new array
//  const chunked = [];
//  //iterate over the array and add to new array based on size
//  for (let element of array){
//      const last = chunked[chunked.length -1];
//      //if there is no array or length is the same as size create new chunk
//      if(!last || last.length === size){
//          chunked.push([element]);
//      }else{
//          //add element to new chunk
//          last.push(element);
//      }
//  }
//  return chunked;