/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 *
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * algorithms
 * Easy (41.24%)
 * Total Accepted:    91.4K
 * Total Submissions: 220.9K
 * Testcase Example:  '[3,4,5,1,2]\n[4,1,2]'
 *
 * 
 * Given two non-empty binary trees s and t, check whether tree t has exactly
 * the same structure and node values with a subtree of s. A subtree of s is a
 * tree consists of a node in s and all of this node's descendants. The tree s
 * could also be considered as a subtree of itself.
 * 
 * 
 * Example 1:
 * 
 * Given tree s:
 * 
 * ⁠    3
 * ⁠   / \
 * ⁠  4   5
 * ⁠ / \
 * ⁠1   2
 * 
 * Given tree t:
 * 
 * ⁠  4 
 * ⁠ / \
 * ⁠1   2
 * 
 * Return true, because t has the same structure and node values with a subtree
 * of s.
 * 
 * 
 * Example 2:
 * 
 * Given tree s:
 * 
 * ⁠    3
 * ⁠   / \
 * ⁠  4   5
 * ⁠ / \
 * ⁠1   2
 * ⁠   /
 * ⁠  0
 * 
 * Given tree t:
 * 
 * ⁠  4
 * ⁠ / \
 * ⁠1   2
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

 // let every s node compared with t;
 // if first value same, go to next stage and return the full result;
var isSubtree = function(s, t) {
  let answer = false;
  let same = true;

  function compare(a, b) {
    if(!a && !b) return;
    if(!a || !b) {
      same = false; 
      return; 
    }
    if(a.val === b.val) {
      compare(a.left, b.left);
      compare(a.right, b.right);
    } else {
      same =false;
    }
  }

  function retrieving(node, t) {
    if(!node) return;
    if(node.val === t.val) {
      same = true;
      compare(node.left, t.left);
      compare(node.right, t.right);

      if(same) answer = true;
    }
    if(answer) return;
    retrieving(node.left, t);
    retrieving(node.right, t);
  }

  retrieving(s,t);

  return answer;
};
