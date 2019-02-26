/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (45.56%)
 * Total Accepted:    208.4K
 * Total Submissions: 457.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(root  === null ) return [];
  let nodes = [];
  nodes[0]=[root.val];
  spreadTheTree(root, nodes, 1);
  nodes.reverse();
  return nodes;
};

function spreadTheTree(node, nodes, level){

  const left = node.left;
  const right = node.right;
  if(!left && !right){
    return;
  }
  if(!nodes[level]){
    nodes[level] = [];
  }
  
  const nextLevel = level+1;
  if(left !== null){
    nodes[level].push(left.val);
    spreadTheTree(left, nodes, nextLevel);
  }

  if(right !== null){
    nodes[level].push(right.val);
    spreadTheTree(right, nodes, nextLevel);
  }
}

