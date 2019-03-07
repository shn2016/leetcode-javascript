/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 *
 * https://leetcode.com/problems/range-sum-query-immutable/description/
 *
 * algorithms
 * Easy (36.59%)
 * Total Accepted:    128.1K
 * Total Submissions: 348.9K
 * Testcase Example:  '["NumArray","sumRange","sumRange","sumRange"]\n[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]'
 *
 * Given an integer array nums, find the sum of the elements between indices i
 * and j (i ≤ j), inclusive.
 * 
 * Example:
 * 
 * Given nums = [-2, 0, 3, -5, 2, -1]
 * 
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 * 
 * 
 * 
 * Note:
 * 
 * You may assume that the array does not change.
 * There are many calls to sumRange function.
 * 
 * 
 */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sums = [];
  let sum = 0;
  for(i=0; i<nums.length; i++){
    sum += nums[i];
    this.sums.push(sum);
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
// this one is 108 ms;
NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

  // const dummy = this.array.slice(i,j+1);
  // return dummy.reduce((acc,cur) => acc + cur, 0);
