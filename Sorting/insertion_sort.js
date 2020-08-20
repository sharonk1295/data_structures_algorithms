// ========== INSERTION SORT ========== //
//taking one element at a time and inserting in its correct position in the left portion of the array (already sorted). So we gradually build up the sorted portion of the array as we go through it

// BIG O -> worst case is O(N^2) runtime because of nested loops
// BIG O -> nearly sorted data is shorter runtime like bubble sort

// **** insertion sort is VERY GOOD in situations where data is coming in live or streaming and it needs to be inserted on the spot -> online algorithm
// ** ONLINE ALGORITHM -> an online algorithm that accepts new data as it's coming in. Doesn't have to have the entire array at once; accepts new, incoming data!
/////// BECAUSE we keep one side of the array already sorted and we insert numers/data one at a time, it doesnt matter what new piece of data comes in, because the algo will sort it into its rightful position anyway.

// PSEUDOCODE
// start by picking the second element in the array
// now compare the the second element with the one before it and swap if necessary 
// continue to the next element and if it is in the incorrect order, ITERATE THROUGH THE SORTED PORTION (i.e. the left side) to place the element in the correct place.
// repeat until the array is sorted.

const insertionSort = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        let currentVal = arr[i]; // this is our temp var we've been using for other swap functionalities
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j] // comparing to the already sorted left portion of the array so j--
        } // after this loop finishes, that means we found the correct spot for where currentVal needs to go
        arr[j+1] = currentVal;
        }
    return arr;
}

console.log(insertionSort([2,1,9,76,4])) // using let in the for loops didnt work bc the line of arr[j+1] = currentVal is outside the scope of let variables (block scope), but var variables are fine if defined within same function (local scope)