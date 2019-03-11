/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.56%)
 * Total Accepted:    490.2K
 * Total Submissions: 1.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */

// The logic is find every palindrome, get its length and compare to the biggest one;
// the main issue is time limit exceeded, which mean it cost too much
// 520ms;
var longestPalindrome = function(s) {

  let max = "";
  for(i=0; i<s.length; i++){
    for(j=s.length-1; j>=0; j--){
      let str = s.substring(i,j+1);

      if(isPalindrome(str)){
        max = (max.length > str.length)? max : str;
        break;
      }
    }
    if(s.length - i <= max.length) {
      break;
    }
  }
  return max;
};

function isPalindrome(string){
  if(string.length === 1) return true;
  let head = 0;
  let tail = string.length-1;
  while(tail>=head){
    if(string.charAt(tail) !== string.charAt(head)){
      return false;
    }
    head++;
    tail--;
  }
  return true;
}
