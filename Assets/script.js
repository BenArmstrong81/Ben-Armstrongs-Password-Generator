// Assignment code here

//Variables for the computer to choose from - 1) Characters 2) password length greater than 8 characters or equal to 128 3) Password
// var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var passwordLength = 8 >= 128 ;
// var password = "";  
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacters;
var confirmNumbers;
var userChoices;

//Defining Characters to use:
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "}", "|", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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


//Start of Function:

function generatePassword(){
//Asking user for length of their password:
passwordLength = prompt("Choose the length of your password between 8 and 128 characters");
// console.log("Password Length " = passwordLength);                        **BEN TO UN COMMENT LINE 39 ONCE DEBUGGED**
// If user pressed Cancel, alert pops up ensuring an input is made to proceed
if (!passwordLength) {
  alert("Input Required");   
//If user selects outside 8 and 128 prompt will ask again; length of password required:
} else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("You must choose between 8 and 128");
  console.log("Password Length" + passwordLength);
} else { 
  //Asking the user what type of Characters to include in their password:
  confirmLowerCase = confirm("Do you wish to include lowercase characters?");
  console.log("Lower Case " + confirmLowerCase);
  confirmUpperCase = confirm("Do you wish to include uppercase characters?");
  console.log("Upper Case " + confirmUpperCase);
  confirmNumbers = confirm("Do you wish to include numeric characters?");
  console.log("Numbers " + confirmNumbers);
  confirmSpecialCharacters = confirm("Do you wish to include special characters?");
  console.log("Special Characters " + confirmSpecialCharacters);
}
// If user does not give any responses/amswers:
if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialCharacters) {
  userChoices = alert("You must input your criteria's to generate a Password");
//Aray for 4x options confirmed:
} else if (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSpecialCharacters) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}
//Aray for 3x options confirmed:
else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacters) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmNumbers && confirmSpecialCharacters) {
  userChoices = lowerCase.concat(numbers, special);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmNumbers && confirmSpecialCharacters) {
  userChoices = upperCase.concat(numbers, special);
  console.log(userChoices);
}
//Aray for 2x options confirmed:
else if (confirmLowerCase && confirmUpperCase) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmNumbers) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmSpecialCharacters) {
  userChoices = lowerCase.concat(special);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmNumbers) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmSpecialCharacters) {
  userChoices = upperCase.concat(special);
  console.log(userChoices);
}
else if (confirmNumbers && confirmSpecialCharacters) {
  userChoices = numbers.concat(special);
  console.log(userChoices);
}
//Aray for 1x options confirmed:
else if (confirmLowerCase) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (confirmUpperCase) {
  userChoices = upperCase;
  console.log(userChoices);
}
else if (confirmNumbers) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (confirmSpecialCharacters) {
  userChoices = special;
  console.log(userChoices);
}
// Empty variable for the password lenght
var passwordBlank = [];
  
// Loop that will spit out a random selection:
for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}
// Join and return the password 
var password = passwordBlank.join("");
console.log("Your Pasword is: " + password);
return password;
}






  
// var userChoice = window.prompt("Do you wish to include lowercase characters?");
// // If user pressed Cancel, immediately end function
// if (!userChoice) {
//   return;
// }
// var userChoice = window.prompt("Do you wish to include uppercase characters?");
// // If user pressed Cancel, immediately end function
// if (!userChoice) {
//   return;
// }
// var userChoice = window.prompt("Do you wish to include numeric characters?");
// // If user pressed Cancel, immediately end function
// if (!userChoice) {
//   return;
// }
// var userChoice = window.prompt("Do you wish to include special characters?");
// // If user pressed Cancel, immediately end function
// if (!userChoice) {
//   return;
// }
// var password = generatePassword();
//     // var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     // var passwordLength = 12;
//     // var password = "";
//  for (var i = 0; i <= passwordLength; i++) {
//    var randomNumber = Math.floor(Math.random() * chars.length);
//    password += chars.substring(randomNumber, randomNumber +1);
//   }



// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// **DONE** WHEN prompted for the length of the password
// **DONE** THEN I choose a length of at least 8 characters and no more than 128 characters
// **DONE** WHEN asked for character types to include in the password
// **DONE** THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// var password=document.getElementById("password");

//  function generate() {
//     var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var passwordLength = 12;
//     var password = "";
//  for (var i = 0; i <= passwordLength; i++) {
//    var randomNumber = Math.floor(Math.random() * chars.length);
//    password += chars.substring(randomNumber, randomNumber +1);
//   }
//         document.getElementById("password").value = password;
//  }

// function copyPassword() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy");  
// }
