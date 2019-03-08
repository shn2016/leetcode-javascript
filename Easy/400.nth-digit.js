/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 *
 * https://leetcode.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (30.07%)
 * Total Accepted:    44.7K
 * Total Submissions: 148.6K
 * Testcase Example:  '3'
 *
 * Find the n^th digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8,
 * 9, 10, 11, ... 
 * 
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n <
 * 2^31).
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 3
 * 
 * Output:
 * 3
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 11
 * 
 * Output:
 * 0
 * 
 * Explanation:
 * The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a
 * 0, which is part of the number 10.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */

var findNthDigit = function(n) {
  let len = 1;
  let count = 9;
  let start = 1;

  while (n > len * count) {
    // as there are 1-9; 10-99;100-999 
    // which can be decreased from here;
    n -= len * count;
    len += 1;
    // count is different as it has 9 not 10;
    count *= 10;
    // increasing the starting number here;
    start *= 10;
  }
  // for example, start is 10, while n =6 now ,which is 15 before; 10,11,12,
  // here using n - 1 as there always 1 less to the 10, 100 and 1000...
  start += Math.floor((n - 1) / len);
  return start.toString().charAt((n - 1) % len);

};
// stupid way, time limit exceed;
var time = function(n) {
  let i = 0;
  while(n > 0){
    i++;
    n -= i.toString().length;
  }
  const iArr = i.toString().split('');
  const length = iArr.length;
  return iArr[length+n-1];
};

