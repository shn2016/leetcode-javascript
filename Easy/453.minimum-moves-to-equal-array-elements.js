/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 *
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
 *
 * algorithms
 * Easy (48.99%)
 * Total Accepted:    54.7K
 * Total Submissions: 111.4K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty integer array of size n, find the minimum number of moves
 * required to make all array elements equal, where a move is incrementing n -
 * 1 elements by 1.
 * 
 * Example:
 * 
 * Input:
 * [1,2,3]
 * 
 * Output:
 * 3
 * 
 * Explanation:
 * Only three moves are needed (remember each move increments two elements):
 * 
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// adding 1 to the biggest is same with decreasing 1 to the smallest;
var minMoves = function(nums) {
  const min = Math.min.apply(null, nums)
  var len = nums.length;
  let sum = 0;
  for(let i = 0; i < len; i++){
      sum += nums[i];
  }
  // if there is 000123, there gonna need 6 times to make them equal.
  return sum - len * min;
};

// tried many, time limit is the issue.
var a = function(nums) {
  let count = 0;
  let set = new Set(nums);
  while(set.size !== 1){

    let max = Math.max(...set);
    let min = Math.min(...set);
    const dif = max - min;
    let check = true;
    nums = nums.map(val => {
      if(val === max && check){
        check = false;
        return val;
      }
      return val + dif;
    })
    count += dif;
    set = new Set(nums);
  }
  return count;
};

