/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 *
 * https://leetcode.com/problems/ugly-number/description/
 *
 * algorithms
 * Easy (40.34%)
 * Total Accepted:    148.5K
 * Total Submissions: 367.9K
 * Testcase Example:  '6'
 *
 * Write a program to check whether a given number is an ugly number.
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 * 
 * Example 1:
 * 
 * 
 * Input: 6
 * Output: true
 * Explanation: 6 = 2 × 3
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: true
 * Explanation: 8 = 2 × 2 × 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 14
 * Output: false 
 * Explanation: 14 is not ugly since it includes another prime factor 7.
 * 
 * 
 * Note:
 * 
 * 
 * 1 is typically treated as an ugly number.
 * Input is within the 32-bit signed integer range: [−2^31,  2^31 − 1].
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
//1 2 3 5
var isUgly = function(num) {
  if(num < 1) return false;
  if(num < 7) return true;
  if(!(num % 2 === 0 || num % 3 ===0 || num% 5 === 0)) return false;

  if(num % 2 === 0){
    num = divide(num, 2);
  }
  if(num % 3 === 0){
    num = divide(num, 3);
  } 
  if(num % 5 === 0){
    num = divide(num, 5);
  }
  
  if(num === 1) return true;
  return false;
};

function divide(n,i){
  while(n % i === 0){
    n /= i;
  }
  return n;
}

