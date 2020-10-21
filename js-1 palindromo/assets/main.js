
// <1-fold START --- PALINDROME VERSION 1.0 --- create a reverse word and check if are the same!
console.log("Palindrome Version 1.0:");

// VAR ASSIGNMENT
var userWord;
var userWordReverse;

// ASK A WORD
userWord = prompt("Inserisci una parola").toLowerCase().trim();
// check
console.log(userWord);

// REVERSE USER-WORD
userWordReverse = stringRevesator(userWord);
// check
console.log("Parola al contrario: " + userWordReverse);

// CONFRONT USER-WORD WITH THE REVERSE
if (areSameString(userWord, userWordReverse)) {
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita NON è palindroma");
}


// </1-fold END --- PALINDROME VERSION 1.0

// <1-fold START --- ALL FUNCTION

// GENERATE A REVERSE STRING
function stringRevesator(string) {
    // // *** check ***
    // console.log("*** Funzione stringReversator output ***");
    // console.log(string + " di lunghezza " + string.length);

    // var assignment
    var stringReverse = "";

    // STRING REVERSE GENERATOR
    // take letters from last to first and concatenate in the reverse-string
    for (var i = string.length - 1; i >= 0; i--) {
        // push in reverse index
        stringReverse += string[i]
    }

    // // *** check ***
    // console.log(stringReverse);
    // console.log("*** Funzione stringReversator output END ***");

    // *** result ***
    return stringReverse;
}

// FOR CONFRONT 2 STRING --> "true" if same string, "false" otherwise (default)
function areSameString(string1, string2) {
    // // check
    // console.log("*** Output function areSameString ***");
    // console.log("Sto comparando " + string1 + " con " + string2);

    // var assignment
    // sentinel var --> default value: false
    var stringCompareControl = false;

    // first check: string-length-compare
    if (string1 == string2) {
        stringCompareControl = true;
    }

    // // check
    // console.log("Sono la stessa parola? " + stringCompareControl);
    // console.log("*** fine areSameString ***");
    return stringCompareControl;
}

// </1-fold END --- ALL FUNCTION
