# require 'pry'

# Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
# Examples

# "()"              =>  true
# ")(()))"          =>  false
# "("               =>  false
# "(())((()())())"  =>  true

# Constraints

# 0 <= input.length <= 100

# Along with opening (() and closing ()) parenthesis, input may contain any valid ASCII characters. Furthermore, the input string may be empty and/or not contain any parentheses at all. Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).


def valid_parenthesis(string)

  string.gsub!(/[^()]/, '')

  # get rid of all characters other than () and split into an array
  splitted = string.split('')

  # idea is to loop through an array and remove all the () one round at a time until 
  # no more remaining () is left
  while splitted.length > 2
    splitted.each_with_index do |el, i|

      if splitted[i] == "(" && splitted[i + 1] == ")"
        splitted.slice!(i, 2) 

      end
    end
  end

  splitted.join('') == "()"

end


# p valid_parenthesis(")(()))")
p valid_parenthesis("asdfsdf(sdsa)a1234sdasd")
p valid_parenthesis("())(")
p valid_parenthesis("()(")
p valid_parenthesis("())(()") 
p valid_parenthesis("()()") 
p valid_parenthesis("(())((()())())") 
  
# binding.pry