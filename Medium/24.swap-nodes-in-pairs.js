/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (43.10%)
 * Total Accepted:    286.7K
 * Total Submissions: 660.6K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// for this kind of questions, surely I can get all the values and then turn it into a node;
var swapPairs = function(head) {
  const collection = [];
  getValues(head, collection);

  // then I will swap the position of 0 to 1, 1 to 0 ,etc.. if the last is a even number, not odd, remain
  // but what if we go to node derectly;
  const dummy = new ListNode(0);
  generateNode(dummy, collection);

  return dummy.next;
};

function getValues(node, collection){
  if(!node) return;
  collection.push(node.val);
  getValues(node.next, collection)
}

function generateNode(node,collection){
  if(collection.length === 0) return;

  const a = collection.shift();
  //this is incase there is only 1 node left and there is no need to swap;
  if(collection.length === 0){
    node.next = new ListNode(a);
    return;
  }
  const b = collection.shift();
  // this step reverse the order of a and b;
  node.next = new ListNode(b);
  node.next.next = new ListNode(a);
  generateNode(node.next.next, collection);
}
