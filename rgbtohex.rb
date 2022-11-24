# The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

# Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

# The following are examples of expected output values:

# rgb(255, 255, 255) // returns FFFFFF
# rgb(255, 255, 300) // returns FFFFFF
# rgb(0,0,0) // returns 000000
# rgb(148, 0, 211) // returns 9400D3


def rgb(num1, num2, num3)

  def table 
  {
    10 => "A",
    11 => "B",
    12 => "C",
    13 => "D",
    14 => "E",
    15 => "F"
  }
  end

  def convert(num)

    if num > 255
      num = 255
    elsif num < 0
      num = 0
    end

    first = ((num.to_f / 16)).to_i
    second = (((num.to_f / 16) - (num / 16).to_i) * 16).to_i

    if first > 9
      first = table[first]
    end

    if second > 9
      second = table[second]
    end

    "#{first}#{second}"
  end

  "#{convert(num1)}#{convert(num2)}#{convert(num3)}"
  
end


p rgb(255, 255, 255)
p rgb(255, 255, 300)
p rgb(0, 0, 0)
p rgb(0, 0, -20)
p rgb(148, 0, 211)

# p 6 / 4.to_f
