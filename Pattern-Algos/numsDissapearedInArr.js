// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

const nums = [4,3,2,7,8,2,3,1];

let frequency={}
let counter=1
let answer=[]

for(let key of nums){
    frequency[key]=true
}
console.log(frequency)

for(let i =0;i<nums.length;i++){
    if(!(counter in frequency)) {
        answer.push(counter)
        counter++    
    }
    
    else counter++
}
console.log(answer)