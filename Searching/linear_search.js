//LINEAR SEARCH PRACTICE
// return -1 if it doesnt exist in array
function linearSearch (arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      } 
      if (arr.includes(value) === false) {
        return -1;
      }
    }
  }
  
  linearSearch([1,2,3,4], 3)
  
  // I tried for of loop and ternary, but they dont work bc it just wouldnt make sense since if you did return (arr[i] === value ? i : -1) it just returns -1 without going thru rest of array bc of return keyword!!!!!