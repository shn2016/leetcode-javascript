/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 *
 * https://leetcode.com/problems/student-attendance-record-i/description/
 *
 * algorithms
 * Easy (45.18%)
 * Total Accepted:    48.2K
 * Total Submissions: 106.7K
 * Testcase Example:  '"PPALLP"'
 *
 * You are given a string representing an attendance record for a student. The
 * record only contains the following three characters:
 * 
 * 
 * 
 * 'A' : Absent. 
 * 'L' : Late.
 * ⁠'P' : Present. 
 * 
 * 
 * 
 * 
 * A student could be rewarded if his attendance record doesn't contain more
 * than one 'A' (absent) or more than two continuous 'L' (late).    
 * 
 * You need to return whether the student could be rewarded according to his
 * attendance record.
 * 
 * Example 1:
 * 
 * Input: "PPALLP"
 * Output: True
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "PPALLL"
 * Output: False
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  const map = {};
  map["L"] = 0;
  let consistantLate = 0;
  for(i=0; i<s.length; i++){
    const char = s.charAt(i);
    if(char === "L"){
      consistantLate++;
      continue;
    }
    map[char] = (map[char] || 0) + 1;
    if(consistantLate !== 0){
      map["L"] = Math.max(map["L"], consistantLate);
      consistantLate = 0;
    }
  }
  if(consistantLate !== 0){
    map["L"] = Math.max(map["L"], consistantLate);
  }
  if(map["A"] > 1) return false;
  if(map["L"] > 2) return false;
  return true;
};

