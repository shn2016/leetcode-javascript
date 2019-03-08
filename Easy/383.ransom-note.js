/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (49.24%)
 * Total Accepted:    104.4K
 * Total Submissions: 211.6K
 * Testcase Example:  '"a"\n"b"'
 *
 * 
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom 
 * note can be constructed from the magazines ; otherwise, it will return
 * false. 
 * 
 * 
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 * 
 * 
 * Note:
 * You may assume that both strings contain only lowercase letters.
 * 
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

  // create an array with all the letters in magazins with their frequency;
  const magazineArr = magazine.split('');
  let map = {};
  magazineArr.forEach(letter =>{
    map[letter] = (map[letter] | 0) +1;
  });

  // go for ransomNote, if a letter not in the map, or appeared more time;
  // the result will be false;
  let result = true;
  ransomNote.split('').forEach(letter => {
    if(!map[letter]) {
      result = false;
    } else{
      map[letter]--;
    }
  });
  return result;
};

