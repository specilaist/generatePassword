// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt('Please specify a password length more than 8 and less than 128')
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
