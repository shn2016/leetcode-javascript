/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 *
 * https://leetcode.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (61.65%)
 * Total Accepted:    83.8K
 * Total Submissions: 135.7K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * Given a List of words, return the words that can be typed using letters of
 * alphabet on only one row's of American keyboard like the image
 * below.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 * 
 * 
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const row1 =  new Set(['q','w','e','r','t','y','u','i','o','p'])
  const row2 =  new Set(['a','s','d','f','g','h','j','k','l']);
  const row3 =  new Set(['z','x','c','v','b','n','m']);
  const result = [];
  for(i=0; i<words.length; i++){
    if(checkRules(words[i].toLowerCase().split(""), row1, row2, row3)) result.push(words[i]);
  }
  return result;
};

function checkRules(array, row1, row2, row3) {
  if(row1.has(array[0])) return checkRule(array, row1);
  if(row2.has(array[0])) return checkRule(array, row2);
  if(row3.has(array[0])) return checkRule(array, row3);

}

function checkRule(array, row){
  for(j=1; j<array.length; j++) {
    if(!row.has(array[j])) return false;
  }
  return true;
}
