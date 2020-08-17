// ======= BUBBLE SORT ======= //

// create a func that accepts an array of numbers and sorts in ascending order, using the bubble sort algorithm
const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]; // need temp var for swapping functionality
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// BIG O RUNTIME IS O(N^2) bc of the nested loops

console.log(bubbleSort([34,65,7,8,12,10,1]))

// Unique situation where the data is ALMOST or NEARLY sorted, BIG O IS O(N) runtime in this function
// Optimized with noSwaps
const diffBubbleSort = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false; // we just swapped in the 3 lines above if we get to this point in the code, so it turns false. it only breaks in the next line if there have been no swaps made. if you didnt swap the last time, you swap the next time so no need to iterate again and save on runtime, which is why this is O(N) when data is already NEARLY SORTED, not completely random
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(diffBubbleSort([3,1,76,89,90,100]))