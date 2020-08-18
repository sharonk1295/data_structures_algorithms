// ========== INSERTION SORT ========== //
//taking one element at a time and inserting in its correct position in the left portion of the array (already sorted). So we gradually build up the sorted portion of the array as we go through it

// PSEUDOCODE
// start by picking the second element in the array
// now compare the the second element with the one before it and swap if necessary 
// continue to the next element and if it is in the incorrect order, ITERATE THROUGH THE SORTED PORTION (i.e. the left side) to place the element in the correct place.
// repeat until the array is sorted.

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] < arr[i]) {
            // if the second element is smaller than the one before it, swap
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        for (let )
        }
    }
    return arr;
}

console.log(insertionSort[3,2,0])