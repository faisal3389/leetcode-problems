/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  let mod = (k + 1) % nums.length;
  let firstArr = nums.slice(0, mod);
  let secondArr = nums.slice(mod, nums.length);
  return secondArr.concat(firstArr);
};
let a = [1, 2, 3, 4, 5, 6, 7];
console.log("input = " + a);

console.log(rotate(a, 3));
console.log("output = " + a);
