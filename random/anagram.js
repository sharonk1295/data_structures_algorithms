const isAnagram = (str1, str2) => {
    let obj1 = {}
    let obj2 = {}
    if (str1.length === str2.length) {
      for (let letter of str1) {
        obj1[letter] = (obj1[letter]||0) + 1
      }
      for (let letter of str2) {
        obj2[letter] = (obj2[letter]|| 0) + 1
      }
      console.log(obj1)
      console.log(obj2)
      for (let count in obj1) {
        if (obj1[count] === obj2[count]) {
          return true
        } else return "false!!"
      }
    } else return "false, not even same amount of letters"
}
  
console.log(isAnagram('car', 'rca'))
console.log(isAnagram('dazz', 'zza'))
console.log(isAnagram('racecar', 'carrace'))


// ====== BETTER SOLUTION ======= //
function validAnagram(first,second) {
    if (first.length != second.length) {
      return false;
    }
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i]
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
    return true;
}
  
console.log(validAnagram('car', 'rac'))