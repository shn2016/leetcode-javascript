/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (28.50%)
 * Total Accepted:    163.4K
 * Total Submissions: 573.3K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "A"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 28
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 701
 * Output: "ZY"  = 26*26 + 25
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  //while 1 mean A so 26 means Z
  // can use charcode, where 65 is A and 90 is Z
  // so there is 64 difference can be added;
  let left = 0;
  let saved = [];
  
  //can't simply use base-26 as 52 = AZ rather than B_; 
  // should always consider there isn't a 0;
  transfer(saved,n)

  const result = saved.map(element => element + 64)
  return String.fromCharCode(...result);
};

function transfer(saved,n){
  if(n>26){
    if(n%26===0){
      //sonsider there is no 0 exsit
      saved.unshift(26);
      n = Math.trunc(n/26) -1;
    } else {
      saved.unshift(n%26);
      n = Math.trunc(n/26);
    }
    transfer(saved,n);
  } else{
    // save the  <= 26;
    saved.unshift(n);
  }
}
