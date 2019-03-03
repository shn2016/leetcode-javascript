/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 *
 * https://leetcode.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (66.51%)
 * Total Accepted:    23.8K
 * Total Submissions: 35.7K
 * Testcase Example:  '2'
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
 * Fibonacci sequence, such that each number is the sum of the two preceding
 * ones, starting from 0 and 1. That is,
 * 
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 * 
 * 
 * Given N, calculate F(N).
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 0 ≤ N ≤ 30.
 * 
 */
/**
 * @param {number} N
 * @return {number}
 */

 // 56ms, but use more lines..
var fib = function(N) {
  if(N===1) return 1;
  let result = 0;
  let prev0= 0;
  let prev1= 1;
  for(i=2; i<=N; i++){
    result = prev0 + prev1;
    prev0 = prev1;
    prev1 = result;
  }

  return result;
};


//76ms ,remember not use N=0
var first = function(N) {
  if(N===0) return 0;
  if(N===1) return 1;
  return  fib(N-1) + fib(N-2);
};
