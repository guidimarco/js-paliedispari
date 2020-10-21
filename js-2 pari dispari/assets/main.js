
// <1-fold START --- PARI O DISPARI VERSION 1.0
console.log("Pari o dispari - Version 1.0:");

// VAR ASSIGNMENT
var userNumber; // user-number
var evenOrOdd; // user choise "pari" (even) or "dispari" (odd)
var userEvenOrOdd; // converted "pari" to 2 and "dispari" 1
var randomNumber; // generate random number
var sum;

// 1 --- ASK A NUMBER from 0 to 5
do {
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while (isNaN(userNumber) || userNumber <= 0 || userNumber > 5);

// check
console.log("Numero scelto dall'utente: " + userNumber);

// 2 --- ASK EVEN OR ODD
do {
    evenOrOdd = prompt("Pari o dispari? Scrivi pari o dispari").toLowerCase().trim();

    // CONVERT "PARI" TO 2 AND "DISPARI" TO 1
    if (evenOrOdd == "pari") {
        // "pari" to 2
        userEvenOrOdd = 2;
    } else if (evenOrOdd == "dispari") {
        // "dispari" to 1
        userEvenOrOdd = 1;
    }

} while (userEvenOrOdd != 2 && userEvenOrOdd != 1);

// check
console.log("Pari o dispari? " + evenOrOdd);

// 3 --- GENERATE A RANDOM NUMBER
randomNumber = random(1, 5);

//check
console.log("Numero random: " + randomNumber);

// 4 --- SUM USER-NUMBER AND RANDOM-NUMBER
sum = userNumber + randomNumber;

// check
console.log("Somma: " + sum);

// 5 --- FINAL CHECK: SUM IS EVEN? DOES USER CHOOSE EVEN?
if (areBothEvenOrOdd(userEvenOrOdd, sum)) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}



// </1-fold END --- PARI O DISPARI VERSION 1.0

// <1-fold START --- ALL FUNCTION
function isEven(number) { // if number it's even --> return "true"
    // even: default value
    var isEven = true;

    if (number % 2) {
        // odd --> is even? false
        isEven = false;
    }

    return isEven;
}

function random(min, max) { // generate a random number between min and max (includes)
    var number;
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

function areBothEvenOrOdd (n1, n2) { // return "true" if n1 and n2 are both even or odd
    var bothEvenOrOdd = true;

    if (isEven(n1) ^ isEven(n2)) {
        bothEvenOrOdd = false;
    }

    return bothEvenOrOdd;

}

// </1-fold END --- ALL FUNCTION
