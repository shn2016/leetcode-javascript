/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.23%)
 * Total Accepted:    352.1K
 * Total Submissions: 813.2K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n === 1) return 1;
  let result = 0;
  
  if ( n % 2 === 1) {
    // if n is odd, possibility is:
    // for n*1 :1;
    // for m * 2 + y*1 , y is odd, the possibility gonna be like cn1, c(n-2)3 etc..
    const time =(n-1)/2;
    for(i=0; i<time; i++){
      result += combinationCalculation(time+i+1, 2*i+1);
    }
  } else {
    // if n is even, possibility is:
    // for n*1 :1;
    // for m * 2 + y*2 , y is even， the possibility gonna be like cn2, c(n-2)2 etc...
    // and m *2, m=n/2 : 1
    const time =n/2;
    for(i=0; i<time; i++){
      result += combinationCalculation(time+i, 2*i);
    }
  }
  result += 1;

  return result;
};

//C n(lower) m(higher) choose the place to put m elements in n;
// = n!/ m! / (n-m)!
function combinationCalculation(n,m){
  const numberA = consistantMultiply(n);
  const numberB = consistantMultiply(m);
  const numberC = consistantMultiply(n-m);
 

  const answer = numberA / numberB / numberC;
  return answer;
}

function consistantMultiply(number){
  let a = 1;
  while(number !==0){
    a *= number;
    number--;
  }
  return a;
}
