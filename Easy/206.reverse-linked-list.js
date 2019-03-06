/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (52.66%)
 * Total Accepted:    520.1K
 * Total Submissions: 984.8K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
var reverseList = function(head) {
  if(!head) return null;

  //cannot set dummy to listnode as it will has a 0 value;
  let dummy;

  while(!!head){
    //create a node with first val
    const prev = new ListNode(head.val);

    // use dummy to store the previous ndoesl
    prev.next = dummy;
    dummy = prev;
    
    head = head.next;
  }
  return dummy;
};

