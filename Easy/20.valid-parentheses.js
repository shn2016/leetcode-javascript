/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.77%)
 * Total Accepted:    507.3K
 * Total Submissions: 1.4M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"  "(([]){})" "([]){}""
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 * the idea is to find first right brackets
 * then check its left closed or not
 * if no return false and break
 * if yes remove this part from string and cotinue.
 */
var isValid = function(s) {
  const brackets = ['(', ')', '{', '}', '[' ,']']
  const length = s.length;
  if(length%2 === 1) return false;

  let result = true;
  while(s.length>0){
    for(i = 0; i < s.length; i++ ){
      const index = brackets.indexOf(s[i]);
      if(index % 2 === 1){
        if( (s[i-1] === undefined) | (brackets.indexOf(s[i-1]) !== index - 1) ){ 
          result = false; 
          break;
        }
        s = s.substring(0,i-1)+s.substring(i+1,s.length);
        break;
      }
      if(i === s.length - 1){ 
        result = false;      
        break;
      }
    }
    if(result === false){ break;}
  }
  return result;
}

// made mistake for considering "([]){}"  and "([])" solely
// they could be combined and I cannot simply use for loop 
// and if condition all the time.
