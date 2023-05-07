// Assignment Code
var generateBtn = document.querySelector("#generate");

//USER INPUT
this.user_input.limit_val = window.prompt("Enter the limit of your password \nPls enter from value 8 to 128")
console.log("limit_val = ",this.user_input.limit_val)

// if (!this.user_input.limit_val) {
//   return;
// }
if((this.user_input.limit_val < 8 && this.user_input.limit_val > 128) || this.user_input.limit_val.length == 0){
  window.alert("Please type a number between 8 TO 128")
  this.prompt_input()
}

this.user_input.uppercase_val = window.confirm("Do you want to include UPPERCASE in your password?")
console.log("uppercase_val  = ",this.user_input.uppercase_val)               

this.user_input.lowercase_val = window.confirm("Do you want to include LOWERCASE in your password?")
console.log("LOWERCASE -VAL = ",this.user_input.uppercase_val) 

this.user_input.number_val = window.confirm("Do you want to include NUMBER in your password?")
console.log("NUMBER VAL = ",this.user_input.uppercase_val) 

this.user_input.symbol_val = window.confirm("Do you want to include SYMBOL in your password?")
console.log("SYMBOL VAL = ",this.user_input.uppercase_val) 

if(!this.user_input.uppercase_val && !this.user_input.lowercase_val && !this.user_input.number_val && !this.user_input.symbol_val){
  window.alert("PLEASE SELECT ATLEAST 1 CRITERIA TO GENERATE PASSWORD")
  this.prompt_input()
}

let password_gen_obj = {
  final_password :'',
  user_input:{limit_val :'',uppercase_val:'',lowercase_val:'',number_val:'',symbol_val:''},
},
main: function () {
  this.prompt_input();
},
};



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
