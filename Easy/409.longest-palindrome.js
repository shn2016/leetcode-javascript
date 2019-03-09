/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 *
 * https://leetcode.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (47.40%)
 * Total Accepted:    89.4K
 * Total Submissions: 188.3K
 * Testcase Example:  '"abccccdd"'
 *
 * Given a string which consists of lowercase or uppercase letters, find the
 * length of the longest palindromes that can be built with those letters.
 * 
 * This is case sensitive, for example "Aa" is not considered a palindrome
 * here.
 * 
 * Note:
 * Assume the length of given string will not exceed 1,010.
 * 
 * 
 * Example: 
 * 
 * Input:
 * "abccccdd"
 * 
 * Output:
 * 7
 * 
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */

// so we count the frequency of each char, when they bigger than two, 
// they can be used for a palindrome;
var longestPalindrome = function(s) {
  // hash map; char time;
  let map = {};
  s.split('').forEach(char => {
    map[char] = (map[char] | 0) + 1;
  });

  //get array with frequency;
  const values = Object.values(map);
  let count = 0;
  let sum = 0;
  for(i=0; i<values.length; i++){
    if(values[i]>=2){
      // just wanna keep it even;
      count += Math.floor(values[i]/2) * 2;
    }
    sum += values[i];
  }
  // when there sum is more, they could add one more;
  if(sum > count) count +=1;
  return count;
};

