/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (27.93%)
 * Total Accepted:    824.4K
 * Total Submissions: 2.9M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */

 // 96 ms, beats 88.43;
 // quite a suprise as 10 months ago I had no clue with this;
var lengthOfLongestSubstring = function(s) {
  // initialize to keep the max;
  let max = 0; // the biggest length;

  let store = [];
  for(i=0; i<s.length; i++){
    //if the char exists, need to remove and count length to compare;
    if(store.includes(s[i])){
      max = (max > store.length)? max : store.length;
      store = store.slice(store.indexOf(s[i])+1);
    } 
      store.push(s[i]);
  }
  // the final step;
  max = (max > store.length)? max : store.length;
  return max;
};

