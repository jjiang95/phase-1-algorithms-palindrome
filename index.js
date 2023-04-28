function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfLetters = word.split("");
  return arrayOfLetters.reverse().join("") === word;
}

/* 
  Add your pseudocode here

  split word into array of letters
  copy array and reverse copy
  join array2 back into a word
  compare original word and word 2

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
