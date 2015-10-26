//problem 1 - Answer: 233168

var goodies = [];
/*
for (i=2; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    goodies.push(i);    
  };
};
*/

function divs(i){
    if (i === 2) {
        return
    }
    else if (i % 3 === 0 || i % 5 === 0) {
      goodies.push(i); 
    };
    divs(i-1);
}
/*
var total = 0;

for (j=0; j<goodies.length; j++) {
    total += goodies[j];
};
*/

divs(999);
var total = goodies.reduce(function(a,b){
    return a + b;
});