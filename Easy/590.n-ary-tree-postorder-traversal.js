/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (66.08%)
 * Total Accepted:    31K
 * Total Submissions: 46.7K
 * Testcase Example:  '{"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1}'
 *
 * Given an n-ary tree, return the postorder traversal of its nodes' values.
 * 
 * For example, given a 3-ary tree:
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Return its postorder traversal as: [5,6,3,2,4,1].
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
var postorder = function(root) {
  if(!root) return [];
  //return recursiveWay(root, []);
  return iterativeWay(root);
}; 

// the left ones go in first;
function recursiveWay(node, list){
  if(!node.children) return list;
  list.unshift(node.val);
  for(let i = node.children.length - 1; i >= 0; i--){
    recursiveWay(node.children[i], list);
  }
  return list;
}
function iterativeWay(node) {
  let list = []
  let stack = [];
  stack.push(node);

  while(stack.length) {
      let cur = stack.pop();
      list.unshift(cur.val);
      for(let i = 0 ; i < cur.children.length; i++) {
        stack.push(cur.children[i]);
      }
  }
  return list;
}