problem 10

require 'prime'

primeArray = Array.new

Prime.each(2000000) do |prime|
	primeArray.push(prime)
end

primeSum = primeArray.inject{|sum,x| sum + x }
puts primeSum