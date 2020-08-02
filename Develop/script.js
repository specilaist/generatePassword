
// Split the strings into arrays
const letters = "abcdefghijklmnopqrstuvwxyz";
var arrletters = letters.split('');

const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrCapitals = capitals.split('');

const numbers = "1234567890";
var arrNumbers = numbers.split('');

const symbols = "!?~@#%^&*+";
var arrSymbols = symbols.split('');

allArrays = ['arrletters', 'arrCapitals', 'arrNumbers', 'arrSymbols'];
// var randomLetter = [Math.floor(Math.random() * x.length)];

var newPassword = "";

// When I click it, it works
function clickFunction() {
  document.getElementById("#generate").click();
}

// asks to give a length for the password
function generatePassword() {
  var passwordLength = prompt('Please specify a password length more than 8 and less than 128')
  if (passwordLength < 8 || passwordLength > 128) {
    alert('you need to have a number > 8 and < 128');
  } else {
    var lowercase = confirm('Do you want lowercase');
    var uppercase = confirm('Do you want uppercase?');
    var symbol = confirm('Do you want a symbol');
    var number = confirm('Do you want a number?');
  }
}


function createPassword () {
  if (lowercase === true || uppercase === true || symbol === true || number === true) {
    for (var i = 0; i < passwordLength.length; i++) {
        var rnum = passwordLength[Math.floor(Math.random() * passwordLength.length)];
        
      } 
  } else {
    prompt('Your password needs all the variables');
    return;
    }
  }

while (newPassword.length < passwordLength) {
  newPassword += createPassword();
  newPassword++;
}

document.getElementById('#newpassword').text = newPassword