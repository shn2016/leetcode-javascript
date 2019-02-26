/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (49.15%)
 * Total Accepted:    237K
 * Total Submissions: 482.2K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given an array where elements are sorted in ascending order, convert it to a
 * height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * Example:
 * 
 * 
 * Given the sorted array: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

 //an answer from liyanxiang;
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
      return null;
  }
  let middle = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[middle]);
  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1));            
  return root;
};

// feels like I have misunderstanding to this problems, what is the logic for the test cases;
// var sortedArrayToBST = function(nums) {
//   if(!nums || nums.length === 0 ) return null;

//   //create a dummy head for easy to trace head of tree;
//   const dummy = new ListNode(0);
//   const head = new TreeNode(nums.splice(0,1));
//   dummy.next = head;

//   //create an array to store the upper level of nodes;
//   const preNodes = [head];

//   //start top down adding;
//   addingNode(nums, preNodes, 2);

//   return dummy.next;
// };


// function addingNode(nums, preNodes, i){
//   if(nums.length ===0){
//     return;
//   }

//   const currentNodes = [];
//   const curNodesVals = nums.splice(0,i);

//   for(y=0; y<preNodes.length; y++){
//     const leftVal = curNodesVals.shift();

//     if(leftVal === undefined) return;
//     preNodes[y].left = new TreeNode(leftVal);
//     currentNodes.push(preNodes[y].left);
//   }

//   for(y=0; y<preNodes.length; y++){
//     const rightVal = curNodesVals.shift();

//     if(rightVal === undefined) return;
//     preNodes[y].right = new TreeNode(rightVal);
//     currentNodes.push(preNodes[y].right);
//   }

//   addingNode(nums, currentNodes, i*2);
// }