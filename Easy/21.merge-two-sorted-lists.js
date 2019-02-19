/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (45.58%)
 * Total Accepted:    501.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let array = [];
  if(l1 === null) return l2;
  if(l2 === null) return l1;

  while(!!l1){
    array.push(l1.val);
    l1 = l1.next;
  }
  while(!!l2){
    array.push(l2.val);
    l2 = l2.next;
  }
  array.sort(function(a, b){return a - b});
  let dummyHead = new ListNode(0);
  let l3 = dummyHead;
  for(i=0 ; i< array.length; i++){
    console.log(i);
    const node = new ListNode(array[i]);
    l3.next = node;
    l3 = l3.next;
  }

  return dummyHead.next;
};

// spent plenty of time on ListNode, this turns out to be a class
// rather than a function, and val or next undefined confused me 
// a lot.
