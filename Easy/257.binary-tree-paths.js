/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (44.96%)
 * Total Accepted:    210.8K
 * Total Submissions: 468.4K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

  if(!root) return [];

  let string = root.val.toString();
  let collection = [];

  //the root doesn't has children
  if(!root.left && !root.right){
    collection.push(string);
  }

  generatingPath(root.left, string, collection)
  generatingPath(root.right, string, collection)
  

  return collection;
};

function generatingPath(node, str, collection){
  //no such node, return
  if(!node){ return;};

  //no children node return
  if(!node.left && !node.right){
    str += "->"+ node.val;
    collection.push(str);
    return;
  }

  str += "->"+ node.val;

  //the node may has 1 or 2 nodes;
  generatingPath(node.left, str, collection);
  generatingPath(node.right, str, collection);

}
