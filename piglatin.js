const pigLatin = (string) => {
  const vowels = 'aeiou'
  const xy = 'xy'
  const twoLetterClusters = ['ch', 'qu', 'th']
  const threeLetterClusters = ['thr', 'sch', 'squ']
  const firstTwo = string.substring(0,2)
  const firstThree = string.substring(0,3)

  if (vowels.includes(string[0]) || (xy.includes(firstTwo[0]) && !vowels.includes(firstTwo[1])) ) {
    return `${string}ay`

  } else if (threeLetterClusters.includes(firstThree)){
    const remaining = string.slice(3, string.length)
    return `${remaining}${firstThree}ay`

  } else if (twoLetterClusters.includes(firstTwo) || firstThree[2] === 'y'){
    const remaining = string.slice(2, string.length)
    return `${remaining}${firstTwo}ay`

  } else if (!vowels.includes(string[0])){
    const remaining = string.slice(1, string.length)
    return `${remaining}${string[0]}ay`
  }

}

const translate = (sentence) => {
  const translated = sentence.split(' ').map(word => pigLatin(word)).join(' ')
  return translated
}

// tests log
console.log(pigLatin('apple'))
console.log(pigLatin('hello'))
console.log(pigLatin('chair'))
console.log(pigLatin('square'))
console.log(pigLatin('school'))
console.log(pigLatin('xenon'))
console.log(pigLatin('yttria'))
console.log(pigLatin('rhythm'))
console.log(pigLatin('quick'))
console.log(translate('quick fast run'));

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}