/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (46.71%)
 * Total Accepted:    179.7K
 * Total Submissions: 384K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * 
 * 
 * Note:
 * 
 * 
 * Each element in the result should appear as many times as it shows in both
 * arrays.
 * The result can be in any order.
 * 
 * 
 * Follow up:
 * 
 * 
 * What if the given array is already sorted? How would you optimize your
 * algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is
 * better?
 * What if elements of nums2 are stored on disk, and the memory is limited such
 * that you cannot load all elements into the memory at once?
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// this one is similar to 349; but requires duplciated value;
// hence set cannot be used;
var intersect = function(nums1, nums2) {
  // keep the indices used in nums2
  let nums2Indices = [];
  // keep result;
  let result = [];

  for(i=0; i<nums1.length; i++){
    for(j=0; j<nums2.length; j++){
      if(nums1[i] === nums2[j]){
        //if this j has not been used before
        if(!nums2Indices.includes(j)){
          // push value and index to these two arrays
          result.push(nums1[i]);
          nums2Indices.push(j);
          //break the nums2's loop here
          break;
        }
      }
    }
  }
  return result;
};

// I was thinking this type of question is same with intersection of two linked list;
// but it looks like as long as there is one value is same, it is intersection;
// no matter the next one same or not;
// what if there are multiple values intersect and they are not consistant
// are they really intersections?

var intersect = function(nums1, nums2) {
  // create an object to save frequency of characters;
  let map={};
  
  //make nums1 to be the shorter one;
  if(nums2.length<nums1.length){
    [nums1, nums2]=[nums2, nums1];
  }
  
  // push values with frequency;
  for(var num of nums1){
    // here if map[num] not exist it will be 0;
    map[num]=(map[num]||0)+1;
  }
  
  // if the num in nums2 exist in map, reduce the values in map and consider it is intersection.
  return nums2.filter(num=>{
    if(map[num]>0){
      map[num]--;
      return true;
    }
  });
};


//[nums1, nums2]=[nums2, nums1];
// (map[num]||0)