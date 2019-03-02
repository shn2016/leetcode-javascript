/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 *
 * https://leetcode.com/problems/base-7/description/
 *
 * algorithms
 * Easy (44.53%)
 * Total Accepted:    38K
 * Total Submissions: 85.3K
 * Testcase Example:  '100'
 *
 * Given an integer, return its base 7 string representation.
 * 
 * Example 1:
 * 
 * Input: 100
 * Output: "202"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: -7
 * Output: "-10"
 * 
 * 
 * 
 * Note:
 * The input will be in range of [-1e7, 1e7].
 * 
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let result = "";
    let left = 0;
    let saved = [];
    if(num < 0){
      result += "-";
      num *= -1;
    } 
    while(num >=7){
      left = num % 7;
      saved.unshift(left);
      num = Math.trunc(num/7);
    }
    saved.unshift(num);
    result =result + saved.join("");
    return result;
};

