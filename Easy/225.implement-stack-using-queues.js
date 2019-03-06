/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 *
 * https://leetcode.com/problems/implement-stack-using-queues/description/
 *
 * algorithms
 * Easy (37.88%)
 * Total Accepted:    120.2K
 * Total Submissions: 316K
 * Testcase Example:  '["MyStack","push","push","top","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * Implement the following operations of a stack using queues.
 * 
 * 
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * empty() -- Return whether the stack is empty.
 * 
 * 
 * Example:
 * 
 * 
 * MyStack stack = new MyStack();
 * 
 * stack.push(1);
 * stack.push(2);  
 * stack.top();   // returns 2
 * stack.pop();   // returns 2
 * stack.empty(); // returns false
 * 
 * Notes:
 * 
 * 
 * You must use only standard operations of a queue -- which means only push to
 * back, peek/pop from front, size, and is empty operations are valid.
 * Depending on your language, queue may not be supported natively. You may
 * simulate a queue by using a list or deque (double-ended queue), as long as
 * you use only standard operations of a queue.
 * You may assume that all operations are valid (for example, no pop or top
 * operations will be called on an empty stack).
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.stack = new Queue();
};

class Queue {
  constructor(){
    this.queue = [];
  }
  //push to back
  push(x){
    this.queue.push(x);
  }
  //get front;
  peek(){
    return this.queue[0];
  }
  //remove and return
  pop(){
    return this.queue.shift();
  }
  isEmpty(){
    return (this.queue.length === 0)? true : false;
  }
}
/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  if(!this.stack){
    //using queue to push is pushing to back, here is pushing to top;
    this.stack = new Queue();
    this.stack.push(x);
  } else{
    this.stack.push(x);
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const a = [];
  //que's pop is pop the front, which is the bottom of stack, here still the top
  // so we have to create an array, to figure out what is the back one.
  while(!this.stack.isEmpty()){
    a.push(this.stack.pop());
  }
  for(i=0;i<a.length-1;i++){
    this.stack.push(a[i]);
  }
  return a.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  const a = [];
  //que's pop is pop the front, which is the bottom of stack, here still the top
  // so we have to create an array, to figure out what is the back one.
  while(!this.stack.isEmpty()){
    a.push(this.stack.pop());
  }
  for(i=0;i<a.length;i++){
    this.stack.push(a[i]);
  }
  return a.pop();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {

  return this.stack.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

