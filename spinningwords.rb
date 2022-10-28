# require 'pry'

def spin_words(string)

  splitted = string.split(' ')

  splitted.each do |word|
    if word.length > 4
      word.reverse!
    end
  end

  splitted.join(' ')

end



p spin_words "o a kak ushakov lil vo kashu kakao"
  

# binding.pry