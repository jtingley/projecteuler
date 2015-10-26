problem 6

x = 1
y = 1

sum = 0 
square = 0

while x < 101
	adder = x
	money = adder * adder
	sum += money
	x += 1
end

while y < 101
	square += y
	y += 1
end

square = square * square

answer = square - sum

puts square
puts sum
puts answer