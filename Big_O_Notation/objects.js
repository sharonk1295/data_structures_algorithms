// ======= BIG O NOTATION -> OBJECTS ======= //

// Big of Objects (unordered, key-value pairs)

// insertion : O(1) => constant time
// removal : O(1)
// searching : O(N) => linear time bc you need to access the keys, THEN check their values. So as the size of the object grows, or as N grows, so does the runtime to search for a specific value
// accessing : O(1)

// Big O of Object Methods
// the methods on top of the Object obj print arrays, so as the size of the obj grows, so does the runtime to compile the new array

// Object.keys : O(N) => linear bc as the # of items in the obj grows, we have to visit each item once and add it to the array that gets printed when calling Object.keys(obj)
// Object.values : O(N)
// Object.entries : O(N)
// hasOwnProperty : O(1) => constant bc it returns a boolean

let car = {
    color : "white",
    year: 2019,
    numOfTires: 4,
    leased: true
}

console.log(Object.keys(car)) // O(N)
console.log(Object.values(car)) // O(N)
console.log(Object.entries(car)) // O(N)
console.log(car.hasOwnProperty("color")) // O(1) bc it's a boolean result