var size = 8;

for (var i = 0; i < size; i++) {
  var result = '';
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
    	result += '#';
    } 
    else {
    	result += ' ';
    }
  }
  console.log(result);
}
