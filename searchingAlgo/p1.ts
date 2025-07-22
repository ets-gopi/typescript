// Given an array arr. The task is to find the largest element in the given array.

// Examples:

// Input: arr[] = [10, 20, 4]
// Output: 20
// Explanation: Among 10, 20 and 4, 20 is the largest.

// Input: arr[] = [20, 10, 20, 4, 100]
// Output: 100
function findMax(nums: number[]) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log(max);
}
findMax([0,-1,-1]);
