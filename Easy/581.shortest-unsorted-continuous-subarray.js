/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 *
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (29.59%)
 * Total Accepted:    60.5K
 * Total Submissions: 203.1K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * Given an integer array, you need to find one continuous subarray that if you
 * only sort this subarray in ascending order, then the whole array will be
 * sorted in ascending order, too.  
 * 
 * You need to find the shortest such subarray and output its length.
 * 
 * Example 1:
 * 
 * Input: [2, 6, 4, 8, 10, 9, 15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make
 * the whole array sorted in ascending order.
 * 
 * 
 * 
 * Note:
 * 
 * Then length of the input array is in range [1, 10,000].
 * The input array may contain duplicates, so ascending order here means <=. 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

 // 112ms 49%
 // just grad another sorted array, compare the diff;
var findUnsortedSubarray = function(nums) {
  const numsCopy = [...nums];
  nums.sort((a, b) => a - b);
  let result = 0;
  let i = 0;
  let j = nums.length-1;
  while(i < j){
    if(nums[i] === numsCopy[i] && nums[j] === numsCopy[j]){
      i++;
      j--;
      continue;
    }
    if(nums[i] === numsCopy[i] && nums[j] !== numsCopy[j]){
      i++;
      continue;
    }
    if(nums[i] !== numsCopy[i] && nums[j] === numsCopy[j]){
      j--;
      continue;
    }
    result = j - i + 1;
    break;
  }
  return result;
};
