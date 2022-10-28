# require 'pry'

def get_count(string)

  splitted_string = string.split('')
  vowels = ["a", "e", "i", "o", "u"]
  vowel_count = 0

  splitted_string.each do |el|

    if vowels.include? el
      vowel_count += 1
    end

  end

  vowel_count

end

p get_count "hello"
p get_count "abracadabra"
p get_count "o a kak ushakov lil vo kashu kakao"
  

# binding.pry