/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (35.26%)
 * Total Accepted:    232.5K
 * Total Submissions: 658.4K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: 1->2->2->1
 * Output: true
 * 
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */

 // 80ms, beats 58.85
var isPalindrome = function(head) {
  const values =[];
  getTheValues(head,values);
  if(values.slice(0, Math.floor(values.length/2)).join("") === 
  values.reverse().slice(0, Math.floor(values.length/2)).join("")){
    return true;
  }
  return false;
};

function getTheValues(node,values){
  if(!node) return;
  values.push(node.val);
  getTheValues(node.next,values)
}

