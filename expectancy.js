function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centuries = {};

for (var i in ancestry) {
  var age = ancestry[i].died - ancestry[i].born;
  var century = Math.ceil(ancestry[i].died / 100);
  
  if (!centuries.hasOwnProperty(century)) {
    centuries[century] = [];
   }
  
  centuries[century].push(age);
 }
 
for (var i in centuries) {
  console.log(i + ": " + average(centuries[i]).toFixed(1));
}
