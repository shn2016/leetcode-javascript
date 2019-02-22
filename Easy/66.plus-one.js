/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.58%)
 * Total Accepted:    349.6K
 * Total Submissions: 861K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let number = digits.pop() + 1;
  let dummy = [];
  while(number >= 10 ){
    const numArray = number.toString().split("");
    let lastNumber = numArray[1];
    dummy.unshift(parseInt(lastNumber));
    number = (digits.length !==0) ? (digits.pop() + 1) : 1;
  }
  digits.push(number);
  const result = digits.concat(dummy);
  return result;
};
