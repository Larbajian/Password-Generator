var charLength = 8;
var inputChoiceArr = []; //variable for all symbols that can be used in pw

var specCharArr = ["!","@","#","$","%","^","&","*","+","=","/","?"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
var numArr = ["0","1","2","3","4","5","6","7","8","9"];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
//function must check of prompts are done right before generating a passworf
function writePassword() {
    var correctPrompts = getPrompt(); //boolean - checks of prompts were done correctly then creates password

    if(correctPrompts) {

  var returnedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = returnedPassword;

} else {
    passwordText.value = "";
}
}

function generatePassword () {
    var password = "";
    //for loop goes for as many characters as user indicates between 8-128
    for (var i = 0; i < charLength; i++){
        var randomChar = Math.floor (Math.random() * inputChoiceArr.length);
        password = password + inputChoiceArr[randomChar]; //randomChar is a symbol from chosen from inpudChoiceArr 0-#.999
    }
    return password; //this value is returned and stored to var returnedPassowrd
}


//prompt to choose # of characters in password - 8-128
function getPrompt() {
    charLength = parseInt(prompt("How many characters do you want your passoword to be? Choose between 8 - 128."));

    //"if character length is not a number, or less than 8, or greater than 128" making sure this is all false. if any are true, user is alerted.
    if (isNaN (charLength) || charLength <8 || charLength >128) {
        alert ("Password must be between 8 and 128 characters long and it must be entered in numerical form.");
        return false; 

    }
    // prompt to include lowercase letters (boolean) so "ok or cancel" works here. no text box. 
    // if true, feed lowercasearray in to input choice array

     if (confirm("Would you like to use lowercase letters?")) {
        inputChoiceArr = inputChoiceArr.concat(lowerCaseArr);
     }
    

      // prompt to include upper letters (boolean) so "ok or cancel" works here. no text box. 
    // if true, feed upperrcasearray in to input choice array

     if (confirm("Would you like to use uppercase letters?")) {
        inputChoiceArr = inputChoiceArr.concat(upperCaseArr);
     }
    

      // prompt to include spec characters (boolean) so "ok or cancel" works here. no text box. 
    // if true, feed special character in to input choice array

     if (confirm("Would you like to use special characters?")) {
        inputChoiceArr = inputChoiceArr.concat(specCharArr);
     }

     // prompt to include numbers (boolean) so "ok or cancel" works here. no text box. 
    // if true, feed numbers in to input choice array

     if (confirm("Would you like to use numbers?")) {
        inputChoiceArr = inputChoiceArr.concat(numArr);
     }
    
     return true;

    

}


