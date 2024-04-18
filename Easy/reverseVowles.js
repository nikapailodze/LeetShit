// Given a string s, reverse only all the vowels in the string and return it.

// const { SassNumber } = require("sass");

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"


let s = "leetcode"

let vowels={}

for(let key of "aeiouAEIOU"){
    vowels[key]=true
}

console.log(vowels)

let arr=s.split("")

console.log(arr)

let left=0;
let right=arr.length-1;

while(left<right){
    while(left<right && !(s[left] in vowels)){
        left+=1
        console.log(arr[left])
    }
    while(left<right && !(s[right] in vowels)){
        right-=1
        console.log(arr[right])
    }

    let temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp

    left+=1
    right-=1
}

// console.log(s[right] in vowels)

console.log(arr)

let answer=arr.join("")

console.log(a)