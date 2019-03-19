/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 *
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (39.39%)
 * Total Accepted:    74.9K
 * Total Submissions: 189.6K
 * Testcase Example:  '"abab"'
 *
 * Given a non-empty string check if it can be constructed by taking a
 * substring of it and appending multiple copies of the substring together. You
 * may assume the given string consists of lowercase English letters only and
 * its length will not exceed 10000.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abab"
 * Output: True
 * Explanation: It's the substring "ab" twice.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "aba"
 * Output: False
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "abcabcabcabc"
 * Output: True
 * Explanation: It's the substring "abc" four times. (And the substring
 * "abcabc" twice.)
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const set = new Set(s);
  if(s.length === 1) return false;
  if(set.size===1) return true;
  for(i=set.size; i<=s.length/2 ; i++ ){
    if(s.length % i !== 0){
      continue;
    }
    const time = s.length / i;
    let result = true;
    for(j=1; j< time; j++){
      if(s.slice(i*j, i*(j+1)) !== s.slice(0, i)){
        result = false;
        break;
      }
    }
    if(result) return true;
  }
  return false;
};

