/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (43.01%)
 * Total Accepted:    85.2K
 * Total Submissions: 197.9K
 * Testcase Example:  '"0"\n"0"'
 *
 * Given two non-negative integers num1 and num2 represented as string, return
 * the sum of num1 and num2.
 * 
 * Note:
 * 
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 // as there are issues with large integer counting, 
 // so here I use array to get the sum of each place one by one.
var addStrings = function(num1, num2) {
  // differenciate the long one and shorter one, then transfer to int;
  const long = (num1.length > num2.length)? num1 : num2;
  const short = (num1.length > num2.length)? num2 : num1;
  const longArr = long.split('').reverse().map(x => Number(x));
  const shortArr = short.split('').reverse().map(x => Number(x));

  let result = [];
  let carry = 0;
  
  // get the shorted length length part;
  for(i=0; i<shortArr.length; i++){
    result.unshift((shortArr[i]+longArr[i]+carry) % 10);
    carry = (shortArr[i]+longArr[i]+carry >= 10)? 1: 0;
  }
  // longer
  for(j=shortArr.length; j<longArr.length;j++){
    result.unshift((longArr[j]+carry) % 10);
    carry = (longArr[j]+carry >= 10)? 1: 0;
  }
  
  // if there is a carry
  if(carry !==0){
    result.unshift(carry);
  }

  return result.join('');
};

 // I suggest this idea could work better in any other languages except JS..
 // there is still the problems about the precision when encounter large number.
var problem = function(num1, num2) {
  const one = convert(num1);
  const two = convert(num2);
  return one+ two+"";
};

function convert(num){
  const array = num.split("");
  let count = 0;
  for(i=0; i<array.length; i++){
    count += array[i]* Math.pow(10, array.length-1-i);
  }
  return count;
}

