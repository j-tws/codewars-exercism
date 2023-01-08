// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//      HH = hours, padded to 2 digits, range: 00 - 99
//      MM = minutes, padded to 2 digits, range: 00 - 59
//      SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359,999 (99:59:59)

// You can find some examples in the test fixtures.

const humanReadable = (seconds) => {
  const hours = seconds / 3600
  const readableHours = Math.floor(hours)

  const minutes = (hours - readableHours) * 60
  let readableMinutes = Math.floor(minutes).toString()
  if (readableMinutes === '0'){
    readableMinutes = '00'
  }

  const second = (minutes - parseInt(readableMinutes)) * 100
  let readableSecond = Math.floor(second)
  if (parseInt(readableSecond) > 60){
    readableSecond === '59'
  } else if (parseInt(readableSecond) === '0'){
    readableSecond === '00'
  }
  
  console.log(readableHours, readableMinutes, readableSecond);
}

console.log(humanReadable(86400))
console.log(humanReadable(86399))

// testing for push

