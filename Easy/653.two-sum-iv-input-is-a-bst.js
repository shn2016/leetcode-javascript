/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 *
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (51.78%)
 * Total Accepted:    80.1K
 * Total Submissions: 153.7K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * Given a Binary Search Tree and a target number, return true if there exist
 * two elements in the BST such that their sum is equal to the given target.
 * 
 * Example 1:
 * 
 * 
 * Input: 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * Target = 9
 * 
 * Output: True
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * Target = 28
 * 
 * Output: False
 * 
 * 
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const collection = [];
  getValues(root, collection);
  for(let i = 0; i < collection.length; i++) {
    const dif = k - collection[i];
    if(collection.includes(dif) && collection.indexOf(dif) !== i) return true;
  }
  return false;
};
// I tend to get all the values and then find the solution.
function getValues(node, collection) {
  if(!node) return;
  collection.push(node.val);
  getValues(node.left, collection);
  getValues(node.right, collection);
}



var findTarget = function(root, k) {
  let checkSet = new Set();
  return dfs(root, k, checkSet);
};

function dfs(root, k, set) {
  if (root === null) {
    return false;
  }
  if (set.has(k - root.val)) {
    return true;
  }
  set.add(root.val);
  return dfs(root.left, k, set) || dfs(root.right, k, set);
}