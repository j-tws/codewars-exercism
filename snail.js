// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

snail = function(array) {
  const reversedArray = [...array].reverse().map(childArr => [...childArr].reverse())
  let rounds = 0
  
  const halfRound = (mainArray) => {
    const halfRoundResults = []

    for (let i = 0 + rounds; i < mainArray.length - rounds; i++) {
      const childArray = mainArray[i]
      
      for (let j = 0 + rounds; j < childArray.length - rounds; j++) {
        const element = childArray[j]

        if (i === 0 + rounds){
          halfRoundResults.push(element)
        } else if (i > 0 && j === childArray.length - 1 - rounds){
          halfRoundResults.push(element)
        }
      }
    }

    return halfRoundResults
  }

  let finalResults = []

  while (rounds <= array.length){
    const firstHalf = halfRound(array)
    const secondHalf = halfRound(reversedArray)
    secondHalf.pop()
    secondHalf.shift()

    finalResults = [...finalResults, ...firstHalf, ...secondHalf]
    rounds++
  }
  
  return finalResults.flat()
}

const arr2 = [[10, 21, 33, 45, 1], [33, 45, 1, 3, 2], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]

console.log(snail(arr2))
