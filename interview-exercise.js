
// write a function that takes a string input
// that returns the number of vowels in the string

function vowelsInString(string){
  
  // write pseudocode first!
  // devise a plan in the beginning
  const splitted = string.split('')

  const vowels = ["a", "e", "i", "o", "u"]
  let vowelNum = 0
  for (let i = 0; i < splitted.length; i++) {
    if ( vowels.includes(splitted[i]) ){
      vowelNum++
    } 
  }
  return vowelNum
  // summarize your code

}

// console.log(vowelsInString("hello"))
console.log(vowelsInString("an interview tip"))

