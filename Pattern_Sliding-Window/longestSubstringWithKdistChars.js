// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

// Example 1:

// Input: String="araaci", K=2  
// Output: 4  
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:

// Input: String="araaci", K=1  
// Output: 2  
// Explanation: The longest substring with no more than '1' distinct characters is "aa".



const string="aaaa", k=1;  
let len=0;




for(let i=0;i<string.length;i++){
    const frequency={}
    let counter=0;
    let right=i;
    while(counter<=k && right < string.length){
        if(!(string[right] in frequency)){ 
        frequency[string[right]]=true
        counter++
        console.log("counter rises",counter)
        }
        else right++

        console.log(frequency)
        console.log("right: ",right)
        len=Math.max(right-i,len)
        console.log("this is len: ",len)
        
    }
    
    
    

}


console.log(len)