/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (41.67%)
 * Total Accepted:    501.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 * 
 * Input: 121
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0) return false;
  if(x>=0 && x<10) return true;
  const xString = x.toString();  
  const length = xString.length;

  let result = true;
  for(i=0; conditioner(length, i); i++){
    if(xString[i] !== xString[length-i-1]){ 
      result = false;
      break; 
    }
  }
  return result;
};

function conditioner(length, i){
  if(length%2 === 1){
    if(i<(length/2).toFixed()-1){
      return true;
    }
    return false;
  }
  if(i<(length/2)) {
    return true;
  }
  return false;
}
