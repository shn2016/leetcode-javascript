/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 *
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
 *
 * algorithms
 * Easy (41.67%)
 * Total Accepted:    44.2K
 * Total Submissions: 106K
 * Testcase Example:  '26'
 *
 * 
 * Given an integer, write an algorithm to convert it to hexadecimal. For
 * negative integer, two’s complement method is used.
 * 
 * 
 * Note:
 * 
 * All letters in hexadecimal (a-f) must be in lowercase.
 * The hexadecimal string must not contain extra leading 0s. If the number is
 * zero, it is represented by a single zero character '0'; otherwise, the first
 * character in the hexadecimal string will not be the zero character.
 * The given number is guaranteed to fit within the range of a 32-bit signed
 * integer.
 * You must not use any method provided by the library which converts/formats
 * the number to hex directly.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 26
 * 
 * Output:
 * "1a"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * -1
 * 
 * Output:
 * "ffffffff"
 * 
 * 
 */
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if(num < 0) num+= Math.pow(2,32);
  let result = "";
  while(num>=16){
    const left = num % 16;
    result = getHex(left) +""+ result; 
    num = Math.floor(num/16);
  }
  result = getHex(num) +""+ result;
  return result;
};

function getHex(val){
  switch(val){
    case 15: return "f";
    case 14: return "e";
    case 13: return "d";
    case 12: return "c";
    case 11: return "b";
    case 10: return "a";
    default : return val;
  }
}


// apparently this soltuion is not recommended as the question said not to use;
// this is solely to demonstrate my assumption about two's completement;
// when as number is negative;
// use this number to add 2^32 and then transfer; 
var builtInSolution = function(num) {
  if( num >=0) return num.toString(16);
  num += Math.pow(2,32);
  return num.toString(16)
};

