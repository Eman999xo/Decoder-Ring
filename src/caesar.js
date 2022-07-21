// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift = 0, encode = true) {
    let string = [];
    
    let encryptDecrypt;
    //gaurd case if shift is out of limits
    if (shift === 0 || shift < -25 || shift > 25) return false;
    //sets decode mode by inverting shift
    if(!encode){
      shift *= -1
    }
    for (let i = 0; i < input.length; i++) {
      
      let lowerCaseLetter = input.toLowerCase();
      
      let char = lowerCaseLetter.charCodeAt(i);
      
      const shifted = char + shift
      
      if(char >= 97 && char <=122) {
        //shifting letters 
        if(shifted > 122){
          
          string.push(shifted - 26)
        } else if(shifted < 97){
          
          string.push(shifted + 26)
        } else{
          
          string.push(shifted)
        }
       
      } else {
        string.push(char);
      }
    }
    
    encryptDecrypt = String.fromCharCode(...string);
    
    return encryptDecrypt;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
