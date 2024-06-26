// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

// Example 1:

// Input: [1, 0, 2, 1, 0]
// Output: [0 0 1 1 2]
// Example 2:

// Input: [2, 2, 0, 1, 2, 0]
// Output: [0 0 1 2 2 2 ]


const arr=[1, 0, 2, 1, 0];

let low=0;
let mid=0;
let high=arr.length-1;

while(mid<high){
    if(arr[mid]==1){
        mid++
    }else if(arr[mid]==0){
        swap(arr,mid,low)
        mid++;
        low++
    }else{
        swap(arr,mid,high)
        high--;
        
    }
}




function swap(arr,first,second){
    let temp=arr[first]
    arr[first]=arr[second]
    arr[second]=temp
}



console.log(arr)