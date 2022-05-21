// Define var myPassword and characters 
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = 1234567890;
const specials = '!@#$%^&*()_;<>?":;=+{}[]/~`-.,';



  //password length and parameters prompt
 var lenPass = window.prompt("How long should your password be? Enter a number between 8 and 25");
 var lowercase = window.confirm("Would you like lowercase letters?");
 var uppercase = window.confirm("Would you like uppercase letters?");
 var number = window.confirm("Would you like numbers in your password?");  
 var symbols = window.confirm("Would you like special characters in your password?");

 console.log(lenPass);
  console.log(lowercase, uppercase, number, symbols);

  //create array based on user responses
  const newArray = [];
if (lenPass > 8 && lenPass < 25) {
  
    if (lowercase) {
    newArray.push(lowercaseLetters)};

     if(number) {
        newArray.push(numbers)};

      if(symbols) {
          newArray.push(specials)};

      if(uppercase) {
        newArray.push(uppercaseLetters)};

        
    console.log(newArray);
  };


//create password from user response array
function createPassword() {
  let password = newArray.join("");
  console.log(password);

  let lenWord = parseInt(lenPass);
  console.log(lenWord);
 
  let newPassword = [];

//random selection of characters for password
     for (var i = 0; i < lenWord; i++) {
         var myPassword = password[Math.floor(Math.random() * password.length)];
         newPassword.push(myPassword);
         console.log(myPassword);
        
   }
   let outputPass = newPassword.join('');
   var passwordText = document.querySelector("#password");
    passwordText.value = outputPass;
  };

  
 

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);





