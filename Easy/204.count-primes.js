/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.20%)
 * Total Accepted:    214.7K
 * Total Submissions: 759.6K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */

// A number can only be divided by 1 and itself is prime number.
// it could be better if I can find somewhere to store the primes I tested.

// 20/20 cases passed (800 ms)
// Your runtime beats 24.93 % of javascript submissions
// Your memory usage beats 96.97 % of javascript submissions (34.1 MB)
var first = function(n) {
  let time = 0;
  for(i=2; i<n; i++){
    if(isPrime(i)){
      time++;
    }
  }
  return time;
};

//feels like a misuse when I replace y with i..
// the original i passed in and didn't become number ?
function isPrime(number){
  let result = true;

  //there is no 1 and number itself;
  //use sqrt to avoid unnecessary counting;
  for(y=2; y<=Math.sqrt(number);y++){
    if(number % y === 0){
      result = false;
      break;
    }
  }

  return result;
}

//and all the non prime number can be mutiplied by prime numbers;

//228 ms
var countPrimes = function(n) {
  let time = 0;
  let collection = [];
  for(i=2; i<n; i++){
    if(isPrimeNumber(i, collection)){
      collection.push(i);
      time++;
    }
  }
  return time;
};
function isPrimeNumber(number,collection){
  let result = true;

  for(y=0; y< collection.length && collection[y]<= Math.sqrt(number); y++){
    if(number % collection[y] === 0 ){
      result = false;
      break;
    }
  }

  return result;
}