/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.97%)
 * Total Accepted:    360.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const collection = [];
  getValues(head, collection);

  // n is outnumbered;
  if(collection[collection.length-n] === undefined) return head;

  // remove the value;
  collection.splice(collection.length-n,1);

  const dummy = new ListNode(0);
  // it is interesting that if I dummy.next it is a null 
  // and it will forget is is part of dummy;
  createNode(dummy, collection);
  return dummy.next;
};

function getValues(node, collection){
  if(!node) return;
  collection.push(node.val);
  getValues(node.next, collection)
}

// 72ms not using shift
// 64ms use;
function createNode(node, collection){
  if(collection.length === 0) return;
  node.next = new ListNode(collection.shift());
  createNode(node.next, collection)
}
