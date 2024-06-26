// Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

// Example 1:

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
// Example 2:

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1 
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

const nums =[2, 1, 5, 2, 3, 2];
const s=7;

let len=Infinity;
let currMin=0;
let left=0;
for(let i=0;i<nums.length;i++){
    currMin+=nums[i]
    
    while(currMin>=s){
        if(i-left+1<len){
            len=i-left+1
        }
        currMin-=nums[left]
        left++
    }
    
}

console.log(len)