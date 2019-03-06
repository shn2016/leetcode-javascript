/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (50.75%)
 * Total Accepted:    304K
 * Total Submissions: 597.8K
 * Testcase Example:  '[1,2,3,1]'
 *
 * Given an array of integers, find if the array contains any duplicates.
 * 
 * Your function should return true if any value appears at least twice in the
 * array, and it should return false if every element is distinct.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */

//sort the nums to make it easy to compare;
var fisrt = function(nums) {
  nums = nums.sort((a,b) => a-b);
  let prev = nums[0];
  let result = false;
  for(i=1; i<nums.length; i++){
    if(prev === nums[i]){
      result = true;
      break;
    }
    prev = nums[i];
  }
  return result;
};

//96ms 
var containsDuplicate = function(nums){
  const time = nums.reduce((acc, curr) => {
    if(!acc[curr]) {
      acc[curr]=1;
    }
    else {
      acc[curr]++;
    }
    return acc;
  },{});
  return Object.values(time).some(x => x !== 1);
}
