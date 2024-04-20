// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// Example 1:

// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
// Example 2:

// Input: [-1, 4, 2, 1, 3], target=5 
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: 
// [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]


const arr = [0, 0, 0, 0, 0]
;
const target = 1;


// 1)sorting

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}

console.log("sorted arr: ", arr)

let counter=0;

for(let i=0;i<arr.length-2;i++){
    // if(i==0 || (i>0 && arr[i]!=arr[i-1])){
        let left=i+1
        let right=arr.length-1

        // console.log("left:",arr[left],"right:",arr[right])

        while(left<right){
            let sum=arr[i]+arr[left]+arr[right]
            
            
            console.log("left:",arr[left],"right:",arr[right])
            console.log("sum: ",sum)
            if (sum < target) {
                counter += right - left; // Increment counter by the number of pairs possible with current left and right pointers
                console.log("added::", arr[i], "left:", arr[left], "right:", arr[right]);
                left++;
            } else {
                right--;
            }
            
        }

    }

console.log(counter)