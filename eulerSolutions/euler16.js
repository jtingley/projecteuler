problem 16

def digits(n)
    Math.log10(n).floor.downto(0).map { |i| (n / 10**i) % 10 }
end

ary = digits(2**1000)

primeSum = ary.inject{|sum,x| sum + x }
puts primeSum