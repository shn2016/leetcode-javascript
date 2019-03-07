/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 *
 * https://leetcode.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (39.96%)
 * Total Accepted:    106.6K
 * Total Submissions: 266.5K
 * Testcase Example:  '16'
 *
 * Given an integer (signed 32 bits), write a function to check whether it is a
 * power of 4.
 * 
 * Example 1:
 * 
 * 
 * Input: 16
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 5
 * Output: false
 * 
 * 
 * Follow up: Could you solve it without loops/recursion?
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  // 0 is special number here;
  // as the result may not precise, so it has to be rounded and then
  const result = Math.log(num)/Math.log(4);
  //use pow to check it equal to n or not;
  return (Number.isInteger(result));
};

var recursion = function(num) {
  if(num===1){return true}
  if(num<1){return false}
  return isPowerOfFour(num/4)
};