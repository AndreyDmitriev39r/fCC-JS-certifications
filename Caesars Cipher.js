function rot13(str) {
    let decodedStr = "";
  
    for (let i = 0; i < str.length; i++) {
  
      let currentCharCode = str.charCodeAt(i);
  
      if (
        currentCharCode >= 65 &&
        currentCharCode <= 77
      ) {
        decodedStr += String.fromCharCode(currentCharCode + 13);
      }
  
      else if (
        currentCharCode >= 77 &&
        currentCharCode <= 90
      ) {
        decodedStr += String.fromCharCode(currentCharCode - 13);
      }
  
      else {decodedStr += str[i]};
  
    }
  
    return decodedStr;
  }
  
  rot13("SERR PBQR PNZC");