/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (42.56%)
 * Total Accepted:    355.4K
 * Total Submissions: 834K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 * 
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * But the following [1,2,2,null,3,null,3]  is not:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
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
var isSymmetric = function(root) {
  if(root === null) return true;
  // make leftBranch store all the nodes on the left;
  const leftBranch = [];
  const rightBranch = [];
  const leftNode = root.left;
  const rightNode = root.right;

  putNodeToTree(leftNode, leftBranch, 1);
  putNodeToTree(rightNode, rightBranch, 1);

  let result = true;

  //compare the nodes val in the same level;
  for(i=1; i<leftBranch.length; i++){
    const leftLevel = leftBranch[i];
    const rightLevel = rightBranch[i].reverse();

    if(leftLevel.length !== rightLevel.length || leftLevel.toString() !== rightLevel.toString()){
      result = false;
      break;
    }
  }
  return result;
};

function putNodeToTree(node, branch, level){

  // create one if empty;
  if(!branch[level]){
    branch[level] = [];
  }

  // put null to the array and will not proceed next level for this node;
  if(node === null){
    branch[level].push(null);
    return;
  }

  branch[level].push(node.val);

  const leftNode = node.left;
  const rightNode = node.right;
  level++;

  putNodeToTree(leftNode, branch, level);
  putNodeToTree(rightNode, branch, level);
}