// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays with possible inputs 
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// Function to ask the user how to make their password
function prompts() {
    var isValid = false;
    do {
      var length = prompt("Choose a password length between 8 and 128 characters");
      var askNumbers = confirm("Do you want your password to include numbers?");
      var askLowerCase = confirm("Do you want your password to include lower case letters?");
      var askUpperCase = confirm("Do you want your password to include upper case letters?");
      var askSpecial = confirm("Do you want your password to include special characters?");
      var responses = {
        length: length,
        askNumbers: askNumbers,
        askLowerCase: askLowerCase,
        askUpperCase: askUpperCase,
        askSpecial: askSpecial
      } 
      if((length < 8)||(length > 128))
      alert("Lenght must be between 8 and 128 characters!");
      else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
      alert("Must choose at least one type.");
      else
      isValid = true;
  
    } while(!isValid);
    return responses;
  }
  
  // Function to create password from recorded responses
  function generatePassword() {
    var passwordOptions = prompts();
    var characterCombo = [];
    var userPassword = "";
  
    if (passwordOptions.askNumbers) {
      for (var i of numbers)
      characterCombo.push(i);
    }
    if (passwordOptions.askLowerCase) {
      for (var i of lowerCase)
      characterCombo.push(i);
    }
    if (passwordOptions.askUpperCase) {
      for (var i of upperCase)
      characterCombo.push(i);
    }
    if (passwordOptions.askSpecial) {
      for (var i of special)
      characterCombo.push(i);
    }
  
    // Generate random index position from respones while restricting total postiomns to user defined length
    for (var i = 0; i < passwordOptions.length; i++) {
        userPassword  += characterCombo[Math.floor(Math.random() * characterCombo.length)];
      
    }
  
    return userPassword;
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
 
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
