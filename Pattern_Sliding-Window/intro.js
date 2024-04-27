// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

const nums = [3,3,4,3,0]
const k = 3;

let arrMax=0;
let currMax=0;

if(nums.length<=1) return nums[0]

for(let i=0;i<k;i++){
    console.log(nums[i])
    currMax+=nums[i]
}


arrMax=currMax

console.log("inital arrmax",arrMax/3)


for(let i=k;i<nums.length;i++){
    currMax= currMax - nums[i-k] + nums[i]

    if(currMax>arrMax) arrMax=currMax
}

console.log(arrMax/4)

