// Given an array arr[], the task is to print every alternate element of the array starting from the first element.

// Examples:

// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

// Input: arr[] = [-5, 1, 4, 2, 12]
// Output: -5 4 12
function alter(nums: number[]) {
  for (let i = 0; i < nums.length; i = i + 2) {
    console.log(nums[i]);
  }
}
//alter([-5, 1, 4, 2, 12]);

// Given an array, arr of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.

// Input: arr[] = [1, 2, 3, 4], x = 3
// Output: 2
// Explanation: There is one test case with array as [1, 2, 3 4] and element to be searched as 3. Since 3 is present at index 2, the output is 2.

// Input: arr[] = [10, 8, 30, 4, 5], x = 5
// Output: 4
// Explanation: For array [10, 8, 30, 4, 5], the element to be searched is 5 and it is at index 4. So, the output is 4.

// Input: arr[] = [10, 8, 30], x = 6
// Output: -1
// Explanation: The element to be searched is 6 and its not present, so we return -1.

function linearSearch(nums: number[], searchVal: number): number {
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === searchVal) {
      index = i;
      break;
    }
  }
  return index;
}
//console.log(linearSearch([1, 2, 3, 4], 8));

// Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

// Note: The rightmost element is always a leader.

// Examples:

// Input: arr[] = [16, 17, 4, 3, 5, 2]
// Output: [17 5 2]
// Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.

// Input: arr[] = [1, 2, 3, 4, 5, 2]
// Output: [5 2]
// Explanation: 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.
function getLeaders(nums: number[]) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      let is = true;
      for (let j = i + 1; j < nums.length; j++) {
        if (!(nums[i] > nums[j])) {
          is = false;
          break;
        }
      }
      if (is) {
        arr.push(nums[i]);
      }
    }
  }
  arr.push(nums[nums.length - 1]);
  console.log(arr);
}
getLeaders([16, 17, 4, 3, 5, 2]);
