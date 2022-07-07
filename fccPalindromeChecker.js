/* function spec
    parameters
      str: String
    output
      true => if str is palindrome
      false => otherwise
*/

//TODO use regular expressions to get rid of non-alphanumeric chars
function isPalindrome(str) {

  /*formatting input
    1st step - get rid of non-alphanumeric char-s using regexp
    2nd step - avoid case sensitivity-related problems
  */
  ////TODO refactor regexp!!! all failed test cases include some kind of special characters
  let alphaNumOnlyRegExp = /[a-zA-Z0-9]/g;
  let formattedStr = str.match(alphaNumOnlyRegExp).join('');
  formattedStr = str.toLowerCase();

  //Recursion

  //base case => empty string or 1-char string obviously palindrome
  if (formattedStr=='' || formattedStr.length == 1) {
    return true;
  }
  /*recursive step
  assume we have formattedStr => "abba"
  assume we've already checked center of formattedStr, except first and last character:
  that means we already know that 'bb' is palindrome
  'bb' in general case can be expressed => formattedStr.slice(1,-1)
  
  to check if 'abba' is palindrome we also need to ensure
  that 'a'=='a', in general case => 
  =>formattedStr[0] == formattedStr[formattedStr.length - 1]
  */
  else {
    return isPalindrome(formattedStr.slice(1,-1)) &&
           formattedStr[0] == formattedStr[formattedStr.length - 1];
  
  }
}


console.log(isPalindrome(''))//true
console.log(isPalindrome('q'))//true
console.log(isPalindrome('11'))//true
console.log(isPalindrome('1234'))//false
console.log(isPalindrome('frwtewt'))//false
console.log(isPalindrome('oiuytrrtyuio'))//true
console.log(isPalindrome('1WWWWqqWWww1'))//true
console.log(isPalindrome('iownfiwenf'))//false
console.log(isPalindrome('  ee  '))//true
console.log(isPalindrome('q 6787 uuu'))//false