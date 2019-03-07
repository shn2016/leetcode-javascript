/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (53.58%)
 * Total Accepted:    425.4K
 * Total Submissions: 793K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Note:
 * 
 * 
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  //create this t to count the number of zeros, so avoid getting into 0~ loop at the end;
  let t = 0;
  
  for(i=0; i<nums.length - t;){
    //find a 0, delete it and put into back;
    if(nums[i]===0){
      nums.splice(i,1);
      nums.push(0);
      t++;
    } else{
      i++;
    }
  }
};

// Failed; This doesn't work in leetcode but when it is used in Chrome, it is good.
//for example: (a,b) return a -b means sort from small to large;
// so a - b = 0 remain; a - b > 0, a put right; a - b < 0, a still left;
// nums.sort((a,b)=> { 
//   // remain
//   if(a!==0 && b!==0) return 0; 
//   if(a===0 && b===0) return 0; 
//   //a move right;
//   if(a===0 && b!==0) return 1; 
//   //a move left;
//   if(a!==0 && b===0) return -1;
// })