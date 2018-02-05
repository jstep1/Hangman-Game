// Initialize array of character choices

var cpu = [['e', 'l', 'l', 'i', 'o', 't'], ['d', 'a', 'r', 'l', 'e', 'n', 'e'], ['a', 'n', 'g', 'e', 'l', 'a'], ['r', 'o', 'm', 'e', 'r', 'o'], ['w', 'h', 'i', 't', 'e', 'r', 'o', 's', 'e'], ['m', 'r', '.', ' ', 'r', 'o', 'b', 'o', 't'],
['l', 'e', 'o', 'n'], ['t', 'y', 'r', 'e', 'l', 'l'], ['p', 'h', 'i', 'l', 'l', 'i', 'p'], ['j', 'o', 'a', 'n', 'n', 'a'], ['g', 'i', 'd', 'e', 'o', 'n'], ['t', 'e', 'r', 'r', 'y'], ['t', 'r', 'e', 'n', 't', 'o', 'n'], ['m', 'o', 'b', 'l', 'e', 'y'], ['c', 'i', 's', 'c', 'o']
];

// Create starting values for each variable

var wins = 0;
var guesses = 13;
var guessedLetters = [];
var answer = null;
var wordArray = []
var word = [];

// Create a function for the computer to randomly choose a character (and do so)

var pick = function() {
    answer = cpu[Math.floor(Math.random()*cpu.length)];
    for(var i = 0; i < answer.length; i++) {

        word = word + "_ ";
        wordArray.push("_");
    
        }
}

pick();

var correct = function(a, b) {
    for(var i = 0; i < a.length; i++) {
        if(a[i] !== b[i])
            return false;
    }
    return true;
}

document.querySelector('#word').innerHTML = word;
document.querySelector('#left').innerHTML = guesses;


// Event code initialized. Each event will reduce the number of guesses left by 1 and will reset the necessary variables after each instance.

document.onkeyup = function(event) {

    var reset = function() {
        guesses = 13;
        guessedLetters = [];
        word = [];
        wordArray = [];
        pick();
        document.querySelector('#word').innerHTML = word;
        document.querySelector('#left').innerHTML = guesses;
        document.querySelector('#guess').innerHTML = guessedLetters;
    }

    var multipleLetters = function() {
        for(var i=0; i<answer.length; i++) {
            if(event.key === answer[i]) {
                wordArray[i] = answer[i];
            }
        }
    }

    guesses--;

//The following statement produces a string that will add a comma to the string unless it is the last input before a loss

    if(guesses > 1) {
            guessedLetters = guessedLetters + (event.key + ", ");
            document.querySelector('#guess').innerHTML = guessedLetters;
        }
    else {
            guessedLetters = guessedLetters + (event.key);
            document.querySelector('#guess').innerHTML = guessedLetters;
        }

// Logic to update variables of the function

// wordArray[(answer.indexOf(event.key))] = answer[(answer.indexOf(event.key))];

    if(answer.includes(event.key) && guesses > 0) {
        multipleLetters();
        word = wordArray.join(" ");
        word = word.toUpperCase();
        document.querySelector('#word').innerHTML = word;
        document.querySelector('#left').innerHTML = guesses;
    }
    else if(!answer.includes(event.key && guesses > 0)) {
        document.querySelector('#left').innerHTML = guesses;
    }
    
    if(correct(wordArray, answer) && guesses > 0) {
            alert("YOU WIN!");
            wins++;
            answer = answer.join("");
            document.querySelector('#character').innerHTML = answer.toUpperCase();
            reset();
            document.querySelector('#wins').innerHTML = wins;
            document.querySelector('#left').innerHTML = guesses;
        }
    else if(guesses === 0) {
        answer = answer.join("");
        alert("YOU LOSE! THE CORRECT ANSWER WAS: " + answer.toUpperCase());
        document.querySelector('#character').innerHTML = answer.toUpperCase();
        reset();
    }

    }