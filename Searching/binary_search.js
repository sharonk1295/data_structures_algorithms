// ========= BINARY SEARCH PRACTICE ========= //
// binary search works only on sorted arrays
// divide and conquer


// 1. Write a function that accepts a sorted array (assume it's sorted) and a value (assume we are wokring only with numbers for now) and returns the index at which the value exists
// 2. Create a left pointer at the start of the array, and a right pointer at the end of the array (both will be variables)
// 3. While the left pointer comes before the right pointer (keep looping till you find the answer basically): 
// create a pointer in the middle 
// if you find the value you want, return the index
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// 4. If you never find the value, return -1

// const binarySearch = (arr, value) => {
//     let left = arr[0];
//     let right = arr[arr.length-1]
//     for (let i = 0; i < arr.length; i++) {
//         let pivot = arr[Math.round(arr.length/2)]
//         if (pivot === value) {
//             return i;
//         }
//         if (pivot > value) {
//             arr.slice(left, pivot)
//         }
//         if (pivot < value) {
//             arr.slice(pivot, right)
//         }
//     }
// }


// if a value doesnt exist in the array, the start, middle and end would all be at the same place

const binarySearch = (arr, elem) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    // console.log(start, middle, end)
    while (arr[middle] !== elem && start <= end) { // while the value is not === middle number
        //console.log(start, middle, end)
        if (elem < arr[middle]) { // we do middle -/+ 1 bc we already know its not the middle element, so it'll be redudant to include middle again in the next search. we can just eliminate that too
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    //console.log(start, middle, end)
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
    // or write in ternary ==> return arr[middle] === elem ? middle : -1
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 13)) // the value will be at the middle so we want the middle returned

// in the while loop, we add && start <= end, because in cases where the value doesnt exist in the array, there will be an infinite loop and the start will be one above the middle/end element because we coded start = middle + 1. So to make sure not to run into this situation, we make start less than or equal to the last element of the array so its not an infinite loop
