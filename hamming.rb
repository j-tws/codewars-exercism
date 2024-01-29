=begin
Write your code for the 'Hamming' exercise in this file. Make the tests in
`hamming_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/hamming` directory.
=end

class Hamming
  def self.compute(dna1, dna2)
    raise ArgumentError if dna1.length != dna2.length
    
    count = 0
    current = 0

    while current < dna1.length
      count += 1 if dna1[current] != dna2[current]
      current += 1
    end

    count
  end
end
