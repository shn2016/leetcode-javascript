/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (58.84%)
 * Total Accepted:    184.5K
 * Total Submissions: 313.2K
 * Testcase Example:  '1'
 *
 * Write a program that outputs the string representation of numbers from 1 to
 * n.
 * 
 * But for multiples of three it should output “Fizz” instead of the number and
 * for the multiples of five output “Buzz”. For numbers which are multiples of
 * both three and five output “FizzBuzz”.
 * 
 * Example:
 * 
 * n = 15,
 * 
 * Return:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */

 // reallly interesting question;
 // pretty easy, just go for every number and return;
 // but we can start from two side;
var fizzBuzz = function(n) {
  //in case the number is large, do it from head and tail;
  let head = 1;
  let tail = n;
  let firstHalf = [];
  let secondHalf = [];
  
  // create a function for multiple uses;
  while(head < tail){
    firstHalf.push(getString(head));
    secondHalf.unshift(getString(tail));
    head++;
    tail--;
  }
  // then n is odd, there is middle one to be added;
  if(head === tail){
    firstHalf.push(getString(head));
  }
  return firstHalf.concat(secondHalf);
};


function getString(num){
  if(num % 3 === 0 && num % 5 === 0){
    return "FizzBuzz";
  }
  if(num % 3 === 0 ){
    return "Fizz";
  }
  if(num % 5 === 0){
    return "Buzz";
  }
  return num.toString();
}
