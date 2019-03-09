/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 *
 * https://leetcode.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (48.69%)
 * Total Accepted:    117.2K
 * Total Submissions: 240.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Find the sum of all left leaves in a given binary tree.
 * 
 * Example:
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * There are two left leaves in the binary tree, with values 9 and 15
 * respectively. Return 24.
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  // create an array to store the left leaves
  let memo = [];

  // goes into recursion.
  getValues(root, memo);

  // get sum;
  const result = memo.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0)
  return result;
};

function getValues(node, memo){
  if(!node) return;

  // if there is a left node, and it has no child node, so it is leaves.
  if(!!node.left){
    if(!node.left.left && !node.left.right){
      memo.push(node.left.val);
    }
  }
  getValues(node.left, memo);
  getValues(node.right, memo);
}

