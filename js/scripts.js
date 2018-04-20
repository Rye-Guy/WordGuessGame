console.log("Hello!");
 //Set up for Hangman Game

 //An Array of Possible Selections for the player to guess. 

 var movie = ["back to the future", "star wars", "pulp fiction", "momento", "the prestige", "sin city", "the shining", "full metal jacket", "the terminator", "alien", "first blood" ];

 //An empty arrays that that holds players guesses and one that creats spaces for the string to appear to the player. as well as a  variable with a number for the amount guesses
 var playerGuess = [];
 var playerGuessCorrect = [];
 var playerGuessIncorrect = [];
 var spaces = []
 var numberOfGuesses = 10;

 //Randomly select a movie from the array and store the selection in a new variable;
 var movieSelection = movie[Math.floor(Math.random() * movie.length)];


 //function that runs the game
function startGame(){


    //for loop that goes through the selected string and prints an underscore for every space in the string.
        for(var i = 0; i < movieSelection.length; i++)
        {
            spaces.push("_");
        }
        //finds the spaces id in the html document and adds the text inside of the spaces ID
        document.getElementById("spaces").textContent = spaces.join(" ");

        document.getElementById("numberOfGuesses").textContent = numberOfGuesses;
        
}
//logs user key press and checks to see if that key that was press is apart of the current string or not. 



document.onkeyup = function(event){
    playerGuess = event.key;

    function checkGuess(){
        if(playerGuess ==! movieSelection.indexOf(playerGuess)){
            numberOfGuesses --;
            document.getElementById("playerGuessIncorrect").textContent = playerGuess;
        }else if(playerGuess === movieSelection.indexOf(playerGuess)){
            document.getElementById("playerGuessCorrect").textContent = playerGuess;
        }else
        console.log("broken");
    }
    checkGuess();   
}












startGame();



//window.onkeyup = startGame();