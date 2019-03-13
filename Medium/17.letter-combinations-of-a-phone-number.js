/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (40.34%)
 * Total Accepted:    353.3K
 * Total Submissions: 871.2K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  //should create a object for this.
  const map = [];
  map["1"] = [];
  map["2"] = ["a","b","c"]
  map["3"] = ["d","e","f"]
  map["4"] = ["g","h","i"]
  map["5"] = ["j","k","l"]
  map["6"] = ["m","n","o"]
  map["7"] = ["p","q","r","s"]
  map["8"] = ["t","u","v"]
  map["9"] = ["w","x","y","z"]

  digits = digits.toString().split("");
  let result = [];
  for(i=0; i<digits.length; i++){
    // make it generic;
    getCombinations(map[digits[i]], result);
  }
  return result;
};

// got draw some map for this, otherwise will got confused by my
// len and cur..
function getCombinations(digit, result){
  //here digit is map[digits[i]];
  const len = digit.length;

  //if no result before, make it 1 to proceed;
  const cur = (result.length === 0)? 1 : result.length;
  for(k=0;k<cur; k++){
    // for cur = 1 condition;
    // and need to create a dummy otherwise the loop will replace the new value;
    const dummy = (!result[k])? "": result[k];
    for(j=0; j<len; j++){
      //copy the result[k] and add new number posibility one by one;
      result[k+j*cur] = dummy + digit[j];
    }
  }
}


/* 
  exmaple 2,3
  I will start with 0;

  2: where result= [] ;k = 0; result 0 , 1 , 2 = a b c;

  then there result = [a,b,c];
  3: cur is 3;
  the map[3] = d e f;

  we use dummy = result[0] = a;
  then the new result[0 + 0 * 3] = a + d
  result[0 + 1 * 3] = a + e
  result[0 + 2 * 3] = a + e
  so we have result[2] result[5] result [8]
  and result[1] result[4] result[7]
*/
