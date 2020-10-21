
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

// CONFRONT USER-WORD WITH THE REVERSE
if (areSameString(userWord, userWordReverse)) {
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita NON è palindroma");
}





// </1-fold END --- PALINDROME VERSION 1.0

// <1-fold START --- ALL FUNCTION
// FOR REVERSE A STRING
function stringRevesator(string) {
    // // check
    // console.log("*** Funzione stringReversator output ***");
    // console.log(string + " di lunghezza " + string.length);

    // STRING REVERSE GENERATOR
    var stringReverseArray = [];
    var stringReverse = "";

    // from the last letter to the first --> array
    for (var i = string.length - 1; i >= 0; i--) {
        // push in reverse index
        stringReverseArray.push(string[i]);

    }
    // // check
    // console.log(stringReverseArray);

    // from array to string
    for (var i = 0; i < stringReverseArray.length; i++) {
        stringReverse += stringReverseArray[i];
    }
    // // check
    // console.log(stringReverse);
    // console.log("*** Funzione stringReversator output END ***");

    // *** result ***
    return stringReverse;
}

// FOR CONFRONT 2 STRING --> "true" if same string
function areSameString(string1, string2) {
    // check
    console.log("Sto comparando " + string1 + " con " + string2);

    // VAR ASSIGNMENT
    var stringCompareControl = true;

    // first check: string-length-compare
    if (string1.length == string2.length) {
        // same-length-string

        // // check
        // console.log("hanno stessa lunghezza");

        // cycle for compare letter with same index
        for (var i = 0; i < string1.length; i++) {
            // IF one letter is different
            if (string1[i] != string2[i]) {
                stringCompareControl = false;

                // // check
                // console.log(i + "esima lettera diversa");
            } else {
                // // check
                // console.log(i + "esima lettera uguale");
            }
        }
    } else {
        // not-same-length-string
        stringCompareControl = false;

        // // check
        // console.log("Non hanno stessa lunghezza");
    }

    // check
    console.log(stringCompareControl);
    return stringCompareControl;
}

// </1-fold END --- ALL FUNCTION
