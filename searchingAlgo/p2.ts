// Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. This array represents a permutation of the integers from 1 to n with one element missing. Find the missing element in the array.

// Examples:

// Input: arr[] = [8, 2, 4, 5, 3, 7, 1]
// Output: 6
// Explanation: All the numbers from 1 to 8 are present except 6.

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: Here the size of the array is 4, so the range will be [1, 5]. The missing number between 1 to 5 is 4
function isExist(val: number, arr: number[]) {
  let res = false;
  for (const num of arr) {
    if (num === val) {
      res = true;
      break;
    }
  }
  return res;
}
function findMissingNum(nums: number[]) {
  const len = nums.length;
  let found: null | number = null;
  for (let i = 1; i <= len + 1; i++) {
    const res = isExist(i, nums);
    if (res) {
      continue;
    } else {
      found = i;
      break;
    }
  }
  console.log(found);
}
findMissingNum([2,1,3,5]);
