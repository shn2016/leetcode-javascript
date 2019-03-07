/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 *
 * https://leetcode.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Easy (51.23%)
 * Total Accepted:    125.9K
 * Total Submissions: 245.9K
 * Testcase Example:  '1\n2'
 *
 * Calculate the sum of two integers a and b, but you are not allowed to use
 * the operator + and -.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: a = 1, b = 2
 * Output: 3
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: a = -2, b = 3
 * Output: 1
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */


 //bit-wise operators & (and), | (or), ~ (not) 
 //and ^ (exclusive-or, xor) 
 //and shift operators a << b and a >> b.
// https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary%3A-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently

var getSum = function(a, b) {
  var sum = a^b;
  var carry = a&b;
  
  if (carry === 0) return sum;
  return getSum(sum, carry << 1);
};

var arrReduce = function(a, b) {
  const arr = [a,b];
  return arr.reduce((acc,curr)=> acc+curr);
};
