/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (53.10%)
 * Total Accepted:    306.5K
 * Total Submissions: 574.2K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */

// whenever put a right parenthesis, the number of left should be larger or equal to right;
var generateParenthesis = function(n) {
  let result = [];
  backtrack(result, "", 0, 0, n);
  return result;
};

function backtrack(result, cur, left, right, max){
  if (cur.length == max * 2) {
    result.push(cur);
    return;
  }
  if (left < max)
  // this will ensure this there is n left and 0 right thing happen;
    backtrack(result, cur+"(", left+1, right, max);
  if (right < left)
    backtrack(result, cur+")", left, right+1, max);
}


