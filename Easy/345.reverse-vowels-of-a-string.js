/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (40.82%)
 * Total Accepted:    143.9K
 * Total Submissions: 352.1K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */

//148ms
var first = function(s) {
  //get the vowels index and values;
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  const sArr = s.split("");

  //store the index and value of vowels;
  let indices = [];
  let values = [];

  for(i=0;i<sArr.length; i++){
    if(vowels.includes(sArr[i])){
      //take care of order here;
      indices.push(i);
      values.unshift(sArr[i]);
    }
  }

  //reverse the value back;
  for(j=0; j<indices.length; j++){
    sArr[indices[j]] = values[j];
  }
  return sArr.join("");
};

// the below one is retriving from double side..
const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

var reverseVowels = function(s) {
  let head = 0;
  let tail = s.length - 1;
  
  const str = s.split('');
  
  while (head < tail) {
    //this is to find the first vowel of each loop
    while (!vowels.has(str[head]) && head < tail) {
      head ++;
    }
    // last vowel
    while (!vowels.has(str[tail]) && head < tail) {
      tail --;
    }

    //reverse if they do exsit doubly;
    if (head < tail) {
      const temp = str[head];
      str[head] = str[tail];
      str[tail] = temp;
    }
    head ++;
    tail --;
  }
  
  return str.join(''); 
};
