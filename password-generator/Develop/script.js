// Define var myPassword and characters 
var myPassword = ' ';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = 1234567890;
  const specials = '!@#$%^&*()_;<>?":;=+{}[]/~`-.,';
  let password = uppercaseLetters.concat(lowercaseLetters + numbers + specials);

  //password length prompt
 var passwordLength = window.prompt("How long should your password be? Enter a number between 8 and 25");
if (passwordLength >8, passwordLength <25) {
  let length = password.length;
}
else { 
  window.alert("Please select a number between 8 and 25.");
}
console.log(passwordLength);

/*
//uppercase confirmation
  var uppercase = window.confirm("Would you like uppercase letters in your password? If yes, please select okay.");
  if (uppercase) {
    let password = uppercaseLetters.concat(numbers + specials);
  }
  else {
    let password = uppercaseLetters;
  }
  
  var number = window.confirm("Would you like numbers in your password? If yes, please select okay.")
  if (number) {
    let password = number + uppercase;
  }
  else {
    let password = uppercase;
  }

  var specialCharacters = window.confirm("Would you like special characters in your password? If yes, please select okay.")
  if (specialCharacters) {
    let password = specialCharacters + number + uppercase;
  }
else {
  let password = number + uppercase;
}*/



  function generatePassword(length) {
   for (let i = 0; i < length; i++) {
     var passwordLength = password.length;
    myPassword += password[Math.floor(Math.random() * passwordLength)];
   }
  return myPassword;
}

//if (passwordLength === 25<i>8  || passwordLength === "password.length") 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


