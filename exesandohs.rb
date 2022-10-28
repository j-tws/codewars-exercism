# require 'pry'

# Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

#   Examples input/output:
  
#   XO("ooxx") => true
#   XO("xooxx") => false
#   XO("ooxXm") => true
#   XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
#   XO("zzoo") => false
  
def XO str

  lowercase_str = str.downcase
  p lowercase_str.count("x") == lowercase_str.count("o")

end

XO "oOXx"
XO "ooOXx"
XO "zzoo"
XO "zzzssd"

# binding.pry