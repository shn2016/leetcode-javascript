/*
 * @lc app=leetcode id=521 lang=javascript
 *
 * [521] Longest Uncommon Subsequence I 
 *
 * https://leetcode.com/problems/longest-uncommon-subsequence-i/description/
 *
 * algorithms
 * Easy (56.10%)
 * Total Accepted:    43.8K
 * Total Submissions: 78K
 * Testcase Example:  '"aba"\n"cdc"'
 *
 * 
 * Given a group of two strings, you need to find the longest uncommon
 * subsequence of this group of two strings.
 * The longest uncommon subsequence is defined as the longest subsequence of
 * one of these strings and this subsequence should not be any subsequence of
 * the other strings.
 * 
 * 
 * 
 * A subsequence is a sequence that can be derived from one sequence by
 * deleting some characters without changing the order of the remaining
 * elements. Trivially, any string is a subsequence of itself and an empty
 * string is a subsequence of any string.
 * 
 * 
 * 
 * The input will be two strings, and the output needs to be the length of the
 * longest uncommon subsequence. If the longest uncommon subsequence doesn't
 * exist, return -1.
 * 
 * 
 * Example 1:
 * 
 * Input: "aba", "cdc"
 * Output: 3
 * Explanation: The longest uncommon subsequence is "aba" (or "cdc"), because
 * "aba" is a subsequence of "aba", but not a subsequence of any other strings
 * in the group of two strings. 
 * 
 * 
 * 
 * Note:
 * 
 * Both strings' lengths will not exceed 100.
 * Only letters from a ~ z will appear in input strings. 
 * 
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

 //60ms.
var first = function(a, b) {
  //differenciate the long one and short one, so make it easier.
  const long = (a.length >= b.length)? a : b;
  const short = (a.length >= b.length)? b : a;
  let result = -1;

  //normally when longer one is definately uncommon,
  // this process happens when their length is equal, 
  // decrease the size to make it faster
  for (i = 0; i < long.length; i++) {
    for (j = long.length; j > i; j--) {
      const sub = long.slice(i,j);
      if(!short.includes(sub)){
        result = Math.max(sub.length, result);
        break;
      }
    }
    // set this to avoid extra calculation.
    if(result >= long.length - i-1){
      break;
    }
  }

  return result;
};

var findLUSlength = function(a, b) {
  if(a.length !== b.length){
    return (a.length > b.length)? a.length : b.length;
  }

  let result = -1;
  for (i = 0; i < a.length; i++) {
    for (j = a.length; j > i; j--) {
      const sub = a.slice(i,j);
      if(!b.includes(sub)){
        result = Math.max(sub.length, result);
        break;
      }
    }

    if(result >= a.length - i-1){
      break;
    }
  }

  return result;
}