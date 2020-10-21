
// <1-fold START --- PALINDROME VERSION 1.0
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






// </1-fold END --- PALINDROME VERSION 1.0

// <1-fold START --- ALL FUNCTION
function stringRevesator(string) {
    var string = string;
    // check
    console.log("*** Funzione stringReversator output ***");
    console.log(string + " di lunghezza " + string.length);

    // STRING REVERSE GENERATOR
    var stringReverseArray = [];
    var stringReverse = "";

    // from the last letter to the first --> array
    for (var i = string.length - 1; i >= 0; i--) {
        // push in reverse index
        stringReverseArray.push(string[i]);

    }
    // check
    console.log(stringReverseArray);

    // from array to string
    for (var i = 0; i < stringReverseArray.length; i++) {
        stringReverse += stringReverseArray[i];
    }
    // check
    console.log(stringReverse);
    console.log("*** Funzione stringReversator output END ***");

    // *** result ***
    return stringReverse;
}

// </1-fold END --- ALL FUNCTION
