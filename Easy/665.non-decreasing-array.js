/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 *
 * https://leetcode.com/problems/non-decreasing-array/description/
 *
 * algorithms
 * Easy (19.53%)
 * Total Accepted:    46.8K
 * Total Submissions: 240.7K
 * Testcase Example:  '[4,2,3]'
 *
 * 
 * Given an array with n integers, your task is to check if it could become
 * non-decreasing by modifying at most 1 element.
 * 
 * 
 * 
 * We define an array is non-decreasing if array[i]  holds for every i (1 
 * 
 * Example 1:
 * 
 * Input: [4,2,3]
 * Output: True
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing
 * array.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [4,2,1]
 * Output: False
 * Explanation: You can't get a non-decreasing array by modify at most one
 * element.
 * 
 * 
 * 
 * Note:
 * The n belongs to [1, 10,000].
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0;
  for( let i = 1; i < nums.length; i++) {
    if(nums[i] < nums[i-1]) {
      count++;
      if(count !== 1) return false; 
      if(i !== 1) {
        if(nums[i] > nums[i-2]) continue;
        nums[i] = nums[i-1];
      }
    }
  }
  return true;
};
// the main problem here is to adjust larger one or smaller one; 

// 4 2 3  => 2 2 3
// 3 4 2 3 =>  3 3 4 3 smaller one
// -1 4 2 3 => -1 -1 2 3  larger one;

