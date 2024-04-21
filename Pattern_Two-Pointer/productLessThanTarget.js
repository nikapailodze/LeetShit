// Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

// Example 1:

// Input: [2, 5, 3, 10], target=30                                              
// Output: [2], [5], [2, 5], [3], [5, 3], [10]                           
// Explanation: There are six contiguous subarrays whose product is less than the target.
// Example 2:

// Input: [8, 2, 6, 5], target=50                                              
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]                         
// Explanation: There are seven contiguous subarrays whose product is less than the target.


const arr=[8, 2, 6, 5];
const target=50 ; 

const subArr=[]

for(let i=0;i<arr.length-1;i++){
    let left=i+1
    // let right=arr.length-1

    if(i==0 && arr[i]<target) subArr.push([arr[i]])
    if(arr[left]<target) subArr.push([arr[left]])

    let product=arr[i]*arr[left];
    let currArr=[arr[i]]

    while(product<target && left<arr.length){
        // let currArr = [arr[i]]; // Create a new array for each iteration
        currArr.push(arr[left]);
        subArr.push([...currArr]);

        // Update product and move to the next element
        left++;
        product *= arr[left];
        


    }
}

console.log("subarray: ",subArr)