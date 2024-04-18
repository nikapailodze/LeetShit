// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.

// Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.

// Example 1:

// Input: sentence = "TheQuickBrownFoxJumpsOverTheLazyDog"
// Output: true
// Explanation: The sentence contains at least one occurrence of every letter of the English alphabet either in lower or upper case.
// Example 2:

// Input: sentence = "This is not a pangram"
// Output: false
// Explanation: The sentence doesn't contain at least one occurrence of every letter of the English alphabet.



// "z".charCodeAt(0)
//String.fromCharCode(a-32)

// A-65 Z-90
//a-97 z-122


//solution number 1

// const pangram = (sentence) =>{
    

// const frequency ={}

// let counter=0;

// for(let i=0;i<sentence.length;i++){
   
//     let a= sentence.charCodeAt(i)
//     if(a<65 || a>122) continue
//     let character=sentence[i]
//     if(a>=97){
//         character=String.fromCharCode(a-32)
//     }
//     frequency[character]=(frequency[character] || 0)+1
    
// }


// // console.log(frequency)



// for(let key in frequency){
//     counter+=1
// }

// if(counter==26) return true 
// return false
// }


// let sentence = "Cwm fjord bank glyphs vext quiz"

// console.log(pangram(sentence))



let sentence = "Cwm fjord bank glyphs vext qui"

let lower= sentence.toLowerCase()

const frequency={}

for(let i=0;i<lower.length;i++){
    if(lower.charCodeAt(i)<97 || lower.charCodeAt(i)>122) continue
    frequency[lower[i]]=(frequency[lower[i]] || 0)+1
}

console.log(frequency)

let counter=0;
for(let key in frequency){
    counter+=1
}

console.log(counter==26)