
// First create input variables characters: 

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space for the Uppercase conversion

space = [];


var choices;

// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

// var for Uppercase conversion: 

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


// Password Generator Function: 

function generatePassword() {

    enter = parseInt(prompt("How many characters would you like your password to have? Choose 8 to 128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {

        enter = parseInt(prompt("You must choose a number between 8 and 128"));

    } else {

        confirmNumber = confirm("Would you like your password to contain numbers?");
        confirmCharacter = confirm("Would you like your password to contain special characters?");
        confirmUppercase = confirm("Would you like your password to contain Uppercase letters?");
        confirmLowercase = confirm("Would you like your password to contain Lowercase letters?");
    };

    // Else if for all negative choices: 

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }

    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    // created a variable called password as an array placeholder for user inputed length value
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    // According to Google and YouTube This joins the password array and changes it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// Sends the password value to the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
//I found MANY of these solutions from many hours of Google and YouTube research and chatting with classmates in the breakout rooms and still don't fully understand all of them.  I have a TON more to leaarn, but...it works!!!
