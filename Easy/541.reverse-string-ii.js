/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 *
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (45.02%)
 * Total Accepted:    55.8K
 * Total Submissions: 123.8K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 
 * Given a string and an integer k, you need to reverse the first k characters
 * for every 2k characters counting from the start of the string. If there are
 * less than k characters left, reverse all of them. If there are less than 2k
 * but greater than or equal to k characters, then reverse the first k
 * characters and left the other as original.
 * 
 * 
 * Example:
 * 
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 * 
 * 
 * 
 * Restrictions: 
 * 
 * ⁠The string consists of lower English letters only.
 * ⁠Length of the given string and k will in the range [1, 10000]
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = "";
  for(i=0; i < s.length ; i += 2 * k){
    let j = 0;
    let reverse = "";
    for(; (j < k) && (i + j < s.length) ; j++){
      reverse = s[i+j] + reverse;
    }
    result += reverse;
    for(; (j < 2 * k) && (i + j < s.length) ; j++){
      result += s[i+j]
    }
  }
  return result;
};

