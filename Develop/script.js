// Assignment Code
let generateBtn = document.querySelector("#generate");
let charArray = []
function generatePassword() {
  let charCount = prompt('How many characters would you like?')
  let upperChoice = confirm('Would you like capital letters?')
  let lowerChoice = confirm('Would you like lowercase letters?')
  let specialChoice = confirm('Would you like special characters?')
  if (upperChoice === true) {
    charArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }
  if (lowerChoice === true) {
    charArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }
  if (specialChoice === true) {
    charArray.push('!', '@', '#', '$', '%', '^', '&', '*', '?')
  }
  console.log(charArray)
  for (let i = 0; i <= charCount; i++) {

  }
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
