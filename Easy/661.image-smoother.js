/*
 * @lc app=leetcode id=661 lang=javascript
 *
 * [661] Image Smoother
 *
 * https://leetcode.com/problems/image-smoother/description/
 *
 * algorithms
 * Easy (47.86%)
 * Total Accepted:    32.8K
 * Total Submissions: 67.8K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a 2D integer matrix M representing the gray scale of an image, you
 * need to design a smoother to make the gray scale of each cell becomes the
 * average gray scale (rounding down) of all the 8 surrounding cells and
 * itself.  If a cell has less than 8 surrounding cells, then use as many as
 * you can.
 * 
 * Example 1:
 * 
 * Input:
 * [[1,1,1],
 * ⁠[1,0,1],
 * ⁠[1,1,1]]
 * Output:
 * [[0, 0, 0],
 * ⁠[0, 0, 0],
 * ⁠[0, 0, 0]]
 * Explanation:
 * For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
 * For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
 * For the point (1,1): floor(8/9) = floor(0.88888889) = 0
 * 
 * 
 * 
 * Note:
 * 
 * The value in the given matrix is in the range of [0, 255].
 * The length and width of the given matrix are in the range of [1, 150].
 * 
 * 
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const result = [];
  for(let i = 0; i < M.length; i++) {
      result[i] = [];
    for(let j = 0; j<M[i].length; j++) {
      result[i][j] = smoother(M, i, j);
    }
  }
  return result;
};

function smoother(M, i, j) {
    const memo = [];
    for(let first = i - 1; first <= i + 1; first++) {
      for(let second = j - 1; second <= j + 1; second++) {
        if( first >= 0 && second >= 0 && first < M.length && second < M[0].length) {
          memo.push(M[first][second]);
        }
      }
    }
    const sum = memo.reduce((a,b) => a + b, 0);
    return Math.floor(sum/memo.length);

}
