/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (66.05%)
 * Total Accepted:    33.6K
 * Total Submissions: 50.5K
 * Testcase Example:  '{"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1}'
 *
 * Given an n-ary tree, return the preorder traversal of its nodes' values.
 * 
 * For example, given a 3-ary tree:
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Return its preorder traversal as: [1,3,5,6,2,4].
 * 
 * 
 * 
 * Note:
 * 
 * Recursive solution is trivial, could you do it iteratively?
 * 
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if(!root) return [];
  //return recursiveWay(root, []);
  return iterativeWay(root);
};
// for the tree
//      1
//  3   2   4
// 5 6
// the order is [1,3,5,6,2,4], after go through every node, return list;
function recursiveWay(node, list) {
  if(!node.children) return list;
  list.push(node.val);
  for(let i = 0; i < node.children.length; i++) {
      recursiveWay(node.children[i], list);
  }
  return list;
}
function iterativeWay(root) {
  let list = []
  let stack = [];
  stack.push(root);

  while(stack.length) {
      let cur = stack.pop();
      list.push(cur.val);
      for(let i = cur.children.length - 1; i >= 0; i--) {
          stack.push(cur.children[i]);
      }
  }
  return list;
}