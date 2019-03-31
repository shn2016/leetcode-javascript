/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
 *
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
 *
 * algorithms
 * Easy (57.97%)
 * Total Accepted:    73.8K
 * Total Submissions: 126.7K
 * Testcase Example:  '[3,9,20,15,7]'
 *
 * Given a non-empty binary tree, return the average value of the nodes on each
 * level in the form of an array.
 * 
 * Example 1:
 * 
 * Input:
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * Output: [3, 14.5, 11]
 * Explanation:
 * The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on
 * level 2 is 11. Hence return [3, 14.5, 11].
 * 
 * 
 * 
 * Note:
 * 
 * The range of node's value is in the range of 32-bit signed integer.
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var averageOfLevels = function(root) {
  const values = [];
  getValues(root, values, 0);
  const result = values.map(nums => {
    const sum = nums.reduce((a, b) => a + b);
    return sum / nums.length;
  })
  return result;
};

function getValues(node, values, step) {
  if(!node) return;
  if(!values[step]) values[step] = [];
  values[step].push(node.val);
  getValues(node.left, values, step+1);
  getValues(node.right, values, step+1);
}
