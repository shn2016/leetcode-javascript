/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (47.47%)
 * Total Accepted:    248.9K
 * Total Submissions: 523.3K
 * Testcase Example:  '[3,0,1]'
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,0,1]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * 
 * 
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

 // 100ms quite normal, sort the nums to find out which one is missing
 // if no one, return the the largest + 1;
var missingNumber = function(nums) {
  nums.sort((a,b) => a - b);

  for(i=0; i<nums.length; i++){
    if(i !== nums[i]){
      return i;
    }
  }

  return nums.pop()+1;
};

//356ms;
var short = function(nums) {
  for(i=0;;i++){
    if(!nums.includes(i)){
      return i;
    }
  }
};
//using sum..
// assume there is five numbers; it is expected that it has 0,1,2,3,4,5;
// one of them is missing, therefore, get the 0~5 sum first;
// then minus the actuall nums's sum;
var missingNumber = function(nums) {
  const expected = (nums.length) * (nums.length+1) /2;
  const actual = nums.reduce((acc,cur) => acc+cur)
  return expected - actual;
};
