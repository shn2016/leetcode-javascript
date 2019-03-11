/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (42.54%)
 * Total Accepted:    325.8K
 * Total Submissions: 760.1K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * 
 * 
 * 
 * 
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49. 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */

 // check the pic in web first for better udnerstanding;

 // worst way; more time but save memory;
 // 992 ms
var forLoop = function(height) {
 let max = 0;
 for(i=0; i<height.length-1; i++){
   for(j=height.length-1; j>i; j--){
     let top = (height[i] > height[j])? height[j] : height[i];
     let area = top * (j -i);
     max = (max > area)? max : area;
   }
 }   

 return max;
};

//64 ms;
var maxArea = function(height) {
  let max = 0;
  let head = 0;
  let tail = height.length - 1;
  
  while(tail > head) {
    const h = Math.min(height[head], height[tail]);
    const w = tail - head;
    
    max = Math.max(max, h * w);
    
    // move the smaller one to see if there some large height;
    if (height[head] > height[tail]) {
      tail--;
    } else if (height[tail] > height[head]) {
      head++;
    } else {
      head++;
      tail--;
    }
  }
  return max;
};