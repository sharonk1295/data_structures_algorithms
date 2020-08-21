// ========== MERGE SORT =========== //
// Combination of split, sort, merge
// divide and conquer!!
// Exploits the fact that arrays with 0 or 1 element are ALWAYS sorted
// Works by decomposing an arr into smaller arrs of 0 or 1 element, and then building back up a newly sorted array
// cut the array in half, then keep dividing those arrays into halves until you have arrays with only 0 or 1 element (single element arrays). As you merge them back together, you sort them. Sorting already sorted arrays is EASY and single element arrays are SORTED!! so just compare their values then merge! And keep going on

// ** BIG O
// time -> for best, avg, worst case scenarios it is O(n log n)
// BECAUSE while dividing, it takes O(log n) decompositions to get to single element arrays. You have to keep halving the arrays until you get to single element arrays. If you have 8 items, you have to count the number of times you have to split it up, which is 3 bc 2^3 is 8. So as n grows, the number of times you have to split it up grows O(log n) times. THEN, for exmaple, when you finally are down to merging the 2 final sorted arrays into one, you are doing O(N) comparisons. So if you have 1,000 items in the array, there have to be roughly 1,000 comparisons to be made. So as N grows, the merge function itself, not the mergesort, just the merge, has a time complexity of O(N).

// space -> O(n)
// the larger the arr, the more additional space you need for the arrays you're creating in the functions

// First, start by writing a func that merges 2 SORTED arrays (in same order, like both are sorted in ASC order)
// should be O(n + m) time and space complexity n= arr1, m = arr2. basically meaning you should just visit each item one time in each array
// the arrays are usually same length or 1 element different in real life


// PSEUDOCODE for merging arrays
// 1. Create an empty array that you'll return at the end
// 2. take a look at the smallest values in each of the arrs (set counters for both arrs like i and j)
// 3. while there are still values we haven't looked at...(we didnt reach the end of the arrs)
// 4. if the value in arr1 is smaller than the value in arr2, push the value of arr1 into the results arr and move on to the next value in arr1
// 4. if the value in arr1 is larger than the value in arr2, push the value in arr2 into the results arr and move on to the next value in arr2
// 5. Once we finish working with one arr, just push in all the remaining values from the other arr

// const merge = (arr1, arr2) => {
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) { // push in the remaining values of this unfinished array into results
//         results.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) { // push in the remaining values of this unfinished array into results
//         results.push(arr2[j]);
//         j++;
//     }
//     return results;
// }

// console.log(merge([1,10,50], [2,14,99,100]))


// PSEUDOCODE FOR MERGE SORTING 
// will require recursion!!!
// 1. Break up the array into halves until you have arrays that are empty or have one element
// 2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// 3. Then, return that merged and sorted arr!!

const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) { // push in the remaining values of this unfinished array into results
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) { // push in the remaining values of this unfinished array into results
        results.push(arr2[j]);
        j++;
    }
    return results;
}

const mergeSort = (arr) => { // keep dividing array into halves until you get arrays of 0 or 1 element
    if (arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid)); // until left is resolved, right isn't even run yet because theres a bunch of values waiting on the call stack until left is fully done with the recursion
    let right = mergeSort(arr.slice(mid));
    return merge(left, right); // then merge the final left and right arrays into ong big sorted array by calling the above function
}

console.log(mergeSort([10,24,76,73]))