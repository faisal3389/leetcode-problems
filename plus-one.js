/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123. 
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  let currSum = 0;
  let ans = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9 && (carry == 1 || i == digits.length - 1)) {
      carry = 1;
      ans.push(0);
    } else if (i == digits.length - 1) {
      ans.push(digits[i] + 1 + carry);
      carry = 0;
    } else {
      ans.push(digits[i] + carry);
      carry = 0;
    }
  }
  if (carry == 1) {
    ans.push(1);
  }
  return ans.reverse();
};
console.log(plusOne([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));

/**
 * cool solution
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = true;
  let i = digits.length - 1;
  while (carry && i >= 0) {
    carry = digits[i] === 9;
    digits[i] = (digits[i] + 1) % 10;
    i--;
  }
  return carry ? [1].concat(digits) : digits;
};
