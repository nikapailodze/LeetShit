const arr = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
const triplets = [];

// Sorting algorithm
arr.sort((a, b) => a - b);

console.log(arr)

for (let i = 0; i < arr.length - 2; i++) {
    // Avoid duplicate triplets starting with the same element
    if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);

                // Move left and right pointers to avoid duplicates
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                // Move pointers to find new combinations
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
}

console.log(triplets);
