/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (43.35%)
 * Total Accepted:    258.1K
 * Total Submissions: 594K
 * Testcase Example:  '[6,2,8,0,4,7,9,null,null,3,5]\n2\n8'
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of
 * two given nodes in the BST.
 * 
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes p and q as the lowest node in T that has both p
 * and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 * Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant
 * of itself according to the LCA definition.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * All of the nodes' values will be unique.
 * p and q are different and both values will exist in the BST.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//Left subtree of a node N contains nodes whose values are lesser than or equal to node N's value.
//Right subtree of a node N contains nodes whose values are greater than node N's value.
//Both left and right subtrees are also BSTs.

//84ms
var lowestCommonAncestor = function(root, p, q) {
  let parentVal = root.val;
  const pVal = p.val;
  const qVal = q.val;
  if( pVal > parentVal && qVal > parentVal){
    return lowestCommonAncestor(root.right, p, q);
  }
  if( pVal < parentVal && qVal < parentVal){
    return lowestCommonAncestor(root.left, p, q);
  } 

  return root;
}
//136 ms, the slowest one.
//when a node has p and q while his children doesn't have both, this is the lowest common ancestor;
var first = function(root, p, q) {
  if(!root) return null;
  const result = [];
  findResult(root, p , q, result);
  return result.pop();
};

function findResult(node, p , q,result){
  if(ifNodehas(node, p) && ifNodehas(node, q) ){
    result.push(node);
  }
  //IMPORTANT: check something is not null: use !!
  if(!!node.left){
    findResult(node.left, p, q, result);
  }
  if(!!node.right){
    findResult(node.right, p, q, result);
  }
}

function ifNodehas(node, target){
  const nodes = [];
  getNodes(node, nodes);
  if(nodes.includes(target)) return true; 
  return false;
}

function getNodes(node, nodes){
  if(!node) return;
  nodes.push(node);
  getNodes(node.left, nodes);
  getNodes(node.right, nodes);
}