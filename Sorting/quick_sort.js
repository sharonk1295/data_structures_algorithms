// =========== QUICK SORT =========== //
// solve through recursion
// same as merge sort, where it assums arrays of 0 or 1 element are always sorted
// works by selecting one element (the "pivot") and finding the index where the pivot should end up in the sorted arr
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot


// PSEUDOCODE -> PIVOTE HELPER (pivot or partition)
// Given an arr, this helper func should designate an element as the pivot
// It should then rearrange the elements in the arr so that all values less than the pivot are moved to the left of the pivot and all the values greater than the pivot are moved to the right of the pivot. THIS MEANS THE PIVOT ELEMENT WOULD BE SORTED AFTER THE MOVING OF ELEMENTS
// *** The order of elements on either side of the pivot doesn't matter!!! They just need to be on the left if smaller than pivot, and on the right if greater than pivot. Doesn't have to be sorted on the left and right. The pivot element is the only one sorted at that point.
// This helper function should do all this IN PLACE, should not create a new array
// When complete, the helper should return the INDEX of the pivot
// Though there are consequences in terms of BIG O, we will just use the first element as the pivot here. IDEALLY, it should be the median value but you don't know what the median is of an unsorted arr and we're trying to sort the arr!!

// === PIVOT PSEUDOCODE === //
// It will help to accept 3 arguments: an arr, a start index, and an end index (these can default to 0 and arr.length - 1, respectively)
// Grab the pivot from the start of the arr
// Store the current pivot index in a var (this will keep track of where the pivot should end up)
// Loop through the arr from start till end
////// If the pivot is greater than the current element, increment pivot index var and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index