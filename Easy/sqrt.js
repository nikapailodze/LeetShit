// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


////////////solution number 1////////
let x = 8;

let devisor = 1;

while ((devisor * devisor) <= x) {
    devisor += 1;
}
console.log(devisor - 1);

////////////solution number2/////////

if (x < 2) return x; // return x if it is 0 or 1

let left = 2;
let right = Math.floor(x / 2); // initialize left and right pointers
let pivot;
let num; // use long to store result of pivot * pivot to prevent overflow
while (left <= right) { // binary search for the square root
  pivot = Math.floor((left + right) / 2); // find the middle element
  num = pivot * pivot;
  if (num > x) right = pivot - 1; // if pivot * pivot is greater than x, set right to pivot - 1
  else if (num < x) left = pivot + 1; // if pivot * pivot is less than x, set left to pivot + 1
  else return pivot; // if pivot * pivot is equal to x, return pivot
}

return right; // return right after the loop



