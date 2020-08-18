// =========== SELECTION SORT ============= //
// Similar to bubble sort, but instead of first placing the large values into sorted position (bubbling to the end of the array), it places small values into sorted position (finding the minimum and placing at beginning of arr)

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j // this is just the index number, identifying WHERE the lowest number is, not the actual number itself
            }
        }
        if (i !== lowest) { // i will eventually be the same as lowest so you want swapping to stop, so only if they are not the same, then you swap!
           // the actual swapping
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp; 
        }
    }
    return arr;
}

console.log(selectionSort([0,2,34,22,10,19,17]));

// Minimize the number of swappings you need => then use selection sort over bubble sort bc you just make one swap at the end of each loop. Unlike bubble where you keep sorting to find the largest value each loop. 