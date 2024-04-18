// Given an array of strings words and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

// Example 1:

// Input: words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], word1 = "fox", word2 = "dog"
// Output: 5
// Explanation: The distance between "fox" and "dog" is 5 words.
// Example 2:

// Input: words = ["a", "c", "d", "b", "a"], word1 = "a", word2 = "b"
// Output: 1
// Explanation: The shortest distance between "a" and "b" is 1 word


const words = ["a", "c", "d", "b", "a"];

const word1 = "a", word2 = "b";

let counter = 0;

let firstSaved = 0;
let secondSaved = 0;

for (let i = 0; i < words.length; i++) {

    if (words[i] == word1) firstSaved = i

    console.log("first word", firstSaved)

    if (words[i] == word2) secondSaved = i

    console.log("second word", secondSaved)
}

let calc = Math.abs(firstSaved - secondSaved)
console.log(calc)