// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:

//     Leading zeros (e.g. 01.02.03.04) are considered invalid
//     Inputs are guaranteed to be a single string

function isValidIP(str){
  const regex = /[a-zA-Z\s]/i
  initialSplit = str.split('.')

  if (initialSplit.length !== 4){
    return false
  }

  for (let i = 0; i < initialSplit.length; i++) {
    if (initialSplit[i] > 255 || initialSplit[i] < 0 || (initialSplit[i][0] === '0' && initialSplit[i].length > 1) || regex.test(initialSplit[i]) || initialSplit[i].length === 0){
      return false
    }
  }

  return true
}

console.log(isValidIP('1.2.3.4'))
console.log(isValidIP('0.0.0.0'))
console.log(isValidIP('1.2.3.4.5'))
console.log(isValidIP('123.456.78.90'))
console.log(isValidIP('123.045.067.089'))
console.log(isValidIP('123.45.67.89'))
console.log(isValidIP('123.45.67.89\n'))
console.log(isValidIP('12e3.45.67.89'))
console.log(isValidIP('123..67.89'))