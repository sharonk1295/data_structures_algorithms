// console.log("hello sharon")

// ======== WARM UP ======== //
// FIRST EXAMPLE
const reverseString = (str) => {
    let newWord = str.split("").reverse().join("");
    return newWord;
}

console.log(reverseString("spaghetti"))

// SECOND EXAMPLE
const findSum = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(findSum(5));

// ALTERNATIVE TO SECOND EXAMPLE
function findTotal(num) {
    return num * (num + 1) / 2;
}

console.log(findTotal(5));

