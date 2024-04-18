// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums= [1, 2, 3, 4]
// Output: false  
// Explanation: There are no duplicates in the given array.
// Example 2:

// Input: nums= [1, 2, 3, 1]
// Output: true  
// Explanation: '1' is repeating.





const findDuplicates =(nums) => {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                return true
            }
        }
    }
    return false
}

let nums=[1, 2, 3, 4]
console.log(findDuplicates(nums))