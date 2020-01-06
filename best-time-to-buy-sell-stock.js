/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
    Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
    Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
    Example 1:
    Input: [7,1,5,3,6,4]
    Output: 7
    Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  console.log("-----------------------");
  let ans = 0;
  //base cases
  if (!prices || prices.length == 0 || prices.length == 1) return 0;
  if (prices.length == 2) return max(prices[1] - prices[0], 0);
  let pivot = Math.floor(prices.length / 2);
  console.log(prices);
  console.log(pivot);
  console.log(prices.slice(0, pivot));
  console.log(prices.slice(pivot, prices.length));
  // calculations for left array
  let leftArray = prices.slice(0, pivot);
  let leftMaxProfit = max(maxProfit(leftArray), 0);
  console.log(leftMaxProfit);
  // calculations for right array
  let rightArray = prices.slice(pivot, prices.length);
  let rightMaxProfit = max(maxProfit(rightArray), 0);
  console.log(rightMaxProfit);
  //calculations for middle using min in left and max in right
  let minInLeft = minValueInArray(prices.slice(0, pivot));
  console.log("minInLeft = ", minInLeft);
  let maxInRight = maxValueInArray(prices.slice(pivot, prices.length));
  console.log("maxInRight = ", maxInRight);
  let middleMaxProfit = maxInRight - minInLeft;
  // calculating for max of left, right and middle profits
  let maxOfAll = max(
    leftMaxProfit,
    rightMaxProfit,
    middleMaxProfit,
    leftMaxProfit + rightMaxProfit
  );
  let middleLeftIndex = findMinIndex(prices.slice(0, pivot));
  let middleRightIndex = findMaxIndex(prices.slice(pivot, prices.length));
  console.log("returing  = " + maxOfAll);
  return maxOfAll;
};
var minValueInArray = function(arr) {
  console.log("minVal of " + arr);
  if (!arr) return 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("min is = " + min);
  return min;
};
var maxValueInArray = function(arr) {
  if (!arr) return 0;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
var max = function(...args) {
  var maxArg = args[0];
  args.forEach(el => {
    if (el > maxArg) {
      maxArg = el;
    }
  });
  return maxArg;
};
var findMinIndex = function(arr) {
  if (!arr) return -1;
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
};
var findMaxIndex = function(arr) {
  if (!arr) return -1;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 1, 2, 0, 1]));