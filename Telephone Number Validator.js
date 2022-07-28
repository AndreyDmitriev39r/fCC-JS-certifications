function telephoneCheck(str) {
    /*regexp pseudocode
  1. '1' >>> 0 or 1 occurance
  2. space >>> 0 or 1 occurance
  3. '(' >>> 0 or 1 occurance
  4. digits >>> 3 occurances
  5. ')' >>> 0 or 1 occurance
  6. space or hyphen >>> 0 or 1 occurance
  7. digits >>> 3 occurances
  8. space or hyphen >>> 0 or 1 occurance
  9. digits >>> 4 occurances
  */
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