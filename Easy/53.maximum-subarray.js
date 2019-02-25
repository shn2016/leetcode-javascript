/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.63%)
 * Total Accepted:    457K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {

  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (var i = 0; i < nums.length; i++) {
    // prev is starting for max of sum of two, and then 3 and more;
    // and comparing with single new number comes up with;
    prev = Math.max(prev + nums[i], nums[i]);
    // the only possibility nums[i] is that the prev negative, so it should be aborted
    max = Math.max(max, prev);
  }
  return max;
};

  //Below solution is way too time consuming...
  // if(!nums) return 0;
  // //let max = Math.max.apply(null,nums);
  // let max = nums[0];

  // let subNums = [];
  // for(i=0; i<nums.length; i++){
  //   // can't set y=1 and condition is y>i and y<= length as it will break at first;
  //   for (y =i+1; y<= nums.length; y++){
  //     subNums = nums.slice(i,y);
  //     const currentSum = subNums.reduce((a,b) => a + b, 0);
  //     if(currentSum > max) {
  //       max = currentSum;
  //     }
  //   }
  // }
  // return max;
