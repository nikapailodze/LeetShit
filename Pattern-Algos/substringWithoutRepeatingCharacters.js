// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


const s = "dvdf";

console.log(s.length)

if(s.length==1) console.log ("less bitch",1)

let frequency={};
let counter=0;
let best=0;

let left=0;

for(let i=0;i<s.length;i++){
    let item=s[i]

    if(!(item in frequency)){
        frequency[item]=true
        counter++
        
    }else{
        // best=Math.max(best,counter)
        counter=1
        if(item == s[left]) {delete frequency[s[left]]
        }
        else{
        while(true){
            if(item != s[left]) {delete frequency[s[left]]
            break}

            else {
                delete frequency[s[left]]
                left++
                counter--
            }
        }}
        frequency[item]=true
    }
    best=Math.max(best,counter)

    console.log(frequency)
    console.log("counter here is: ",counter)
}

console.log("answer iss",best)
