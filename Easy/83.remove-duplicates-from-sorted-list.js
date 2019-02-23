/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (41.80%)
 * Total Accepted:    299.5K
 * Total Submissions: 716.1K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->1->2
 * Output: 1->2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
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
var deleteDuplicates = function(head) {
  // null, return;
  if(head === null){ return head};

  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  while(!!head){
    //no next, break;
    if(head.next === null){ break;}

    let val = head.val;
    let previousNode = head;

    head = head.next;
    if( val === head.val){
      // if duplicated, let previous one link to the next one; this next could be null;
      previousNode.next= head.next;
      // set current node to previous one and check again;
      head = previousNode;
    }
  }

  return dummyHead.next;
};
