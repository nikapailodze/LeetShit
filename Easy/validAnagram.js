// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "listen", t = "silent"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false



let s = "listen";
let t = "silent";

let frequency={}

// if(s.length!=t.length) return false


for(let i =0;i<s.length;i++){
    let char1=s[i];
    let char2=t[i];

    frequency[char1]=(frequency[char1] || 0)+1
   
    frequency[char2]=(frequency[char2]|| 0)-1
}

console.log(frequency)
for(let key in frequency){
    if(frequency[key]!=0) return false
}
console.log(frequency)
return true