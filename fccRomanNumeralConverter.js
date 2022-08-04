function convertToRoman(num) {

    const romanDictionary = {
  
        0 : {
          
          0: '',
          1: 'I',
          2: 'II',
          3: 'III',
          4: 'IV',
          5: 'V',
          6: 'VI',
          7: 'VII',
          8: 'VIII',
          9: 'IX'
          
        },
        
        1 : {
          
          0: '',
          1: 'X',
          2: 'XX',
          3: 'XXX',
          4: 'XL',
          5: 'L',
          6: 'LX',
          7: 'LXX',
          8: 'LXXX',
          9: 'XC'
          
        },
        
        2 : {
          
          0: '',
          1: 'C',
          2: 'CC',
          3: 'CCC',
          4: 'CD',
          5: 'D',
          6: 'DC',
          7: 'DCC',
          8: 'DCCC',
          9: 'CM'
          
        },
        
        3 : {
          
          0: '',
          1: 'M',
          2: 'MM',
          3: 'MMM'
          
        }
      }

      const formattedNumber = String(num).split("").reverse();//4321 >>> ['1', '2', '3', '4']

      return formattedNumber.map(
        (digit, index) => romanDictionary[index][digit]
        ).reverse().join('')
 
}

//TESTS

const testCases = {
  
  'onedigit': [[2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'], [9, 'IX']],
  
  'twodigit': [[12, 'XII'], [16, 'XVI'], [29, 'XXIX'], [44, 'XLIV'], [45, 'XLV']
                , [68, 'LXVIII'], [83, 'LXXXIII'], [97, 'XCVII'], [99, 'XCIX']],
                
  'threedigit': [[400, 'CD'], [500, 'D'], [501, 'DI'], [649, 'DCXLIX'],
                [798, 'DCCXCVIII'], [891, 'DCCCXCI']],
  
  'fourdigit' : [[1000, 'M'], [1004, 'MIV'], [1006, 'MVI'],
                  [1023, 'MXXIII'], [2014, 'MMXIV'], [3999, 'MMMCMXCIX']]
}

for (let group in testCases) {
  console.log('tests for ', group, ' numbers');
  for (let testCase of testCases[group]) {
    console.log('CASE: ', testCase[0]);
    console.log('expected: ', testCase[1]);
    console.log('fact: ', convertToRoman(testCase[0]));
    console.log('----')
  }
  console.log('------------');
}

