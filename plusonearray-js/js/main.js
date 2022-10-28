console.log('plusonearray');

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//     the array can't be empty
//     only non-negative, single digit integers are allowed

// Return nil (or your language's equivalent) for invalid inputs.
// Examples

// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// function upArray(arr){

//   // conditionals for invalid arrays
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 || String(arr[i]).length > 1 ){
//       return undefined
//     }
//   }

//   let newArr = []
//   // try using reverse loop
//   // create an a new array of an old array + 1
//   for (let i = arr.length - 1; i >= 0; i--) {
//     // console.log(arr[i])
//     if (i === arr.length - 1){
//       newArr.unshift( arr[i] + 1)
//       i--
//     } 
//     if (arr.length > 1){
//       newArr.unshift(arr[i])
//     }
//   }
  
//   // if there are increase of digits after addition
//   for (let i = newArr.length - 1; i >= 0; i--) {

//     if (newArr[i].toString().length > 1){
//       newArr[i] = 0
//       newArr[i - 1] += 1

//       if (newArr[0] === 10 ){
//         newArr[0] = 0
//         newArr.unshift(1)
//       }
//     }
//   }
//   return newArr

// }

// Refactored version
function upArray(arr){

  // conditionals for invalid arrays
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || String(arr[i]).length > 1 ){
      return undefined
    }
  }

  // try using reverse loop without shifting
  // Learn from solutions
  for (let j = arr.length - 1; j >= 0; j--) {

    // check if current element of the array is 9 or not
    // if it is not 9 (which starts from the last element) , add 1
    // then break the loop and return arr 
    if (arr[j] !== 9){
      arr[j] += 1
      break

    // else if it is 9, current element will set to be 0, and the next loop will add next element + 1 and break loop
    } else {
      arr[j] = 0
    }
    
    // if j has managed to reach the last loop, meaning we need to add one more digit to array number
    if (j === 0){
      arr.unshift(1)
    }
    
  }
  return arr

}





console.log(upArray([4, 3, 2, 5]))
console.log(upArray([1, 2, 3, 9]))
console.log(upArray([9, 9, 9, 9]))
console.log(upArray([0]))
console.log(upArray([1, -9]))
console.log(upArray([1, 2, 33]))
console.log(upArray([0, 1, 3, 7]))

