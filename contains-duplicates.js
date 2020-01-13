/**
 * Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 132 ms
 * Memory Usage: 38.8 MB
 */
var containsDuplicate = function(nums) {
  let sortedArr = nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 56 ms
 * Memory Usage: 42.5 MB
 */
var containsDuplicate = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return new Set(nums).size < nums.length;
};
