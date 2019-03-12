/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (40.41%)
 * Total Accepted:    293.5K
 * Total Submissions: 710.8K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b) => a-b);
  let collection = [];
  for(i=0; i<nums.length-2;i++){
    if(i>0 && nums[i] === nums[i-1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while(j<k){
      const sum = nums[i] + nums[j] + nums[k];
      collection.push(sum);
      if(sum === target){
        return target;
      } else if (sum > target){
        k--;
        while(nums[k] === nums[k+1]){
          k--;
        }
      } else {
        j++;
        while(nums[j] === nums[j-1]){
          j++;
        }
      }  
    }

  }
  //if(collection.length === 0) return nums[1] + nums[0] + nums[2];
  const result = collection.reduce((acc, cur) => {
    return (Math.abs(acc - target) > Math.abs(cur - target))? cur : acc;
  }, +Infinity)

  return result;
};

