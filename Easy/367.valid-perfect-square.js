/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (39.37%)
 * Total Accepted:    101K
 * Total Submissions: 256.3K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: 16
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 14
 * Output: false
 * 
 * 
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquareOne = function(num) {
  // as we know, 10 * 10 = 100; 100 * 100 = 10000;
  // so we can use the length of number to get to know sth
  const power = (num.toString().length - 1)/ 2;
  // 3-1/2 to 10, 5-1/2 to 100, hence 7-1/2 to 1000;
  // 1, 2, 3

  let start = 1;
  for(i=1;i<=power;i++){
    start *= 10;
  }

  for(j=start; j<start*10; j++){
    if(j*j === num){
      return true;
    }
    if(j*j > num){
      return false;
    }
  }
  // here I assume the number is not really big enough;
  // otherwise when I met some number like 100000000;
  // it have to start from 10000 to 100000
  return false;
};

var isPerfectSquare = function(num) {
  // there is a rule/    (n/2)>= n^2 when n>=2
  if(num === 1) return true;
  let start = 1;
  let end = num/2;

  if(num === 4) return true;
  // use mid point to see if go left or right;
  while(end > start){
    let mid = Math.floor((end + start) / 2);

    if(mid * mid === num){
      return true;
    }
    if(mid * mid > num){
      end = mid;
    }
    if(mid * mid < num){
      start = mid+1;
    }
  }
  return false;
};


