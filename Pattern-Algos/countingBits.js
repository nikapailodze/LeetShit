// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101




const n=5;

let outputArr=[]


for(let j=0;j<=n;j++){

//converting

let dec=j;
let binary="";
let finalBinary=""


//2^2 + --2^1-- + 2^0

if(dec<1) binary+=String(dec)

while(dec>0){
    if(dec%2==1) binary+="1"
    else binary+="0"

    dec=Math.floor(dec/2)
}

//reverse binary

for(let i=binary.length-1;i>=0;i--){
    finalBinary+=binary[i]
}

console.log(finalBinary)

let counter=0;

for(let k=0;k<finalBinary.length;k++){
    if(finalBinary[k]=="1") counter++
}

outputArr.push(counter)

}

console.log(outputArr)