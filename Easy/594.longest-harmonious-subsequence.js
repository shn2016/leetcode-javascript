/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 *
 * https://leetcode.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (43.01%)
 * Total Accepted:    33.6K
 * Total Submissions: 77.8K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * We define a harmonious array is an array where the difference between its
 * maximum value and its minimum value is exactly 1.
 * 
 * Now, given an integer array, you need to find the length of its longest
 * harmonious subsequence among all its possible subsequences.
 * 
 * Example 1:
 * 
 * Input: [1,3,2,2,5,2,3,7]
 * Output: 5
 * Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 * 
 * 
 * 
 * Note:
 * The length of the input array will not exceed 20,000.
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = {};
  nums.forEach(num => {
    map[num] = (map[num] | 0) + 1;
  })

  const keys = Object.keys(map);
  const result = [];
  for( let i = 0; i < keys.length; i++){
    const max = parseInt(keys[i]) + 1;
    if(!!map[max]){
      const sum = map[keys[i]] + map[max];
      result.push(sum);
    }
  }

  return Math.max(...result, 0);
};

