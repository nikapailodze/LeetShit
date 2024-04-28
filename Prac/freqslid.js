const nums = [1,1,1,2,3]

const limit=2;

const frequency={}

let counter=0;

let left=0;

let len =0;


for(let i=0;i<nums.length;i++){
    let item=nums[i]

    if(!(item in frequency)){
        frequency[item]=1;
        counter++
    }else{
        frequency[item]+=1;
    }
    console.log(frequency)
    console.log("counter",counter)

    if(counter<=2){
        let currlen=0
        for(let key in frequency){
            currlen+=frequency[key]
        }
        len=Math.max(currlen,len)
    }
    

    while(counter>limit){
        frequency[nums[left]]-=1
        console.log("substruction: ", frequency)
        if(frequency[nums[left]]==0) {
            delete frequency[nums[left]]
            console.log("deletedd" , frequency)
            counter--;
        }
        left++;
    }

    

    
}

console.log(len)




// /**
//  * @param {number[]} fruits
//  * @return {number}
//  */
// var totalFruit = function(fruits) {
//     const freq = {};
//     let [total,l,res]=[0,0,0,0];
//     const len = fruits.length;
//     for(let i=0;i<len;i++){
//         freq[fruits[i]]=freq[fruits[i]]?freq[fruits[i]]+1:1;
//         total++;

//         while(Object.keys(freq).length>2){
//             let f = fruits[l];
//             freq[f]=freq[f]-1;
//             total--;
//             l++;
//             if(freq[f]<=0){
//                 delete freq[f];
//             }
//         }
//         res = Math.max(total,res)
//     }
//     return res;
// };