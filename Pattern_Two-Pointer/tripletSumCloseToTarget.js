// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

// Example 1:

// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: The triplet [-1, 0, 3] has the sum '2' which is closest to the target.

// There are two triplets with distance '1' from the target: [-1, 0, 3] & [-1, 2, 3]. Between these two triplets, the correct answer will be [-1, 0, 3] as it has a sum '2' which is less than the sum of the other triplet which is '4'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.'
// Example 2:

// Input: [-3, -1, 1, 2], target=1
// Output: 0
// Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
// Example 3:

// Input: [1, 0, 1, 1], target=100
// Output: 3
// Explanation: The triplet [1, 1, 1] has the closest sum to the target.




const arr=[-3, -1, 1, 2];
const target = 1;

//1)sorting

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        let temp=arr[j+1];
        arr[j+1]=arr[j]
        arr[j]=temp;
    }
}

console.log("sorted arr",arr)
