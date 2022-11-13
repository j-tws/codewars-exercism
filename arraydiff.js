// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(arr1, arr2){

//   let output = []
//   for (let i = 0; i < arr1.length; i++) {
//     if ( !arr2.includes(arr1[i]) ){
//       output.push(arr1[i])
//     }
//   }

//   return output
// }

// A more clever method
function arrayDiff(arr1, arr2){
  return arr1.filter( e => !arr2.includes(e))
}

console.log(arrayDiff([1,2,3,4],[1,2]));
console.log(arrayDiff([1,2,2,2,3],[2]));
