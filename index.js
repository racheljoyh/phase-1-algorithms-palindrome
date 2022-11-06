function isPalindrome(word) {
  // Write your algorithm here
  /* - function isPalindrome will recieve one arguement (a string).
     - The function should return true if the string is a palindrome
     - The function should return false if the string is not a palindrome 
   */
  const first = word.charAt(0);
  const last = word.charAt(word.length - 1);

  if (first === last) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("abba");

/* 
  Add your pseudocode here
  1. Create function isPalindrome with 'word' passed in as the arguement
  2. Create variables that target the first and last letter of a word
  3. Use those variables to set up a conditional that will 
  3. Call the function with words from the test passed in 
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
