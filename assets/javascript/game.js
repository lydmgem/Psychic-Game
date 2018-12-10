// --variables--
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesRem = 10;
var guessedLetters = [];
var selectedLetter = letters[Math.floor(Math.random() * letters.length)];

// --where to record user input and guesses decreases--
document.onkeyup = function(event) {
    var userGuess = event.key;
    guessesRem--;
    document.getElementById("guess").innerHTML = guessesRem;

// --I tried figuring out how to exclude non-alphabetical keys from being logged, was not successful.. this was my attempt--
    if (letters.indexOf(userGuess) < 0 || letters.indexOf(userGuess) > 26) {
        false;
    } else {
        guessedLetters.push(userGuess);
        document.getElementById("your-guess").innerHTML = guessedLetters;
    }
// --if guessed correctly, scores of wins increases--
    if (userGuess === selectedLetter) {
        wins++;
        document.getElementById("win").innerHTML = wins;
        guessedLetters = [];
        guessesRem = 10;
        selectedLetter = letters[Math.floor(Math.random() * letters.length)];
    }

    // --if user reaches 0, losses adds a point and resets guesses to 10--
    if (guessesRem === 0) {
        losses++;
        document.getElementById('loss').innerHTML = losses;
        guessesRem = 10;
        guessedLetters = [];
        selectedLetter = letters[Math.floor(Math.random() * letters.length)];
    }
}