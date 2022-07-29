/*
TO DO
optimize to use less pipes and shorten whole thing
perrfomance is not good at all, tho tests passed
*/

function telephoneCheck(str) {
    /*pseudocode
    1. start pattern:
    '1' [1]
    or '1 ' [1]\s
    or ''
    IMPLEMENTATION >>> ^([1]|[1]\s|.{0})
    
    2. 2nd block
    3 digits >> \d{3}
    or 3 digits in parenthesis >> \(\d{3}\)
    or 3 digits followed by space >> \d{3}\s
    or 3 digits followed by hyphen >> \d{3}[-]
    or 3 digits in parenthesis followed by space >> \(\d{3}\)\s
    IMPLEMENTATION >>> \d{3}|\(\d{3}\)|\d{3}\s|\d{3}[-]|\(\d{3}\)\s
    
    3. 3rd block
    3 digits
    or 3 digits followed by hyphen
    or 3 digits followed by space
    IMPLEMENTATION >>> \d{3}|\d{3}\s|\d{3}[-]
    
    4. 4thblock/end pattern
    4 digits
    IMPLEMENTATION >>> \d{4}$
    */
    const telephoneRegex = /^([1]|[1]\s|.{0})(\d{3}|\(\d{3}\)|\d{3}\s|\d{3}[-]|\(\d{3}\)\s)(\d{3}|\d{3}\s|\d{3}[-])\d{4}$/
    return telephoneRegex.test(str);
  }
  
  
  const fccTestCases = [
      ["555-555-5555", true],
      ["1 555-555-5555", true],
      ["1 (555) 555-5555", true],
      ["5555555555", true],
      ["555-555-5555", true],
      ["(555)555-5555", true],
      ["1(555)555-5555", true],
      ["555-5555", false],
      ["5555555", false],
      ["1 555)555-5555", false],
      ["1 555 555 5555", true],
      ["1 456 789 4444", true],
      ["123**&!!asdf#", false],
      ["55555555", false],
      ["(6054756961)", false],
      ["2 (757) 622-7382", false],
      ["0 (757) 622-7382", false],
      ["-1 (757) 622-7382", false],
      ["2 757 622-7382", false],
      ["10 (757) 622-7382", false],
      ["27576227382", false],
      ["(275)76227382", false],
      ["2(757)6227382", false],
      ["2(757)622-7382", false],
      ["555)-555-5555", false],
      ["(555-555-5555", false],
      ["(555)5(55?)-5555", false],
      ["55 55-55-555-5", false],
      ["11 555-555-5555", false]
  ]
  
  for (testcase of fccTestCases) {
      console.log('telephoneCheck(' + testcase[0] + ') expected: ' + testcase[1] + ' result: ' + telephoneCheck(testcase[0]))
  }
  
  /*
  Output:
  
  telephoneCheck(555-555-5555) expected: true result: true
  telephoneCheck(1 555-555-5555) expected: true result: true
  telephoneCheck(1 (555) 555-5555) expected: true result: true
  telephoneCheck(5555555555) expected: true result: true
  telephoneCheck(555-555-5555) expected: true result: true
  telephoneCheck((555)555-5555) expected: true result: true
  telephoneCheck(1(555)555-5555) expected: true result: true
  telephoneCheck(555-5555) expected: false result: false
  telephoneCheck(5555555) expected: false result: false
  telephoneCheck(1 555)555-5555) expected: false result: false
  telephoneCheck(1 555 555 5555) expected: true result: true
  telephoneCheck(1 456 789 4444) expected: true result: true
  telephoneCheck(123**&!!asdf#) expected: false result: false
  telephoneCheck(55555555) expected: false result: false
  telephoneCheck((6054756961)) expected: false result: false
  telephoneCheck(2 (757) 622-7382) expected: false result: false
  telephoneCheck(0 (757) 622-7382) expected: false result: false
  telephoneCheck(-1 (757) 622-7382) expected: false result: false
  telephoneCheck(2 757 622-7382) expected: false result: false
  telephoneCheck(10 (757) 622-7382) expected: false result: false
  telephoneCheck(27576227382) expected: false result: false
  telephoneCheck((275)76227382) expected: false result: false
  telephoneCheck(2(757)6227382) expected: false result: false
  telephoneCheck(2(757)622-7382) expected: false result: false
  telephoneCheck(555)-555-5555) expected: false result: false
  telephoneCheck((555-555-5555) expected: false result: false
  telephoneCheck((555)5(55?)-5555) expected: false result: false
  telephoneCheck(55 55-55-555-5) expected: false result: false
  telephoneCheck(11 555-555-5555) expected: false result: false
  */