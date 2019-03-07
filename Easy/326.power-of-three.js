/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 *
 * https://leetcode.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (41.37%)
 * Total Accepted:    171.1K
 * Total Submissions: 413.4K
 * Testcase Example:  '27'
 *
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example 1:
 * 
 * 
 * Input: 27
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: 9
 * Output: true
 * 
 * Example 4:
 * 
 * 
 * Input: 45
 * Output: false
 * 
 * Follow up:
 * Could you do it without using any loop / recursion?
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  // 0 is special number here;
  if(n===0) return false;
  // as the result may not precise, so it has to be rounded and then
  const result = Math.round(Math.log2(n)/Math.log2(3));

  //use pow to check it equal to n or not;
  if(Math.pow(3, result) === n) return true;
  return false;
};

//this is use base 3 calculation.
// if a number is power of 3, then it will be 100000*;
var isPowerOfThree = function(n) {
  return n.toString(3).split("").reduce((prev,curr)=>parseInt(prev)+parseInt(curr))==1;
};

