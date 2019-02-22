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
    const copy = [...nums];
    let max = 0;
    max = nums.reduce(getSum);
    max = getMax(max, nums,false);
    max = getMax(max, copy,true);
    return max;
};
function getSum(total, num) {
  return total + num;
}

function getMax(max, arr,isPop) {
  if(isPop){arr.pop();} else { arr.shift()};
  while(arr.length > 0){
    const nextSum = arr.reduce(getSum);
    if(nextSum > max){ 
      max = nextSum;
    }
    if(isPop){arr.pop();} else { arr.shift()};
  }
  return max;
}