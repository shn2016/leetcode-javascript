/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (36.68%)
 * Total Accepted:    188K
 * Total Submissions: 511.9K
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "foo", t = "bar"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * Note:
 * You may assume both s and t have the same length.
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const memo = {};
  const sArr = s.split("");
  const tArr = t.split("");

  for(i=0; i<sArr.length; i++){
    if(!memo[sArr[i]]){
      //if different value in s link to same value in t break;
      if(Object.values(memo).includes(tArr[i])) return false;;
      memo[sArr[i]] = tArr[i];
    }
    sArr[i] = memo[sArr[i]];
  }

  if(sArr.join("") === t) return true;
  return false;
};

