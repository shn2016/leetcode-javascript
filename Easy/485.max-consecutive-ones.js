/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 *
 * https://leetcode.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (54.45%)
 * Total Accepted:    127.1K
 * Total Submissions: 232.8K
 * Testcase Example:  '[1,0,1,1,0,1]'
 *
 * Given a binary array, find the maximum number of consecutive 1s in this
 * array.
 * 
 * Example 1:
 * 
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive
 * 1s.
 * ⁠   The maximum number of consecutive 1s is 3.
 * 
 * 
 * 
 * Note:
 * 
 * The input array will only contain 0 and 1.
 * The length of input array is a positive integer and will not exceed 10,000
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// simply count and compare;
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;
  for (i=0; i<nums.length; i++) {
    if (nums[i] === 0) {
      max = (max > count)? max : count;
      // add this make it from 88ms 29.51% to 68 beat 96%;
      if(nums.length - 1 - i <= max) return max;
      count = 0;
      continue;
    }
    count++;
  }
  return (max > count)? max : count;
};

