/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
 *
 * https://leetcode.com/problems/convert-bst-to-greater-tree/description/
 *
 * algorithms
 * Easy (49.91%)
 * Total Accepted:    69.2K
 * Total Submissions: 138.6K
 * Testcase Example:  '[5,2,13]'
 *
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that
 * every key of the original BST is changed to the original key plus sum of all
 * keys greater than the original key in BST.
 * 
 * 
 * Example:
 * 
 * Input: The root of a Binary Search Tree like this:
 * ⁠             5
 * ⁠           /   \
 * ⁠          2     13
 * 
 * Output: The root of a Greater Tree like this:
 * ⁠            18
 * ⁠           /   \
 * ⁠         20     13
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
 * @return {TreeNode}
 */

 //  184ms
 // The idea is simply similar to the function name;
 // get the values first and then add to tree;
var convertBST = function(root) {
  if(!root) return null;

  const values= [root.val];
  getTheValue(root, values);

  root.val += getTheSumOfGreater(root.val, values)
  addTheValue(root, values);
  return root;
};

function getTheValue(node, values){
  if(!node) return;
  if(!!node.left){
    values.push(node.left.val);
    getTheValue(node.left, values);
  }
  if(!!node.right){
    values.push(node.right.val);
    getTheValue(node.right, values);
  }
}

function addTheValue(node, values){
  if(!node) return;
  if(!!node.left){
    node.left.val += getTheSumOfGreater(node.left.val, values);
    addTheValue(node.left, values);
  }
  if(!!node.right){
    node.right.val += getTheSumOfGreater(node.right.val, values);
    addTheValue(node.right, values);
  }
}

function getTheSumOfGreater(value, values){
  const result = values.reduce((acc, cur) =>{
    if(cur > value){
      acc += cur;
    }
    return acc;
  }, 0);
  return result;
}
