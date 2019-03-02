/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (51.45%)
 * Total Accepted:    348.4K
 * Total Submissions: 676.9K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const result = nums.reduce(
    (acc, cur) =>{
      if(!acc[cur]){
        acc[cur] =1;
      } else{
        acc[cur]++;
      }
      return acc;
    },
    {}//initialize it as a object
  )
  //get the max value;
  const major = Math.max.apply(null, Object.values(result));

  //return the key which has max value;
  return Object.keys(result).find(key => result[key] === major);
};

