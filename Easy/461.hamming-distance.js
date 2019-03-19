/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 *
 * https://leetcode.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (70.01%)
 * Total Accepted:    223.2K
 * Total Submissions: 318.4K
 * Testcase Example:  '1\n4'
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 * 
 * Given two integers x and y, calculate the Hamming distance.
 * 
 * Note:
 * 0 ≤ x, y < 2^31.
 * 
 * 
 * Example:
 * 
 * Input: x = 1, y = 4
 * 
 * Output: 2
 * 
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * 
 * The above arrows point to positions where the corresponding bits are
 * different.
 * 
 * 
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
  x = x.toString(2).split("").reverse();
  y = y.toString(2).split("").reverse();
  const maxLen = Math.max(x.length, y.length);
  let dif = 0;
  for(i=0; i<maxLen; i++){
    if(!y[i]) y[i]="0";
    if(!x[i]) x[i]="0";

    if(y[i] !== x[i]){
      dif++;
    }
  }
  return dif;
};

var hammingDistance = function(x, y) {
  let count = 0
  while (x > 0 || y > 0) {
      if (x % 2 != y % 2)
          count++
      x = Math.floor(x / 2)
      y = Math.floor(y / 2)
  }
  return count
};
