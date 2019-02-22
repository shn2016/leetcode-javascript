/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.35%)
 * Total Accepted:    255.8K
 * Total Submissions: 650K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 * Reminder: this question is extremly confusing.
 */
var countAndSay = function(n) {
  let term ={
    1: '1',
    2: '11',
    3: '21',
    4: '1211',
    5: '111221',
    }
  if(n<5) return term[n];
  let result = term[5];
  for(i = 6; i <= n; i++){
    result = getTheSequence(result);
  }
  return result;
};

// even different function, the i confuse each other..

function getTheSequence(s){
  let sequence = "";
  let number = s[0];
  let time = 1;

  for(y=1; y<s.length; y++){
    if(s[y] !== number){
      sequence += time + "" + number;
      number = s[y];
      time = 1;
    } else{
      time++;
    }
    if( y=== s.length-1){
      sequence += time + "" + number;
    }
  }
  return sequence ;
}
