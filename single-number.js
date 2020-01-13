/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 60 ms
 * Memory Usage: 37.5 MB
 */
var singleNumber = function(nums) {
  var singleSet = new Set();
  nums.forEach(el => {
    if (singleSet.has(el)) {
      singleSet.delete(el);
    } else {
      singleSet.add(el);
    }
  });
  return singleSet.entries.next().value;
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 48 ms
 */
var singleNumber = function(nums) {
  // any number XOR same number is zero
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};
