/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 *
 * https://leetcode.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (32.81%)
 * Total Accepted:    40.6K
 * Total Submissions: 123.7K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer c, your task is to decide whether there're two
 * integers a and b such that a^2 + b^2 = c.
 * 
 * Example 1:
 * 
 * 
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: False
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} c
 * @return {boolean}
 */

 // 64ms; 89% this time
var judgeSquareSum = function(c) {
  let bigger = Math.floor(Math.sqrt(c));
  if(Math.sqrt(c) === bigger) return true;
  for(let i = 1; i <= bigger; i++) {
    let sum = i * i + bigger * bigger;
    while(sum > c) {
      bigger--;
      sum = i * i + bigger * bigger;
    }
    if(sum === c) return true;

  }
  return false;
};

 // save memory 100% beats, but super slow;
var fff = function(c) {
  const bigger = Math.floor(Math.sqrt(c));
  for(let i = 0; i <= bigger; i++) {
    for(let j = bigger; j >= i; j--) {
      const sum = i * i + j * j;
      if(sum < c) break;
      if(sum === c) return true;
    }
  }
  return false;
};

