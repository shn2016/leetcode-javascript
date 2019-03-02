/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (40.76%)
 * Total Accepted:    290.2K
 * Total Submissions: 711.8K
 * Testcase Example:  '[1,2,3,1]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 * 
 * Example 2:
 * 
 * 
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house
 * 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

 //For this idea: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.

 // consider the relationship from top to bottom first;
 // we can get that rob(i) = Math.max(rob(i-2)+ cur , rob(i-1))
 // then we can create a method with nums, and i;
 // but it exceed stack and time consuming;
 // we can create an array to store the value;
 // yet it is still a bit worse;
 // that's why the following two solutions come from;


// Iterative + 2 variables (bottom-up)
var rob = function(nums) {
  if (nums.length == 0) return 0;
  let prev1 = 0;
  let prev2 = 0;
  nums.forEach(
    value => {
      const temp = prev1;
      prev1 = Math.max(prev2 + value, prev1);
      prev2 = temp;
    }
  )
  return prev1;
}
 // Iterative + memo (bottom-up)
var fourth = function(nums) {
  if (nums.length == 0) return 0;
  const memo = [];
  memo[0] = 0;
  memo[1] = nums[0];
  for ( i = 1; i < nums.length; i++) {
      const val = nums[i];
      memo[i+1] = Math.max(memo[i], memo[i-1] + val);
  }
  return memo[nums.length];
}

//bad step 1

var rob1 = function(nums) {
  return rob1(nums, nums.length - 1);
}
function rob1(nums,  i) {
  if (i < 0) {
      return 0;
  }
  return Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
}

var rob2 = function(nums) {
  const memo = []
  return rob1(nums, nums.length - 1, memo);
}
function rob2(nums,  i) {
  if (i < 0) {
      return 0;
  }
  if(!!memo[i]){
    return memo[i];
  }
  memo[i] = Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1, memo), memo)
  return  memo[i];
}