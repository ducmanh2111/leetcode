/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var length = digits.length
  var number = 0n;

  for (let i = 0; i < length; i++) {
    number += BigInt(digits[i]) * (10n ** BigInt(length - i - 1))
  }

  var newNumber = number + 1n
  var divisor = 1n
  var temp = newNumber
  while (temp >= 10) {
    temp = temp = temp / 10n;
    divisor *= 10n
  }

  var result = []
  var temp = newNumber
  while(divisor > 0) {
    var digit = temp / divisor
    temp = temp % divisor
    result.push(Number(digit))
    divisor = divisor / 10n
  }
  
  return result
};

// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,1]))
// console.log(plusOne([9, 9, 9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3].join(''))
