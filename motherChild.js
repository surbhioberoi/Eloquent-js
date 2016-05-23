function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var difference = [];
for (var i=0; i<ancestry.length; i++) {
  var child = ancestry[i];
  var mother = byName[child.mother];
  
  if (mother !== undefined) {  
      difference.push(child.born - mother.born);
  }
  	
}

console.log(average(difference));