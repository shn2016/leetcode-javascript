/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.37%)
 * Total Accepted:    493.9K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a,b) => a-b );
  let result = [];
  for(i=0; i<nums.length-2; i++){
    if(nums[i] > 0) return result;
    if (i > 0 && nums[i] == nums[i - 1]){
			continue;
    }
    
    for (var j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				result.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
          // if this nums[j] is still equal to the last one , continue move;
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
          // if this nums[k] is still equal to the last one , continue move;
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
        // move the largest to left
				k--;
			} else {
        // move the second smaller to right;
				j++;
			}
		}
  }
  return result;
};


