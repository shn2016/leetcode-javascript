/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 *
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (34.67%)
 * Total Accepted:    184.3K
 * Total Submissions: 530.9K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * Given an array of integers and an integer k, find out whether there are two
 * distinct indices i and j in the array such that nums[i] = nums[j] and the
 * absolute difference between i and j is at most k.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 96ms, and has too many lines.

//the idea is has a nums copy which is original,
// then check weather there is indices of same value,
// their difference is <=k;
// as long as there is one, no matter there are some not;
var a = function(nums, k) {
  const numsCopy = [].concat(nums);
  nums.sort((a,b) => a-b);
  let prev = nums[0];
  for(i=1; i<nums.length; i++){
    if(prev === nums[i]){
      const indices = [];
      while(numsCopy.indexOf(prev) !== -1){
        indices.push(numsCopy.indexOf(prev));
        delete numsCopy[numsCopy.indexOf(prev)];
      }
      let min = +Infinity;
      for(y=1; y<indices.length; y++){
        min = Math.min(min, indices[y]-indices[y-1])
      }
      if(min<=k) return true;
    }
    prev = nums[i];
  }
  return false;
}

var containsNearbyDuplicate = function(nums, k) {
  if(nums.length <= 1 || k < 1)
  {
      return false;
  }
  var map = {};
  for(var i=0; i<nums.length; i++)
  {
    if(map[nums[i]] !== undefined)
    {
      return true;
    }
    else 
    {
      //whenever there is i>=k, the values before wont satisfy the at most k requirement any morel
      if(i - k >=0)
      {
        //here we already has i, while there is no match for nums[i-k], so delete it.
        map[nums[i-k]] = undefined;
      }
      map[nums[i]] = true;
    }
  }
  return false;
};
//this one will have time limit exceeded when nums too large
// var wrong = function(nums, k) {
//   for(i=0;i<nums.length;i++){
//     for(j=1;j<=k;j++){
//       if(nums[i+j]===undefined) return false;
//       if(nums[i]=== nums[i+j]) return true;
//     }
//   }
//   return false;
// };

