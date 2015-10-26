problem 2

var first = 0;
var second = 1;
var total = 0;
var superman = 0;

var fib = [];

for (i=0; i<32; i++) {
    total = first + second;
    first = second;
    second = total;
    
    fib[i] = total;
};

for (j=1; j<fib.length; j+=3) {
    sum = fib[j] + superman;
    superman = sum;
};

console.log(fib);
console.log(fib.length);
console.log(sum);