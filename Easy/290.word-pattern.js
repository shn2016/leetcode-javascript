/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (34.51%)
 * Total Accepted:    131.2K
 * Total Submissions: 379.8K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * 
 * Example 4:
 * 
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 * 
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters separated by a single space.
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

//56ms 
var wordPattern = function(pattern, str) {
  // create an array to compare;
  const array =  str.split(" ");
  // the length has to match
  if(pattern.length !== array.length) return false;

  // create an object to store value;
  let map = {};
  for(i=0; i<array.length;i++){

    //if key doesn't exist
    if(!map[pattern[i]]){

      // but the value is given before;
      if(Object.values(map).includes(array[i])){
        return false;
      }

      //crete key with value;
      map[pattern[i]] = array[i];
    } else{

      // has the value, but it doesn't match the str.
      if(map[pattern[i]] !== array[i]){
        return false;
      }
    }
  }
  return true;
};

