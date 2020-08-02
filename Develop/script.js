
// Split the strings into arrays
const letters = "abcdefghijklmnopqrstuvwxyz";
var arrletters = letters.split('');
var randomletters = arrletters[(Math.floor(Math.random() * 26))]

const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrCapitals = capitals.split('');
var randomCapitals = arrCapitals[(Math.floor(Math.random() * 26))]

const numbers = "1234567890";
var arrNumbers = numbers.split('');
var randomNumbers = arrNumbers[(Math.floor(Math.random() * 10))]

const symbols = "!?~@#%^&*+";
var arrSymbols = symbols.split('');
var randomSymbols = arrSymbols[(Math.floor(Math.random() * 10))]

// created an array for the arrays
var allArrays = [randomletters, randomCapitals, randomNumbers, randomSymbols];
var randomInt = allArrays[(Math.floor(Math.random() * 3))]
console.log(randomInt)

// empty variable for new password
var newPassword = "";

// When I click it, it works
function clickFunction() {
  document.getElementById("#generate").click();
}

// asks to give a length for the password
function generatePassword() {
  const passwordLength = prompt('Please specify a password length more than 8 and less than 128');
  if (passwordLength < 8 || passwordLength > 128) {
    alert('you need to have a number > 8 and < 128');
    return;
  } else {
    var length = Number(passwordLength)
    var lowercase = confirm('Do you want lowercase');
    var uppercase = confirm('Do you want uppercase?');
    var symbol = confirm('Do you want a symbol');
    var number = confirm('Do you want a number?');
    console.log(length);
  } while (newPassword.length < length) {
    // newPassword += allArrays[(Math.floor(Math.random() * 3))];
    
    for (i = 0; i < 4; i++){
    
      newPassword += allArrays[i];
      console.log(newPassword);
    }
  } 
  var $newPassword = document.querySelector("#password");
  $newPassword.textContent = newPassword
}
// it will generate a random password up to this point



