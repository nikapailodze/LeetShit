// Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. If no such pair exists return [-1, -1].

// Example 1:
//         L           R
// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
// Example 2:

// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11





///////solution 1///////
// const pairWithTarget = (arr, target) => {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let sum = arr[left] + arr[right]

//         if (sum < target) {
//             left += 1
//         } else if (sum > target) {
//             right -= 1
//         }

//         if (sum == target) {
//             return[left, right]

//         }
//     }

//     return [-1,-1]
// }
//          L   R
// const arr = [3,2,4];
// let target = 6;



// console.log(pairWithTarget(arr,target))



////////solution 2/// with hash table


const pairWithTarget = (arr, target) => {
    const nums = {}

    for (let i = 0; i < arr.length; i++) {

        if (target - arr[i] in nums) {
            console.log(target - arr[i] in nums)
            return [nums[target - arr[i]], i]
        }

        nums[arr[i]] = i
    }

    return [-1, -1]
}
const arr = [3, 2, 4];
let target = 6;

console.log(pairWithTarget(arr, target))