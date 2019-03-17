/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 *
 * https://leetcode.com/problems/number-of-segments-in-a-string/description/
 *
 * algorithms
 * Easy (36.64%)
 * Total Accepted:    52.2K
 * Total Submissions: 142.1K
 * Testcase Example:  '"Hello, my name is John"'
 *
 * Count the number of segments in a string, where a segment is defined to be a
 * contiguous sequence of non-space characters.
 * 
 * Please note that the string does not contain any non-printable characters.
 * 
 * Example:
 * 
 * Input: "Hello, my name is John"
 * Output: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
// do some research on regex;
var countSegments = function(s) {
  s = s.replace(/\s+/g,' ').trim();
  if(s.length===0) return 0;
  return s.split(" ").length;
};

