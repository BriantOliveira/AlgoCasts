// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common String Questions 
// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

function maxChar(str) {
  const charsMap = {}

  for (let char of str) {
    if (charsMap[char]) {
      charsMap[char]++;
    } else {
      charsMap[char] = 1;
    }
  }

  /** Method 2  */
  // for (let char of str) {
  //   let test = chars[char] = chars[char] + 1 || 1;
  //   return test
  // }
}


module.exports = maxChar;
