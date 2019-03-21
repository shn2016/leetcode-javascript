/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 *
 * https://leetcode.com/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (60.25%)
 * Total Accepted:    124.7K
 * Total Submissions: 206.3K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * You are given a map in form of a two-dimensional integer grid where 1
 * represents land and 0 represents water.
 * 
 * Grid cells are connected horizontally/vertically (not diagonally). The grid
 * is completely surrounded by water, and there is exactly one island (i.e.,
 * one or more connected land cells).
 * 
 * The island doesn't have "lakes" (water inside that isn't connected to the
 * water around the island). One cell is a square with side length 1. The grid
 * is rectangular, width and height don't exceed 100. Determine the perimeter
 * of the island.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * [[0,1,0,0],
 * ⁠[1,1,1,0],
 * ⁠[0,1,0,0],
 * ⁠[1,1,0,0]]
 * 
 * Output: 16
 * 
 * Explanation: The perimeter is the 16 yellow stripes in the image below:
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */


 // 212ms;
 // for each row, the 1 can be consistant and can be separate;
var islandPerimeter = function(grid) {
  let sum = 0;
  for(i=0; i< grid.length; i++){
    // this is store the consistant 1;
    let count = 0;
    for(j=0; j< grid[i].length; j++){
      if(grid[i][j] === 1){
        count++;
        if(i !== 0) sum = (grid[i-1][j] === 1)? (sum-2) : sum;
      }
      //for the seperate situation.
      if(grid[i][j] === 0 && count !== 0){
        sum += count * 2 + 2;
        count = 0;
      }
    }
    sum += (count ===0)? 0 : (count * 2 + 2);
  }
  return sum;
};

