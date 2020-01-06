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
  return findMaxProfit(prices)[0];
};

var findMaxProfit = function(prices) {
  console.log("-----------------------");
  let ans = 0;
  //base cases
  if (!prices || prices.length == 0 || prices.length == 1) return 0;
  if (prices.length == 2) return max(prices[1] - prices[0], 0)[0];

  let pivot = Math.floor(prices.length / 2);
  console.log(prices);
  console.log(pivot);
  console.log(prices.slice(0, pivot));
  console.log(prices.slice(pivot, prices.length));

  // calculations for left array
  let leftArray = prices.slice(0, pivot);
  let leftMaxProfitAndBoundaries = findMaxProfit(leftArray);
  let leftMaxProfit = leftMaxProfitAndBoundaries[0];
  console.log(leftMaxProfit);

  // calculations for right array
  let rightArray = prices.slice(pivot, prices.length);
  let rightMaxProfitAndBoundaries = findMaxProfit(rightArray);
  let rightMaxProfit = rightMaxProfitAndBoundaries[0];
  console.log(rightMaxProfit);

  //calculations for middle using min in left and max in right
  let minInLeft = minValueInArray(leftArray);
  console.log("minInLeft = ", minInLeft);
  let maxInRight = maxValueInArray(rightArray);
  console.log("maxInRight = ", maxInRight);
  let middleMaxProfit = maxInRight - minInLeft;

  // calculating for max of left, right and middle profits
  let args = [
    leftMaxProfit,
    rightMaxProfit,
    middleMaxProfit,
    leftMaxProfit + rightMaxProfit
  ];
  let maxOfAllAndIndex = max(args);
  let maxOfAll = maxOfAllAndIndex[0];
  let boundaries = maxOfAllAndIndex[1];

  // calculating and comparing the left, right and middle boundaries
  let middleLeftIndex = findMinIndex(leftArray);
  let middleRightIndex = pivot + findMaxIndex(rightArray);

  var returningLowerBound = -1;
  var returningUpperBound = -1;
  if (boundaries == 0) {
    returningLowerBound = leftMaxProfitAndBoundaries[1];
    returningUpperBound = leftMaxProfitAndBoundaries[2];
  } else if (boundaries == 1) {
    returningLowerBound = rightMaxProfitAndBoundaries[1];
    returningUpperBound = rightMaxProfitAndBoundaries[2];
  } else if (boundaries == 2) {
    returningLowerBound = middleLeftIndex;
    returningUpperBound = middleRightIndex;
  } else if (boundaries == 3) {
    returningLowerBound = leftMaxProfitAndBoundaries[1];
    returningUpperBound = rightMaxProfitAndBoundaries[2];
  }

  let leftUpperBoundary = leftMaxProfitAndBoundaries[2];
  let rightLowerBoundary = pivot + rightMaxProfitAndBoundaries[1];

  let leftIntersection = middleLeftIndex > leftUpperBoundary ? false : true;
  let rightIntersection = middleRightIndex < rightLowerBoundary ? false : true;

  if (!leftIntersection && !rightIntersection) {
    maxOfAll = max(
      maxOfAll,
      leftMaxProfit + middleMaxProfit + rightMaxProfit
    )[0];
    returningLowerBound = leftMaxProfitAndBoundaries[1];
    returningUpperBound = rightMaxProfitAndBoundaries[2];
  } else if (!leftIntersection) {
    maxOfAll = max(maxOfAll, leftMaxProfit + middleMaxProfit)[0];
    returningLowerBound = leftMaxProfitAndBoundaries[1];
  } else if (!rightIntersection) {
    maxOfAll = max(maxOfAll, middleMaxProfit + rightIntersection)[0];
    returningUpperBound = rightMaxProfitAndBoundaries[2];
  }

  //   console.log("middleLeftIndex = " + middleLeftIndex);
  //   console.log("middleRightIndex = " + middleRightIndex);

  // return the max profit for this iterationo
  console.log("returing  = " + maxOfAll);
  return [maxOfAll, returningLowerBound, returningUpperBound];
};

var minValueInArray = function(arr) {
  console.log("finding minVal of arr:" + arr);
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
  console.log("finding maxvalue of arr:" + arr);
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
  var maxIndex = 0;
  args.forEach((el, index) => {
    if (el > maxArg) {
      maxArg = el;
      maxIndex = index;
    }
  });
  return [maxArg, maxIndex];
};

var findMinIndex = function(arr) {
  if (!arr) return -1;
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
};

var findMaxIndex = function(arr) {
  if (!arr) return -1;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 1, 2, 0, 1]));
