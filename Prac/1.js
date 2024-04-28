const nums = [0, 1,2, 3,5];
let res = 0;
let answ=-1;

for (let i = 0; i < nums.length; i++) {
    
    res+=(i-nums[i])

    if(res<0) answ=i
}

if(answ>0) return answ
else return nums.length
