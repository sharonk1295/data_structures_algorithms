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

// ** Write a function which takes 2 numbers and returns their sum
const sum = (num1, num2) => {
    return num1 * num2
}

console.log(sum(5,7))

// ** Write a function that takes a string and returns counts of each character in the string
// const countChar = (str) => {
//     let myArr = str.toLowerCase().split("") // to account for when user inputs uppercase letters
//     let freqChar = {};
//     for (let char of myArr) {
//         // console.log(char)
//         freqChar[char] ? freqChar[char] ++ : freqChar[char] = 1
//     }
//     return freqChar;
// }

const countChar = (str) => {
    str = str.toLowerCase();
    let result = {};
    for (let char of str) {
        result[char] ? result[char]++ : result[char] = 1;
    }
    return result;
}

console.log(countChar("sharon"))
console.log(countChar("suNny"))



