// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

const list1 = [], list2 = [0];

let outPut=[]

let right=0;
let left=0;

while(right<list2.length || left<list1.length){
    if(list1[left]<=list2[right]){
        outPut.push(list1[left])
        outPut.push(list2[right])
        right++
        left++
    }else{
        outPut.push(list2[right])
        outPut.push(list1[left])
        right++
        left++
    }
}

console.log(outPut)