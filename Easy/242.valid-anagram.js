/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (50.88%)
 * Total Accepted:    303.2K
 * Total Submissions: 595.1K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// oneshot, 120ms;
var a = function(s, t) {
  if(s.length !== t.length) return false;
  const sArr = s.split("").sort();
  const tArr = t.split("").sort();

  for(i=0; i<sArr.length; i++){
    if(sArr[i] !== tArr[i]){
      return false;
    }
  }
  return true;
};

//this one is far more brilliant
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  //has an array which has 26 Os
  let counters = new Array(26).fill(0);
  
  for (let i = 0; i < s.length; i++) {
    //for one increase the character time
    counters[s.charCodeAt(i) - 97]++;
    //this one decrease;
    counters[t.charCodeAt(i) - 97]--;
  }
  //if true; it should be all 0;
  for (let i = 0; i < counters.length; i++) {
    // if(0) is false;;
    if (counters[i]) return false;
  }
  return true;
}
