// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Example 1:

// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
// Explanation: There are four unique triplets whose sum is equal to zero. smallest sum.'
// Example 2:

// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.

const arr=[-3, 0, 1, 2, -1, 1, -2];

//sorted arr [
//   -3, -2, -1, 0,
//   1,  1,  2
// ]



let x=0;
let y=0;     //x+y+z==0 ...... x+y=-z
let z=0


//sorting algorithm
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1]
        arr[j+1]=temp
        }
    }
}

//sorted arr [
//        T  L       R
//   -3, -2, -1, 0, 1,  1,  2     iteration t=l+r   t=3
// ]                                               l+r==0

 //x+y+z==0 ...... x+y=-z


 const triplets = [];

// for(let i=0;i<arr.length;i++){
//     let left=i+1
//     let right=arr.length-1
//     console.log(left)
//     console.log(right)


//     //-z
//     let target= -(arr[i]) //3
    
//     let endingSum=arr[left]+arr[right]

//     console.log("target: ",target, "left+right" ,endingSum)

//     while(left<right && endingSum<target){
//         // console.log(arr[left])
//         console.log("rise left by 1")
//         if(target==arr[left]+arr[right]){
//             console.log("equalll: ",arr[i],arr[left],arr[right])
//             tiplets.push([arr[i],arr[left],arr[right]])
//             break
            
//         }
//         left+=1
//     }
//     while(left<right && endingSum>target){
//         // console.log(arr[left])
//         console.log("rise right by 1")
//         if(target==arr[left]+arr[right]){
//             console.log("equalll: ",arr[i],arr[left],arr[right])
//             tiplets.push([arr[i],arr[left],arr[right]])
//             break
            
//         }
//         right-=1
//     }

    
    
    
// }




// console.log(arr)

for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
        let target = -(arr[i]);
        let endingSum = arr[left] + arr[right];

        if (endingSum === target) {
            triplets.push([arr[i], arr[left], arr[right]]);
            break;
        } else if (endingSum < target) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(triplets);







// const arr = [-3, 0, 1, 2, -1, 1, -2];
// const triplets = [];

// // Sorting algorithm
// arr.sort((a, b) => a - b);

// for (let i = 0; i < arr.length - 2; i++) {
//     // Avoid duplicate triplets starting with the same element
//     if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
//         let left = i + 1;
//         let right = arr.length - 1;

//         while (left < right) {
//             let sum = arr[i] + arr[left] + arr[right];

//             if (sum === 0) {
//                 triplets.push([arr[i], arr[left], arr[right]]);

//                 // Move left and right pointers to avoid duplicates
//                 while (left < right && arr[left] === arr[left + 1]) left++;
//                 while (left < right && arr[right] === arr[right - 1]) right--;

//                 // Move pointers to find new combinations
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
// }

// console.log(triplets);
