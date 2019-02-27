/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (40.27%)
 * Total Accepted:    293.8K
 * Total Submissions: 728.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 * 
 * For this problem, a height-balanced binary tree is defined as:
 * 
 * 
 * a binary tree in which the depth of the two subtrees of every node never
 * differ by more than 1.
 * 
 * 
 * Example 1:
 * 
 * Given the following tree [3,9,20,null,null,15,7]:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * Return true.
 * 
 * Example 2:
 * 
 * Given the following tree [1,2,2,3,3,null,null,4,4]:
 * 
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * Return false.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if(root === null) return true;
  const a =[];
  isSubtreeBalanced(root,a);
  if( a[0] === -1){
    return false;
  }
  return true;
};

function isSubtreeBalanced(root, a){
  const left = getDepth(root.left);
  const right = getDepth(root.right);

  if(Math.abs(left - right) > 1){
    a.push(-1);
    return;
  }
  if(root.left !== null) {
  isSubtreeBalanced(root.left, a);
  }
  if(root.right !== null) {
    isSubtreeBalanced(root.right, a);
  }
} 

function getDepth(root){
  if(root === null) return 0;
  let i = 0;
  let trees = [root];
  let dummy = [];

  while(trees.length !== 0){
    const node = trees.shift();
    
    if(node.left !== null){
      dummy.push(node.left);
    }

    if(node.right !== null){
      dummy.push(node.right);
    }
    if(trees.length === 0){
      i++;
      trees = dummy;
      dummy = [];
    }

  }
  return i;
}