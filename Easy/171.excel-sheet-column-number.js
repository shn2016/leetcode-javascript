/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (50.83%)
 * Total Accepted:    207.3K
 * Total Submissions: 407.8K
 * Testcase Example:  '"A"'
 *
 * Given a column title as appear in an Excel sheet, return its corresponding
 * column number.
 * 
 * For example:
 * 
 * 
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "A"
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "AB"
 * Output: 28
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "ZY"
 * Output: 701
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  // reverse the question of 168
  const arr = [];
  //get charcode of each character first
  for(i=0; i<s.length;i++){
    arr.push(s.charCodeAt(i));
  }
  
  //reduce 64 to match rules of this question;
  const numberArr = arr.map(element => element - 64);
  const result = numberArr.reduce(
    (acc, cur, index) => acc + cur * Math.pow(26, numberArr.length - index -1)
    , 0
  )
  // if no initial value is used the first value of array will be used;
  return result;
};

