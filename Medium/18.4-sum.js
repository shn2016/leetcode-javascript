/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (29.65%)
 * Total Accepted:    215.3K
 * Total Submissions: 722K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

 // very much same logic with 15, 16;
var fourSum = function(nums, target) {
  nums = nums.sort((a,b) => a - b)
  const result = [];
  for(i=0; i<nums.length; i++){
    if(target > 0 && nums[i] > target) break;
    //if this number same with previous one, his combination should have solved;
    if(i>0 && nums[i] === nums[i-1]) continue;
    for(j=i+1; j<nums.length; j++){
      // remove duplicated one;
      if(j>i+1 && nums[j] === nums[j-1]) continue;
      let k = j+1;
      let n = nums.length-1;

      // this loop will get all the answers with fixed i and j;
      while(k<n){
        const sum = nums[i] + nums[j] + nums[k] + nums[n];
        if(sum === target){
          result.push([nums[i], nums[j], nums[k], nums[n]]);
          k++;
          n--;
          while(nums[k]===nums[k-1]){
            k++;
          }
          while(nums[n]===nums[n+1]){
            n--;
          }
        } else if (sum > target){
          n--;
        } else {
          k++;
        }
      }
    }
  }
  return result;
};

