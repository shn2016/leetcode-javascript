/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.91%)
 * Total Accepted:    402.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // return empty when there is nothing
  if(strs.length === 0) return "";

  //start with the min length string, then decrease to its substring
  const lengths = strs.map(x => x.length);
  const min = Math.min.apply(null, lengths);
  const minIndex = lengths.indexOf(min);
  const minString = strs[minIndex];
  let result = '';

  for(i=minString.length; i>=0; i--){
    const prefix = minString.substring(0,i);
    if(strs.every(str => str.substring(0,i) === prefix)){
      result = prefix;
      break;
    }
  }

  return result;
};
