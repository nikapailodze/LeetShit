// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

const frequency={}
    const nums =
    [1,2,3];
    for(let i=0;i<nums.length;i++){
        frequency[nums[i]]=(frequency[nums[i]]||0)+1
        console.log(frequency)
    }

    for(let key in frequency){
        if(frequency[key]>1) console.log (true)
        else console.log(false)
    }
    