/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (58.96%)
 * Total Accepted:    417.1K
 * Total Submissions: 707.3K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 * 
 * Example 1:
 * 
 * 
 * Input: [2,2,1]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort(function(a,b) {
    return a - b;
  });
  const arr = []
  search(nums, 1, nums[0],arr);

  return arr[0];
};

function search(nums, index, lastNum, arr){
  if(index%2 === 0){
    lastNum = nums[index];
  } else{
    if(lastNum !== nums[index]){
      arr.push(lastNum);
      return;
    }
  }  

  if(index < nums.length -1){
    index++;
    search(nums, index, lastNum, arr);
  } else{
    arr.push(lastNum);
    return;
  }
}
//linear runtime complexity