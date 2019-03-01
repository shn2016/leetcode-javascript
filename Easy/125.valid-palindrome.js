/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (30.18%)
 * Total Accepted:    321.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  //regEx that get only alphanumeric characters, and set in lower case;
  let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  const length = str.length;
  const first = str.slice(0, Math.floor(length/2));
  //change string to array to reverse order, then put back to string and then get the half part
  const second = str.split("").reverse().join("").slice(0, Math.floor(length/2));

  if(first === second){
    return true;
  }

  return false;
};

