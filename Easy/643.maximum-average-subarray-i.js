/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 *
 * https://leetcode.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (38.98%)
 * Total Accepted:    47.9K
 * Total Submissions: 122.4K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * Given an array consisting of n integers, find the contiguous subarray of
 * given length k that has the maximum average value. And you need to output
 * the maximum average value.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,12,-5,-6,50,3], k = 4
 * Output: 12.75
 * Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= k <= n <= 30,000.
 * Elements of the given array will be in the range [-10,000, 10,000].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // avoid using slice, reduce will save more time;
var findMaxAverage = function(nums, k) {
  var dp = [];
  dp[0] = 0;
  for(var i = 0; i < k; i++) {
      dp[0] = dp[0] + nums[i];
  }
  var max = dp[0];
  for(var i = 1; i <= nums.length - k; i++) {
      dp[i] = dp[i-1] - nums[i-1] + nums[i+k-1];
      max = Math.max(dp[i], max);
  }    
  return max / k;
};

 // 1044ms, 33.14%;
var a = function(nums, k) {
  let sum = -Infinity;
  for( let i = 0; i + k <= nums.length; i++) {
    if(i !==0 && nums[i-1] > nums[i+k-1]) continue;
    const tempSum = nums.slice(i, i+k).reduce((a,b) => a + b);
    sum = (sum > tempSum)? sum : tempSum;
  }
  return sum / k;
};

