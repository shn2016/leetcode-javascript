/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 *
 * https://leetcode.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (45.53%)
 * Total Accepted:    64K
 * Total Submissions: 140K
 * Testcase Example:  '[1,2,3]'
 *
 * Given an integer array, find three numbers whose product is maximum and
 * output the maximum product.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * Output: 6
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4]
 * Output: 24
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The length of the given array will be in range [3,10^4] and all elements are
 * in the range [-1000, 1000].
 * Multiplication of any three numbers in the input won't exceed the range of
 * 32-bit signed integer.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const second = nums[0] * nums[1] * nums[nums.length-1];
  const third = nums[nums.length-2] * nums[nums.length-3] * nums[nums.length-1];
  
  return Math.max(second, third);
}



//Time Limit Exceeded
var timeLimit = function(nums) {
  let max = -Infinity;
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      for(let k = j + 1; k < nums.length; k++){
        const product = nums[i] * nums[j] * nums[k];
        max = (max > product) ? max : product;
      }
    }
  }
  return max;
};

