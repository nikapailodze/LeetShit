// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.



const s = "A man, a plan, a canal: Panama";

let sLower = s.toLowerCase()

let newStr="";



for(let i=0; i<sLower.length;i++){
    let ascii = sLower[i].charCodeAt();
    if((ascii >= 97 && ascii <= 122) || (ascii>= 48 && ascii<=57)){
        newStr+=sLower[i]
    }
}
console.log(newStr)
let left = 0;
let right = newStr.length - 1;

for (let i = 0; i < newStr.length / 2 + 1; i++) {
    console.log(left,right)
    if (left >= right) {
        console.log(true)
        break
    }else if (newStr[left] == newStr[right]) {
        left += 1
        right -= 1
        // console.log(newStr[left])
        // console.log(newStr[right])

    }
}
    



