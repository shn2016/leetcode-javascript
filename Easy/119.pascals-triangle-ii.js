/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (41.99%)
 * Total Accepted:    184.6K
 * Total Submissions: 439.8K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

  const number = [];
  number[0]=[1];
  for(i=1; i <= rowIndex; i++){
    number[i]=[];
    for(y=0; y< number[i-1].length+1; y++){
      const topLeft = (!!number[i-1][y-1])? number[i-1][y-1]: 0;
      const topRight = (!!number[i-1][y])? number[i-1][y]: 0;

      number[i].push(topLeft + topRight);
    }
  } 
  return number[rowIndex];
};

