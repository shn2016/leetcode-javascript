/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (44.29%)
 * Total Accepted:    227.6K
 * Total Submissions: 511.6K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows ===0) return [];

  const number = [];
  number[0]=[1];
  for(i=1; i < numRows; i++){
    number[i]=[];
    for(y=0; y< number[i-1].length+1; y++){
      const topLeft = (!!number[i-1][y-1])? number[i-1][y-1]: 0;
      const topRight = (!!number[i-1][y])? number[i-1][y]: 0;

      number[i].push(topLeft + topRight);
      // can be : number[i][y]= topLeft + topRight;

    }
  } 
  return number;
};

