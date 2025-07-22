// Given an array of size n, the task is to check if it is sorted in ascending order or not.
// Equal values are allowed in an array and two consecutive equal values are considered sorted.

// Examples:

// Input: arr[] = [20, 21, 45, 89, 89, 90]
// Output: Yes

// Input: arr[] = [20, 20, 45, 89, 89, 90]
// Output: Yes

// Input: arr[] = [20, 20, 78, 98, 99, 97]
// Output: No
function isSorted(nums: number[]) {
  let isSorted = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      isSorted = false;
      break;
    }
  }
  console.log(isSorted);
}
//isSorted([20, 21, 20]);
// Remove duplicates from Sorted Array
// Last Updated : 19 Nov, 2024
// Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements appear at the beginning in sorted order. Additionally, return the length of this distinct sorted subarray.

// Note: The elements after the distinct ones can be in any order and hold any value, as they don't affect the result.

// Examples:

// Input: arr[] = [2, 2, 2, 2, 2]
// Output: [2]
// Explanation: All the elements are 2, So only keep one instance of 2.

// Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
// Output: [1, 2, 3, 4, 5]

// Input: arr[] = [1, 2, 3]
// Output: [1, 2, 3]
// Explanation : No change as all elements are distinct.
function removeDup(nums: number[]) {
  let k = 1;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[index - 1]) {
      nums[k] = nums[index];
      k = k + 1;
    }
  }
  console.log(k);
}
//removeDup([1, 2, 2, 3, 4, 4, 4, 5, 5]);
// Given an array arr[], the task is to generate all the possible subarrays of the given array.

// Examples:

// Input: arr[] = [1, 2, 3]
// Output: [ [1], [1, 2], [2], [1, 2, 3], [2, 3], [3] ]

// Input: arr[] = [1, 2]
// Output: [ [1], [1, 2], [2] ]

function generateSubArrays(nums: number[]) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push([nums[i]]);
  }
  console.log(res);
}
generateSubArrays([1, 2, 3]);

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
function compareSt(s1: string, s2: string) {
  let maxLen = Math.max(s1.length, s2.length),
    i = 0,
    res = '';
  while (i < maxLen) {
    if (s1[i] === s2[i]) {
      res = res + s1[i];
    } else {
      break;
    }
    i++;
  }
  return res;
}
function findcommomprefix(values: string[]) {
  let prefix = values[0];
  for (let i = 1; i < values.length; i++) {
    prefix = compareSt(prefix, values[i]);
    if (prefix === '') {
      break;
    }
  }
  console.log(prefix);
}
// findcommomprefix(['flower', 'flow', 'flight']);
