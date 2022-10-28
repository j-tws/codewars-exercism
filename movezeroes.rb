# require 'pry'

# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# moveZeros [1,2,0,1,0,1,0,3,0,1] #-> [1,2,1,1,3,1,0,0,0,0]


def move_zeroes(arr)

  total_zeroes = arr.count 0
  arr.delete(0)
  total_zeroes.times do 
    arr << 0
  end

  arr

end


p move_zeroes [1,2,0,1,0,1,0,3,0,1]
  

# binding.pry