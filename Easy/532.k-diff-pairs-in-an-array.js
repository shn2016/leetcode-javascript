/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 *
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/description/
 *
 * algorithms
 * Easy (29.30%)
 * Total Accepted:    57.6K
 * Total Submissions: 196.2K
 * Testcase Example:  '[3,1,4,1,5]\n2'
 *
 * 
 * Given an array of integers and an integer k, you need to find the number of
 * unique k-diff pairs in the array. Here a k-diff pair is defined as an
 * integer pair (i, j), where i and j are both numbers in the array and their
 * absolute difference is k.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: [3, 1, 4, 1, 5], k = 2
 * Output: 2
 * Explanation: There are two 2-diff pairs in the array, (1, 3) and (3,
 * 5).Although we have two 1s in the input, we should only return the number of
 * unique pairs.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:[1, 2, 3, 4, 5], k = 1
 * Output: 4
 * Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3,
 * 4) and (4, 5).
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: [1, 3, 1, 5, 4], k = 0
 * Output: 1
 * Explanation: There is one 0-diff pair in the array, (1, 1).
 * 
 * 
 * 
 * Note:
 * 
 * The pairs (i, j) and (j, i) count as the same pair.
 * The length of the array won't exceed 10,000.
 * All the integers in the given input belong to the range: [-1e7, 1e7].
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


 // 712ms way too slow; => 680ms => 532ms => 100ms => 96ms
 // was using array to hold all the large nums, to return length of array;
 // then added a prev value to avoid duplicated calculate in the large num;
 // then added (nums[i]- nums[y] > k to avoid unneccesary calculation, this increase speed a lot;
var findPairs = function(nums, k) {
  nums = nums.sort((a,b) => b-a);
  let time = 0;
  let prev = -Infinity;
  for(i=0; i<nums.length-1; i++){
    if(nums[i] === prev) continue;

    for(y=i+1; y<nums.length; y++){
      prev = nums[i];
      if(nums[i]- nums[y] > k) break;
      if(nums[i]- nums[y] === k){
        time++;
        break;
      }
    }
  }
  return time;
};

