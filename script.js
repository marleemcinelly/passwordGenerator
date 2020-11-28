// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Pool of available characters
var lcAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capsAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChara = [0,1,2,3,4,5,6,7,8,9];
var spChara = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~"];

var lcLength = lcAlpha.length;
var ucLength = capsAlpha.length;
var ncLength = numChara.length;
var scLength = spChara.length;

// The actual meat of getting this password printed
function writePassword(event) {

  console.log(event);

  // String of prompts to set the password generation variables
  var length = prompt("How long should your password be? (8-128 characters supported)")
      
  if (length >= 8 && length <= 128) {

    var uc = confirm("Include upper case characters?")
      if (uc == true) {
        alert("Your password will include upper case and lower case characters.");
        console.log(uc);

      } else {
        alert("Your password will only include lower case characters.");
        console.log(uc);
      };
    
    var num = confirm("Include numbers?")
      if (num == true) {
        alert("Your password will include numbers.");
        console.log(num);
      } else {
        alert("Your password will not include numbers.")
        console.log(num);
      };
    
    var spc = confirm("Include special characters? i.e: !@#$%^&*()_+~")
      if (spc == true) {
        alert("Your password will include special characters.");
        console.log(spc);
      } else {
        alert("Your password will not include special characters.");
        console.log(spc);
      };

    }   

  else {

    alert("Invalid length. Please enter a password length between 8 and 128.");
    return
  };

  // Setting up an array function using the triggered booleans to generate the available character set for the user's password
  var charSet = [];
    charSet = charSet.concat(lcAlpha);
    if (uc == true) {
      charSet = charSet.concat(capsAlpha);
    }
    if (num == true) {
      charSet = charSet.concat(numChara);
    }
    if (spc == true) {
      charSet = charSet.concat(spChara);
    }
    console.log(charSet); 

  // Generating the user's password within the password object
  var userPass = [x]
    for (var x = 0; x < length; x++) {
      var randNum = Math.floor(Math.random() * charSet.length);
      userPass = userPass.concat(charSet[randNum]);
      console.log(charSet[randNum]);
    }

  // ... and inserting the generated password into the password ID in our HTML
  document.querySelector("#password").textContent = userPass.join("");

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
