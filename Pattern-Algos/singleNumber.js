// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4


const nums =[2,2,1];

let frequency={}

for(let i=0;i<nums.length;i++){
    let elemet=nums[i]
    frequency[elemet]=(frequency[elemet] || 0)+1
}

for(let key in frequency){
    if(frequency[key]==1) return key
}

console.log(frequency)