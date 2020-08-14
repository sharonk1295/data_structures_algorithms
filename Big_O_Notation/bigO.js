// ========== BIG O NOTATION =========== //
// Numeric representation of the performance of our code
// measured through TIME COMPLEXITY and SPACE COMPLEXITY
// Focuses on worst-case scenario
// constants don't matter
// smaller terms can be dropped
// nested loops are not 2N, but N^2

///////////////////////
// TIME COMPLEXITY
//////////////////////

// count the number of times/ simple operations the computer has to perform (+ - * /)

// EXAMPLE OF O(N) LINEAR RUN TIME
const logAtLeast5 = (n) => {
    for (let i = 1; i <= Math.max(5,n); i++) {
        console.log(i)
    }
}

logAtLeast5(10) // func prints 1-5 no matter what, if n = 10 ,then prints 1-10. 
// But on bigger scales, when n is a much larger number like 10 million, it will print 1-10 million. This means the loop runs 10 million times. So as n grows, the number of operations grows too. 

// EXAMPLE OF O(1) CONSTANT RUN TIME
const logAtMost5 = (n) => {
    for (let i = 1; i <= Math.min(5,n); i++) {
        console.log(i)
    }
}

logAtMost5(3) // func prints 1-5 no matter what, but if n is smaller than 5, then prints 1-n. So if n = 3, just 1-3 gets printed. 
// Even as n gets bigger, it doesnt matter bc only 1-5 will get printed at max/most. So it's constant bc even if n = 1000, only 1-5 gets printed.



///////////////////////
// SPACE COMPLEXITY
//////////////////////

// how much additional memory do we need to allocate in order to run the code in our algorithm?

// Since n is always growing, we dont focus on the amount of memory n will take up. INSTEAD, we focus on AUXILIARY SPACE COMPLEXTIY, the amount of space required by the algorithm itself.

// focus on whats happening inside the algorithm, not the input. 

// Most primitives (booleans, numbers, undefined, null) require O(1) CONSTANT SPACE bc true and false take up same amt of space. 1 and 10000 will both take up the same amount of space. (*remember, we drop constants when simplifying big o notation)

// Strings require O(N) space bc a string with 50 characters will take 50x more space than a string with a single character

// Reference types (arrays, objs) require O(N) space bc an array with length = 4 will take up twice as much space as an array with length = 2. Bigger the array/obj, the more space/memory required.

// EXAMPLE OF O(1) SPACE
const findSum = (arr) => {
    let total = 0;
    for (let i = 0; i <arr.length; i ++) {
        total += arr[i]
    }
    return total;
}

console.log(findSum([1,2,3])) // let total = 0 and let i = 0 are each just one number/variable. They both change/reassigned values as the for loop iterates, but there is no additional variable being declared. Since we are not creating NEW VARIABLES from this code, we do not take up additional space. So constant space. 
// No matter the size of the array, the amount of variable declarations stays the same. Nothing is being added or deleted. 


// EXAMPLE OF O(N) SPACE 
const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2* arr[i]);
    }
    return newArr;
}

console.log(double([2,3,4])) // Prints [4,6,8]
// Linear space required because the bigger our arr input, the bigger our new array is when printed. You're storing the same amount of space into a new array, which takes up additional space in memory. 

