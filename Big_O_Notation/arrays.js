// ======= BIG O NOTATION -> ARRAYS ======= //

// Big of Arrays (ordered (zero-based index) lists)

// insertion : push : O(1)
// insertion : unshift : O(N) bc when you add to the beginning of an array, the first element is no longer index 0, but index 1. So now you have to reindex everything that follows.
// removal : pop : O(1)
// removal : shift : O(N) bc when you remove from the beginning of an array, you have to reindex everything else that follows. Indexed 1 item becomes index 0, etc.
// searching : O(N) bc as you go through each element, the bigger the array, the longer it'll take
// accessing : O(1) constant since you just access by index number, doesnt matter where in the list it is

// Big O of Array Methods 

// push : O(1)
// pop : O(1)
// shift : O(N)
// unshift : O(N)
// concat : O(N)
// slice : O(N) => shallow copy of a portion of an array; linear time bc the bigger the array, the more time it'll time to make a copy which also will also be growing
// splice : O(N) => changes contents of an array by add/remove/change; linear bc if you add an element in the middle of an array, everything following that has to be reindexed
// sort : O(N * logN) => too much comparing going on and can't look at everything at once
// forEach/map/filter/reduce/etc. : O(N) => going through each element in the array, so the bigger the array, the more time it'll take to get through everything
