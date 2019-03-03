/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 *
 * https://leetcode.com/problems/detect-capital/description/
 *
 * algorithms
 * Easy (52.24%)
 * Total Accepted:    78.7K
 * Total Submissions: 150.7K
 * Testcase Example:  '"USA"'
 *
 * 
 * Given a word, you need to judge whether the usage of capitals in it is right
 * or not.
 * 
 * 
 * 
 * We define the usage of capitals in a word to be right when one of the
 * following cases holds:
 * 
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital if it has more than one
 * letter, like "Google".
 * 
 * Otherwise, we define that this word doesn't use capitals in a right way.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: "USA"
 * Output: True
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "FlaG"
 * Output: False
 * 
 * 
 * 
 * Note:
 * The input will be a non-empty word consisting of uppercase and lowercase
 * latin letters.
 * 
 */
/**
 * @param {string} word
 * @return {boolean}
 */

 //  ✔ 550/550 cases passed (92 ms)

var detectCapitalUse = function(word) {
  const arr = word.split("");
  console.log(arr);

  const booleanArr = arr.map(char =>{
    if(char === char.toUpperCase()){
      return 1;
    } else {
      return 0;
    }
  })
  if( booleanArr.every(value => value === 1) 
  || booleanArr.every(value => value === 0)){
    return true;
  }

  if(booleanArr[0]===1){
    booleanArr.shift();
    if(booleanArr.every(value => value === 0)) return true;
    return false;
  }

  return false;
};

