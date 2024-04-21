// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.





// for(let i=0;i<nums.length;i++){
//     for(let j=0;j<nums.length-1-i;j++){
//         if(nums[j]>nums[j+1]){
//             let temp=nums[j]
//             nums[j]=nums[j+1]
//             nums[j+1]=temp
//         }
//     }
// }

// console.log("sorted arr", nums)

// let counter=0;
// for(let i=0;i<nums.length+1;i++){
//     console.log(nums[i],counter)
//     if(nums[i]!=counter) {
//     console.log("found...",counter)
//     break}
//      else{
//         counter++
//     }
//     // if(i==nums.length-1) console.log(arr)
// }


//with frequency counter

const nums = [0,1,2,3,4];

let frequency={}

for(let key of nums){
    frequency[key] = true
}

console.log(frequency)

let counter=0;

for(let i=0;i<nums.length+1;i++){
    if(!(counter in frequency)) break
    else counter++
}

console.log(counter)