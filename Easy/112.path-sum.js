/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (36.90%)
 * Total Accepted:    285.3K
 * Total Submissions: 771.4K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 * 
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \      \
 * 7    2      1
 * 
 * 
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(root === null) return false;
  const result = [];
  let currentSum = root.val;
  retrival(root,sum, currentSum, result);

  if(result[0] ===1) return true;
  return false;
};

function retrival(node, sum, currentSum, result){
  const left = node.left;
  const right = node.right;
  if(!left && !right){
    if(currentSum === sum){
      result.push(1);
    }
    return;
  }
  let rightSum = currentSum;
  if(!!left ) {
    currentSum += left.val;
    retrival(left, sum, currentSum, result);
  }

  if(!!right) {
    rightSum += right.val;
    retrival(right, sum, rightSum, result);
  }
}

