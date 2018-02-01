// Initialize array of character choices

var cpu = [['e', 'l', 'l', 'i', 'o', 't'], ['d', 'a', 'r', 'l', 'e', 'n', 'e'], ['a', 'n', 'g', 'e', 'l', 'a'], ['r', 'o', 'm', 'e', 'r', 'o'], ['w', 'h', 'i', 't', 'e', 'r', 'o', 's', 'e'], ['m', 'r', '.', ' ', 'r', 'o', 'b', 'o', 't'], ['l', 'e', 'o', 'n'], ['t', 'y', 'r', 'e', 'l', 'l'], ['p', 'h', 'i', 'l', 'l', 'i', 'p'], ['j', 'o', 'a', 'n', 'n', 'a'], ['g', 'i', 'd', 'e', 'o', 'n'], ['t', 'e', 'r', 'r', 'y'], ['t', 'r', 'e', 'n', 't', 'o', 'n'], ['m', 'o', 'b', 'l', 'e', 'y'], ['c', 'i', 's', 'c', 'o']];

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

    if(answer.includes(event.key) && guesses > 0) {
            wordArray[[answer.indexOf(event.key)]] = answer[[answer.indexOf(event.key)]];
            document.querySelector('#word').innerHTML = word;
            document.querySelector('#left').innerHTML = guesses;
        }
    else if(guesses === 0 && event.key !== answer) {
            alert("MR. ROBOT OUTSMARTED YOU... TRY AGAIN!");
            document.querySelector('#left').innerHTML = guesses;
            reset();
        }
    else {
        document.querySelector('#left').innerHTML = guesses;
    }
    }
    // else {
    //         alert("CONGRATULATIONS! YOU WON!");
    //         wins++;
    //         reset();
    //         document.querySelector('#wins').innerHTML = wins;
    //         document.querySelector('#left').innerHTML = guesses;
    //     }
      
    // }