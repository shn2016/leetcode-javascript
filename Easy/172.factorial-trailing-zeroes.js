/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.26%)
 * Total Accepted:    147.2K
 * Total Submissions: 395K
 * Testcase Example:  '3'
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 * 
 * Example 1:
 * 
 * 
 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * 
 * Example 2:
 * 
 * 
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 * 
 * Note: Your solution should be in logarithmic time complexity.
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */

 //this one is   ✔ 502/502 cases passed (68 ms);
var trailingZeroes = function(n){
  let five = 0;
  while(n>=5){
    n = Math.trunc(n/5);
    five += n;
  }

  return five;
}

//  ✔ 502/502 cases passed (10244 ms)
//    Can't even believe
// The idea is the number of trailing zero is depended on how many five there;
// after change i++ to i += 5 it is 3180 now;

// var trailingZeroes = function(n) {
//   let evenFive = 0;
//   for(i=0; i<=n; i += 5){
//     if(i===0) continue;
//     let copy = i;
//     while(copy % 5 === 0){
//       copy = copy / 5;
//       evenFive++;
//     }
//   }

//   return evenFive
// };
