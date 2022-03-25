// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordText = ""
let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
let lowercase = "qwertyuiopasdfghjklzxcvbnmm"
let special = "!@#$%^&*,.?;:"




// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  let charCount = prompt('How many characters would you like?')
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
