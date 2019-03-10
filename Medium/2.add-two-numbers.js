/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.46%)
 * Total Accepted:    751.7K
 * Total Submissions: 2.5M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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

// 124 ms beats 78.84%
// recursion solution;
var addTwoNumbers = function(l1, l2) {
  // dummy head for tracking.
  const dummy = new ListNode(0);

  // carry in case sum >= 10;
  let carry = 0;
  // go in loop;
  addNodes(l1, l2, dummy, carry);

  return dummy.next;
};

function addNodes(l1, l2, node, carry){
  // the situation that l1, l2 not null
  if(!!l1 && !!l2){
    const val = (carry+ l1.val+l2.val) % 10;
    node.next = new ListNode(val);
    carry = (carry+ l1.val+l2.val >= 10)? 1 : 0;

    addNodes(l1.next, l2.next, node.next, carry);
  } 
  
  // only l1.
  else if(!!l1){
    const val = (carry+ l1.val) % 10;
    node.next = new ListNode(val);
    carry = (carry+ l1.val >= 10)? 1 : 0;

    addNodes(l1.next, null, node.next, carry);
  } 

  else if(!!l2){
    const val = (carry+ l2.val) % 10;
    node.next = new ListNode(val);
    carry = (carry+ l2.val >= 10)? 1 : 0;

    addNodes(null, l2.next, node.next, carry);
  }
  
  // all the above is not satisfied, but this is.
  else if(carry === 1){
    node.next = new ListNode(carry);
  }
}

