// Problem Statement
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Example 1:

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Example 2:

// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]


let arr=[-2, -1, 0, 2, 3];

let squaredArr=[]

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(Math.abs(arr[j])>Math.abs(arr[j+1])){
        let temp=arr[j];
        arr[j]=arr[j+1]
        arr[j+1]=temp
        }
    }
}

for(let i=0;i<arr.length;i++){
    squaredArr.push(arr[i]**2)
}

console.log(arr)
console.log(squaredArr)


