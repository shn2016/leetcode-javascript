/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 *
 * https://leetcode.com/problems/implement-queue-using-stacks/description/
 *
 * algorithms
 * Easy (41.92%)
 * Total Accepted:    137.8K
 * Total Submissions: 327.8K
 * Testcase Example:  '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * Implement the following operations of a queue using stacks.
 * 
 * 
 * push(x) -- Push element x to the back of queue.
 * pop() -- Removes the element from in front of queue.
 * peek() -- Get the front element.
 * empty() -- Return whether the queue is empty.
 * 
 * 
 * Example:
 * 
 * 
 * MyQueue queue = new MyQueue();
 * 
 * queue.push(1);
 * queue.push(2);  
 * queue.peek();  // returns 1
 * queue.pop();   // returns 1
 * queue.empty(); // returns false
 * 
 * Notes:
 * 
 * 
 * You must use only standard operations of a stack -- which means only push to
 * top, peek/pop from top, size, and is empty operations are valid.
 * Depending on your language, stack may not be supported natively. You may
 * simulate a stack by using a list or deque (double-ended queue), as long as
 * you use only standard operations of a stack.
 * You may assume that all operations are valid (for example, no pop or peek
 * operations will be called on an empty queue).
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack = new Stack(null);
};

//stack : push/pop/size/ isEmpty
class Stack{
  constructor(){
    this.top = null;
    this.size = 0;
  }
  push(x){
    const dummy = this.top;
    this.top = new ListNode(x);
    this.top.next = dummy;
    this.size++;
  }
  pop(){
    this.size--;
    const dummy = this.top;
    this.top = this.top.next;
    return dummy.val;
  }
  ssize(){
    return this.size;
  }
  isEmpty(){
    if(this.size ===0) return true;
    return false;
  }
}

//In this case, the top of stack is the front of queue;
// so the bottom is the back of queue;
/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const dummy = [];
  while(!this.stack.isEmpty()){
    dummy.push(this.stack.pop());
  }
  this.stack.push(x);
  while(dummy.length!==0){
    //change shift to pop() things goes fine;
    this.stack.push(dummy.pop());
  }

};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const element = this.stack.pop();
  this.stack.push(element);
  return element;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.isEmpty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

