/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/
 *
 * algorithms
 * Easy (64.40%)
 * Total Accepted:    36.9K
 * Total Submissions: 57K
 * Testcase Example:  '{"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1}'
 *
 * Given a n-ary tree, find its maximum depth.
 * 
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 * 
 * For example, given a 3-ary tree:
 * 
 * 
 * 
 * 
 * 
 * 
 * We should return its max depth, which is 3.
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The depth of the tree is at most 1000.
 * The total number of nodes is at most 5000.
 * 
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
 * @return {number}
 */
var a = function(root) {
  if(!root) return 0;
  const collection = [];
  getTheDepth(root, collection, 1);
  return Math.max(...collection);
};

function getTheDepth(node, collection, i){
  if(node.children.length === 0) {
    collection.push(i);
    return;
  }
  i++;
  node.children.forEach(child => {
    getTheDepth(child, collection, i);
  });
  //javascript issue using for loop?  pointer of i or j (use let) in the loop?
}
var maxDepth = function(root) {
  let ans = 0;
  function maxDepthHelper(node, depth) {
      if (!node) {return;}
      let children = node.children;
      ans = Math.max(depth, ans);
      for (let i = 0; i < children.length; i++) {
          maxDepthHelper(children[i], depth + 1);
      }
  }
  maxDepthHelper(root, 1)

  return ans;
  
};