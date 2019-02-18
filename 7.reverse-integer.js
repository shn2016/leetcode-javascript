/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.08%)
 * Total Accepted:    598.7K
 * Total Submissions: 2.4M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x < 0){
    const xString = x.toString();
    let result = "-";
    for(let i=xString.length-1; i>0 ; i--){
      result = result + xString[i];
    }
    result = parseInt(result, 10);
    if(!isInTheRange(result)) return 0;
    return result;
  }
  else{
    const xString = x.toString();
    let result = "";
    for(let i=xString.length-1; i>-1 ; i--){
      result = result + xString[i];
    }
    result = parseInt(result, 10);
    if(!isInTheRange(result)) return 0;
    return result;
  }
};

function isInTheRange(x){
  const max = Math.pow(2,31)-1;
  const min = Math.pow(-2,31);
  if(x>max | x< min){
    return false;
  }
    return true;
}
