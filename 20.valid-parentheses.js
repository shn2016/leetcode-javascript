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
 */
var isValid = function(s) {
  const brackets = ['(', ')', '{', '}', '[' ,']']
  const length = s.length;
  if(length%2 === 1) return false;

  let result = true;
  let leftIndexArray = [];

  for(i = 0; i < length; ){
    const index = brackets.indexOf(s[i]);

    console.log(i);
    if(index === -1){  
      result = false; 
      break;   
    }
    if(index % 2 === 1){
      //in case the first one doesn't right
      if(leftIndexArray.length === 0){
        result = false; 
        break;
      }

      //check the expected one match the real one or not.
      const expectedArray = [];
      const rightIndexArray = getRightIndexArray(i, leftIndexArray.length, brackets, s);
      const leftIndexArrayLength = leftIndexArray.length;
      for(y=0; y<leftIndexArrayLength; y++){
        let token = leftIndexArray.pop()+1;
        expectedArray.push(token);
      };
      //[1] === [1]  false;
      if(expectedArray.toString() !== rightIndexArray.toString()){
        result = false; 
        break;
      }
      i += leftIndexArrayLength;
      leftIndexArray = []; 
      //empty array, jump to the next i validate next few chars.
      continue;
    }

    leftIndexArray.push(index);
    i++;
  }
  if(leftIndexArray.length > 0) result = false;
  return result;
};

function getRightIndexArray( i, length, brackets, s){
  let rightIndexArray = [];
  for( y = i; y < length + i; y++){
    const index = brackets.indexOf(s[y]);
    rightIndexArray.push(index);
  }
  return rightIndexArray;
}


// made mistake for considering "([]){}"  and "([])" solely
// they could be combined and I cannot simply use for loop 
// and if condition all the time.
