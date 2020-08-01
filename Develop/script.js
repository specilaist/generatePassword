// Assignment Code
// var generateBtn = document.querySelector("#generate").value;

// // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var $passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }
document.getElementById("#generate").onclick = generatePassword ()
chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#%^&*+"

function generatePassword() {
  var passwordLength = prompt('Please specify a password length more than 8 and less than 128')
  if (passwordLength < 8 || passwordLength > 128) {
    alert('you need to have a number > 8 and < 128');
    return;
  }

  var lowercase = confirm('Do you want lowercase?');
  var uppercase = confirm('Do you want uppercase?');
  var symbol = confirm('Do you want a symbol');
  var number = confirm('Do you want a number?');

  function createPassword () {
    if (lowercase === true || uppercase === true || symbol === true || number === true) {
      for (var i = 0; i < passwordLength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        passwordLength += chars.substring(rnum,rnum+1);
      }
    } else {
      prompt('Your password needs all the variables');
      return;
    }
  }
}

document.getElementById("#newPassword").textContent = createPassword()