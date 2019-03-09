/*
 * @lc app=leetcode id=427 lang=javascript
 *
 * [427] Construct Quad Tree
 *
 * https://leetcode.com/problems/construct-quad-tree/description/
 *
 * algorithms
 * Easy (54.48%)
 * Total Accepted:    7.3K
 * Total Submissions: 13.4K
 * Testcase Example:  '[[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]'
 *
 * We want to use quad trees to store an N x N boolean grid. Each cell in the
 * grid can only be true or false. The root node represents the whole grid. For
 * each node, it will be subdivided into four children nodes until the values
 * in the region it represents are all the same.
 * 
 * Each node has another two boolean attributes : isLeaf and val. isLeaf is
 * true if and only if the node is a leaf node. The val attribute for a leaf
 * node contains the value of the region it represents.
 * 
 * Your task is to use a quad tree to represent a given grid. The following
 * example may help you understand the problem better:
 * 
 * Given the 8 x 8 grid below, we want to construct the corresponding quad
 * tree:
 * 
 * 
 * 
 * It can be divided according to the definition above:
 * 
 * 
 * 
 * 
 * 
 * The corresponding quad tree should be as following, where each node is
 * represented as a (isLeaf, val) pair.
 * 
 * For the non-leaf nodes, val can be arbitrary, so it is represented as *.
 * 
 * 
 * 
 * Note:
 * 
 * 
 * N is less than 1000 and guaranteened to be a power of 2.
 * If you want to know more about the quad tree, you can refer to its wiki.
 * 
 * 
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  const node= new Node();
  
  if(allTrue(grid)){
    node.val = true;
    node.isLeaf = true;
    return node;
  };

  if(allFalse(grid)){
    node.val = false;
    node.isLeaf = true;
    return node;
  };

  const left = grid.map(array => array.slice(0,array.length/2));
  const right = grid.map(array => array.slice(array.length/2, array.length));

  node.isLeaf = false;
  node.topLeft = construct(left.slice(0,left.length/2));
  node.topRight = construct(right.slice(0,left.length/2));
  node.bottomLeft = construct(left.slice(left.length/2, left.length));
  node.bottomRight = construct(right.slice(right.length/2, right.length));

  return node;
};

function allTrue(collection){
  return collection.every(array => array.every(x=> x===1));
}

function allFalse(collection){
  return collection.every(array => array.every(x=> x===0));
}

