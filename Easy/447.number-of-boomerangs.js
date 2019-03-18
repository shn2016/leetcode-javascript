/*
 * @lc app=leetcode id=447 lang=javascript
 *
 * [447] Number of Boomerangs
 *
 * https://leetcode.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Easy (49.13%)
 * Total Accepted:    51.7K
 * Total Submissions: 104.5K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * Given n points in the plane that are all pairwise distinct, a "boomerang" is
 * a tuple of points (i, j, k) such that the distance between i and j equals
 * the distance between i and k (the order of the tuple matters).
 * 
 * Find the number of boomerangs. You may assume that n will be at most 500 and
 * coordinates of points are all in the range [-10000, 10000] (inclusive).
 * 
 * Example:
 * 
 * Input:
 * [[0,0],[1,0],[2,0]]
 * 
 * Output:
 * 2
 * 
 * Explanation:
 * The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
 * 
 * 
 */
/**
 * @param {number[][]} points
 * @return {number}
 */

//  this time get the distance and then check if they are equal or not;
var numberOfBoomerangs = function(points) {
  if(points.length<3) return 0;
  const map = {};
  let count = 0;
  for(i=0 ;i<points.length; i++){
    map[i]={};
    for(j=0; j<points.length; j++){
      if(j===i && j !== (points.length -1)) j++;
      const distance = getDistance(points[i], points[j]);
      map[i][distance] = ( map[i][distance] || 0) + 1;
    }
    Object.values(map[i]).forEach(value => {
      if(value > 1){
        count += (2 * getNumber(value));
      }
    });
  }

  return count;
}
function getNumber(num){
  let result = 0;
  for(d=1; d<num; d++){
    result += d;
  }
  return result;
}
function getDistance(a,b){
  return Math.pow(a[0]-b[0], 2) + Math.pow(a[1]-b[1], 2);
}

/*
3352ms;
var numberOfBoomerangs = function(points) {
  if(points.length<3) return 0;

  let count = 0;
  for(i=0; i<points.length-2; i++){
    for(j=i+1; j<points.length-1;j++){
      for(k=j+1; k<points.length;k++){
        const result = isBoomerangs(points[i], points[j], points[k]);
        count += result;
      }
    }
  }
  return count;
};

function isBoomerangs(a, b, c){
  let num = 0;
  if((Math.pow(a[0]-b[0], 2) + Math.pow(a[1]-b[1], 2) )
    === (Math.pow(c[0]-b[0], 2) + Math.pow(c[1]-b[1], 2))) 
    num += 2;
  if((Math.pow(b[0]-a[0], 2) + Math.pow(b[1]-a[1], 2) )
    === (Math.pow(c[0]-a[0], 2) + Math.pow(c[1]-a[1], 2)))
    num += 2;
  if((Math.pow(a[0]-c[0], 2) + Math.pow(a[1]-c[1], 2) )
    === (Math.pow(b[0]-c[0], 2) + Math.pow(b[1]-c[1], 2)))
    num += 2;
  return num;
}

*/
