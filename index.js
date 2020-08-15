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

// An object cannot be nested in another object
// cannot declare a value of a property as the object it is in bc the obj technically hasnt been declared yet so theres nothing for the property to reference
// let president = {
//     name: "Pooh",
//     next: president
// }

// console.log(president.next) // throws error: cannot access 'president' before initialization

// so do this instead:
// let president = {
//     name: "Pooh"
// }
// president.next = president

// console.log(president.next) // [Circular *1]

// JS eventually removes a value from memory if there is no wire pointing at it

// if an obj does not have a property (look before the dot in dot notation) then it is null or undefined (not pointing at an undefined value though) and then if you try to access another property on top of that undefined property, it immediately throws an error.

const music = {
    taste: 'classical'
}
const onion = music
onion.taste = 'umami'
console.log(music.taste)
