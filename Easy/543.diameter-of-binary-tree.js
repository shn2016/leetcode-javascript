/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (46.19%)
 * Total Accepted:    117K
 * Total Submissions: 252.7K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 
 * Given a binary tree, you need to compute the length of the diameter of the
 * tree. The diameter of a binary tree is the length of the longest path
 * between any two nodes in a tree. This path may or may not pass through the
 * root.
 * 
 * 
 * 
 * Example:
 * Given a binary tree 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \     
 * ⁠     4   5    
 * 
 * 
 * 
 * Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
 * 
 * 
 * Note:
 * The length of path between two nodes is represented by the number of edges
 * between them.
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

// for a tree:
// if there only left or right tree, the deepest depth will be the longest length;
// if consist of both, their sum will be;

// so here we should get all the longest length for each tree and then do the comparasion.
var diameterOfBinaryTree = function(root) {
  if(!root) return 0;
  let left = [];
  let right = [];
  findDepth(root.left, left, 0);
  findDepth(root.right, right, 0);
  const length = Math.max(...left) + Math.max(...right);
  return Math.max(length, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
};

function findDepth(node, collection, i) {
  if(!node) {
    collection.push(i);
    return;
  }

  const b = i + 1;
  if(node.val === 1) console.log("this is"+i);
  findDepth(node.left, collection, b);
  findDepth(node.right, collection, b);
}