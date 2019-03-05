/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (35.23%)
 * Total Accepted:    207.4K
 * Total Submissions: 588.1K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * 
 * 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */


var removeElements = function(head, val) {
  //remove the nodes matched at beginning first;
  while(!!head){
    if(head.val !== val) break;
    head = head.next;
  }
  // return when head become null;
  if(!head) return null;

  //create a dummy head for tracking.
  const dummy = new ListNode(0);
  dummy.next = head;  

  //create prev for linking and the below part is removing elements in the middle or tail;
  let prev = head;
  head = head.next;
  while(!!head){
    if(head.val === val){
      prev.next = head.next;
      head = head.next;
      continue;
    }
    prev = head;
    head = head.next;
  }

  return dummy.next;
};
