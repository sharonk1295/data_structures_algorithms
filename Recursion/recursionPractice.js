// ======== RECURSION ======== //
// a function that calls itself 
// needs a base case (usually in the form of a conditional, bc if that condition is met, it'll stop) or else it becomes an infinite loop
// needs diff input, bc why would you perform the same func on the same piece of data??
// classic story: martin & the dragon

// *** The CALL STACK *** //
// When a function is invoked, add/push to the top of the call stack, then pop/remove from the top once a value is returned or a return keyword is met

// Recursion practice
// remember, ask what if user inputs floating number or string or etc.
// const checkOdd = (num) => {
//   if (num % 2 !== 0) {
//     return `IT IS TRUE!! ${num} is an odd number!`
//   } else {
//     return `False, ${num} is even!!`
//   }
// }
// console.log(checkOdd(2345.4))

// must check to make sure that its not an empty array
// const checkOdd = (arr) => {
//   if (arr.length > 0) {
//     if (arr[0] !== 0) {
//       return `${arr[0]} is an odd number!`
//     } else return 'even number'
// } else return false
// }

// const checkOdd = (arr) => {
//   if (arr.length > 0) {
//     return (arr[0] !== 0 ? `${arr[0]} is an odd number!!` :
//    `${arr[0]} is an even number!!`)
//   } else return `user input empty array`
// }

// let testArr = [123, 234, 232]
// console.log(checkOdd(testArr))


//Recursion factorial 
// const factorial = (num) => {
//   if (num <= 0) {
//     console.log('done!!')
//     return
//   }
//   let total;
//   total = num * (num-1)
//   num --
//   factorial(num)
// }

// factorial(4)

// const factorial = (num) => {
//   if (num === 1) return 1; //bc if 0, then anything times 0 is just 0
//   return num * factorial (num - 1)
// } 
// factorial(4)


//RECURSION

// const findOdds = (arr) => {
//   let result = []; // this arr will reset each time func is called, but thats okay!
//   if (arr.length <= 0) {
//     return result; // when we get to the even numbers, we concat an empty array
//   }
//   if (arr[0] % 2 !== 0 ) {
//     result.push(arr[0]);
//   }
//   result = result.concat(findOdds(arr.slice(1)))
//   return result;
// }

// findOdds([1,2,3,4,5])


// MORE PRACTICE
const sumRange = (num) => {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num-1);
}


// what's happening in the call stack
// sumRange(3)
// returns 3 + sumRange(2);
//             returns 2 + sumRange(1)
//                         returns 1
// this is how everything on the call stack looks like above. All the return values are waiting on the call stack. Then, from the most recent one, the top of the call stack, we start removing. 
// we end up with returns 2 + 1 = 3 => returns 3 + 3 = 6 our final answer is 6

console.log(sumRange(3)); // prints 6
console.log(sumRange(5)); // prints 15