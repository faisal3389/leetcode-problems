/**
 * Remove duplicates in an array. Use only inplace algo
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) return 0;
  var lengthOfArray = nums.length;
  for (let i = 1; i < lengthOfArray; i++) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(i, 1);
      lengthOfArray--;
      i--;
    }
  }
  return lengthOfArray;
};
