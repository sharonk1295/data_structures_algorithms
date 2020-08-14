// FREQUENCY COUNTER EXAMPLE
// 1. Restate the problem
// 2. Explore concrete examples (start off simple)
// 3. Pseudocode!!
// 4. Solve and simplify
// 5. Refactor, ask interviewer if he/she approves or what other solutions he/she suggests

// const same = (arr1, arr2) => {
//   // check that both arrays have same length = same freq
//   // the values of arr2 should be squared of values in arr1
//   // Math object and a method that can check the actual square part
// }
 

// refactor because I think arr.includes might be O(N) so then your time complexity is O(N^2)
const same = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
      for (let i=0; i < arr1.length; i++) {
        if (arr2.includes(Math.pow(arr1[i], 2))){
          return true
        } else return false
      }
      // return true
    } else return "false!! arrays have diff lengths"
}
console.log(same([1,3,5], [9,1,25]))