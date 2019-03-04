/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (41.59%)
 * Total Accepted:    213.2K
 * Total Submissions: 512.3K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: true 
 * Explanation: 2^0 = 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 16
 * Output: true
 * Explanation: 24 = 16
 * 
 * Example 3:
 * 
 * 
 * Input: 218
 * Output: false
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */

// it should be something like if(n === 2^m) return true; m is an integer;
var isPowerOfTwo = function(n) {
  if(n===1) return true;
  if(n===0 || n%2 !==0 ) return false;
  while(n%2 ===0){
    n = n/2;
  } 
 if(n===1) return true;
 return false;
}
//this is using math method, to check whether the result of log2(n) is integer
var one = function(n) {
  if(n===0) return false;
  const result = Math.log2(n);
  if(Number.isInteger(result)) return true;
  return false;
};

