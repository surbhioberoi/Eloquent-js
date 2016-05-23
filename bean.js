function countBs(str) {                       
  return countChar(str, 'B');                 
}                                             
                                              
function countChar(str, chr) {                
  var result = 0                              
  for (var i = 0; i < str.length; i++) {      
    if (str[i] === chr) {                     
      result++;                               
    }                                         
  }                                           
  return result;                              
} 

                                            
console.log(countBs("BBC"));                  
// → 2                                        
console.log(countChar("kakkerlak", "k"));     
// →                                          