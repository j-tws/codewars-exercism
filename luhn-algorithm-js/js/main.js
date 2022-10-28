console.log('luhn');

// Instructions
// ​
// Given a number determine whether or not it is valid per the Luhn formula.
// ​
// The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.
// ​
// The task is to check if a given string is valid.
// Validating a Number
// ​
// Strings of length 1 or less are not valid. Spaces are allowed in the input, but they should be stripped before checking. All other non-digit characters are disallowed.
// Example 1: valid credit card number
// ​
// 4539 3195 0343 6467
// ​
// The first step of the Luhn algorithm is to double every second digit, starting from the right. We will be doubling
// ​
// 4_3_ 3_9_ 0_4_ 6_6_
// ​
// If doubling the number results in a number greater than 9 then subtract 9 from the product. The results of our doubling:
// ​
// 8569 6195 0383 3437
// ​
// Then sum all of the digits:
// ​
// 8+5+6+9+6+1+9+5+0+3+8+3+3+4+3+7 = 80
// ​
// If the sum is evenly divisible by 10, then the number is valid. This number is valid!
// Example 2: invalid credit card number
// ​
// 8273 1232 7352 0569
// ​
// Double the second digits, starting from the right
// ​
// 7253 2262 5312 0539
// ​
// Sum the digits
// ​
// 7+2+5+3+2+2+6+2+5+3+1+2+0+5+3+9 = 57
// ​
// 57 is not evenly divisible by 10, so this number is not valid.


function valid(string){
  
  // remove spaces from string and convert to num
  const joinedStr = string.split(' ').join('')

  let newNum = []
  // create a loop that only loop through every second number
  for (let i = 0; i < joinedStr.length; i++) {
    let num = Number(joinedStr[i])

    // if its every second number * 2. if its more than 9 then minus 9 from it
    if (i % 2 === 0){
      if (num * 2 > 9){
        
        newNum.push(num * 2 - 9)
      } else {
        newNum.push(num * 2)
      }
      
    } else {
      newNum.push(num)
    }

  }

  console.log(newNum)

  // sum up the total
  let total = newNum.reduce( (prevValue, currentValue) => (
    prevValue + currentValue
  ), 0)

  return total % 10 === 0 ? 'valid' : 'invalid'

}

console.log(valid('4539 3195 0343 6467'))
console.log(valid('8273 1232 7352 0569'))
console.log(valid(' 0'))