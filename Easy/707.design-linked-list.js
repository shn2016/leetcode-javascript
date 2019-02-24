/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 *
 * https://leetcode.com/problems/design-linked-list/description/
 *
 * algorithms
 * Easy (22.75%)
 * Total Accepted:    19K
 * Total Submissions: 83K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\n[[],[1],[3],[1,2],[1],[1],[1]]'
 *
 * Design your implementation of the linked list. You can choose to use the
 * singly linked list or the doubly linked list. A node in a singly linked list
 * should have two attributes: val and next. val is the value of the current
 * node, and next is a pointer/reference to the next node. If you want to use
 * the doubly linked list, you will need one more attribute prev to indicate
 * the previous node in the linked list. Assume all nodes in the linked list
 * are 0-indexed.
 * 
 * Implement these functions in your linked list class:
 * 
 * 
 * get(index) : Get the value of the index-th node in the linked list. If the
 * index is invalid, return -1.
 * addAtHead(val) : Add a node of value val before the first element of the
 * linked list. After the insertion, the new node will be the first node of the
 * linked list.
 * addAtTail(val) : Append a node of value val to the last element of the
 * linked list.
 * addAtIndex(index, val) : Add a node of value val before the index-th node in
 * the linked list. If index equals to the length of linked list, the node will
 * be appended to the end of linked list. If index is greater than the length,
 * the node will not be inserted.
 * deleteAtIndex(index) : Delete the index-th node in the linked list, if the
 * index is valid.
 * 
 * 
 * Example:
 * 
 * 
 * MyLinkedList linkedList = new MyLinkedList();
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
 * linkedList.get(1);            // returns 2
 * linkedList.deleteAtIndex(1);  // now the linked list is 1->3
 * linkedList.get(1);            // returns 3
 * 
 * 
 * Note:
 * 
 * 
 * All values will be in the range of [1, 1000].
 * The number of operations will be in the range of [1, 1000].
 * Please do not use the built-in LinkedList library.
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.currentNode = null;
  this.length = 0;
};

class Node {
  constructor(val){
    this.val = val,
    this.next = null
  }
} 
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
 if(index <0 || index> this.length-1) return -1;

 const head = this.currentNode;
 for(i=0; i<index; i++){
  this.currentNode = this.currentNode.next;
 }
 const val = this.currentNode.val
 this.currentNode = head;

 return val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  if(val === null) return;
  const head = new Node(val);

  head.next = this.currentNode;
  this.currentNode = head;
  //this.currentNode.next = dummy;
  
  this.length += 1;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  if(val === null) return;
  const tail = new Node(val);
  if(this.length === 0){
    this.currentNode = tail;
  } 
  else {
    const head = this.currentNode;
    for(i=0; i<this.length-1; i++){
      this.currentNode = this.currentNode.next;
    }
    this.currentNode.next = tail;
    this.currentNode = head;
  }

  this.length += 1;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index <0 || index> this.length) return -1;
  const node = new Node(val);
  const head = this.currentNode;
  if(index === 0){
    this.currentNode = node;
    this.currentNode.next = head;
  } else {
    for(i=0; i<index-1; i++){
      this.currentNode = this.currentNode.next;
    }
    //dummy is the previous node at index;
    //const dummy = this.currentNode.next;
    node.next = this.currentNode.next;
    this.currentNode.next = node;
    //node.next= dummy;

    this.currentNode = head;
  }
    
  this.length += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index <0 || index> this.length-1) return -1;
  if(index === 0){
    this.currentNode = this.currentNode.next;
  } else {
    const head = this.currentNode;
    for(i=0; i<index-1; i++){
      this.currentNode = this.currentNode.next;
    }

    //dummy is the one gonna be deleted;
    //const dummy = this.currentNode.next;
    this.currentNode.next = this.currentNode.next.next;
    this.currentNode = head;

  }
  
  this.length -= 1;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
