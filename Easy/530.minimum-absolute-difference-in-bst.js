/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
 *
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (49.77%)
 * Total Accepted:    53.8K
 * Total Submissions: 108K
 * Testcase Example:  '[1,null,3,2]'
 *
 * Given a binary search tree with non-negative values, find the minimum
 * absolute difference between values of any two nodes.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    3
 * ⁠   /
 * ⁠  2
 * 
 * Output:
 * 1
 * 
 * Explanation:
 * The minimum absolute difference is 1, which is the difference between 2 and
 * 1 (or between 2 and 3).
 * 
 * 
 * 
 * 
 * Note: There are at least two nodes in this BST.
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

 //(92 ms), it is a bit slow as I seperate the step
 // what if I calculate while getting the value?

var getMinimumDifference = function(root) {
  //get all the values;
  const values = [root.val];
  getTheValue(root, values);

  //get the minimum difference;
  let temp = +Infinity;
  const min = values.sort((a, b) => a - b).reduceRight((acc, cur) =>{
    acc = Math.min(acc, temp - cur);
    temp = cur;
    return acc;
  }, +Infinity);

  return min;
}

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

