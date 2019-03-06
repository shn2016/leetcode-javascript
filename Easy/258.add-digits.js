/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (53.49%)
 * Total Accepted:    227.9K
 * Total Submissions: 425.8K
 * Testcase Example:  '38'
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 * 
 * Example:
 * 
 * 
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 * Since 2 has only one digit, return it.
 * 
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 */
/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
  // if(num ===0 )return 0;
  // if(num%9 ===0 )return 9;
  // return num%9;
  return (num - 1) % 9 + 1;
};

var doLoop = function(num) {
  do{
    // this is using modulo 9 arithmetic;
    num = (num - 1) % 9 + 1;
  }
  while(num>9)
  return num;
};

var recursion = function(num) {
  if(num<10) return num;
  num = (num - 1) % 9 + 1;
  return addDigits(num);
};

//normal one, put in loop is sum is not one digit.
var whileLoop = function(num) {
  let nums = num.toString().split("").map(x=> Number(x));
  let sum = nums.reduce((a,b) =>a+b);
  while(sum >= 10){
    nums = sum.toString().split("").map(x=> Number(x));
    sum = nums.reduce((a,b) =>a+b);
  }
  return sum;
};
