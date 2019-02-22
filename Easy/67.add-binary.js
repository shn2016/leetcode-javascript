/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (37.74%)
 * Total Accepted:    273.5K
 * Total Submissions: 723.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const long = (a.length >= b.length) ? a.split("") : b.split("");
  const short = (a.length >= b.length) ? b.split("") : a.split("");

  let result = [];
  const rightPart = [];
  let number = 0;
  const len = short.length
  // when using pop or shift, length of array is changing.

  //start adding short with right part of long.
  for(i = 0; i < len; i++){
    const sum = number + parseInt(long.pop()) + parseInt(short.pop());
    if(sum >= 2){
      number = 1;
      rightPart.unshift((sum-2).toString());
    }
    else {
      number = 0;
      rightPart.unshift(sum.toString());
    }
  }

  //there is situation that the above step has extra 1 left, adding to long
  while(number === 1 && long.length !==0){
    const sum = number + parseInt(long.pop());
    if(sum === 2){
      number = 1;
      rightPart.unshift("0");
    }
    else {
      number = 0;
      rightPart.unshift(sum.toString());
      break;
    }
  }

  //when long is gone and there is 1 left, add it to right;
  if( number === 1 && long.length === 0){
    rightPart.unshift(number.toString());
  }

  result = result.concat(long).concat(rightPart);
  return result.join("");
};
