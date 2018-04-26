console.log("Hello!");
 //Set up for Hangman Game

 //An Array of Possible Selections for the player to guess. 

 var movie = ["momento", "prestige", "sincity", "theshining", "terminator", "alien", "aliens", "rambo", "jaws", "halloween", "goodfellas", "se7en", "hook", "jumanji", "gravity", "scream"];

 //An empty arrays that that holds players guesses and one that creats spaces for the string to appear to the player. as well as a  variable with a number for the amount guesses
 var playerGuess;
 //var playerGuessCorrect = [];
 var playerGuessIncorrect = [];
 var playerGuesses = [];
 var spaces = [];
 var numberOfGuesses = 11;
// var wins = 0;

 //Randomly select a movie from the array and store the selection in a new variable;
 
 var movieSelection = movie[Math.floor(Math.random() * movie.length)];

//runs function on keypress and stops once a movie has been selected and the spaces have been prntied to the screen. 
 window.onkeypress = function(event) {
    while(spaces ==! movieSelection.length){
        startGame();
    }
}

 //function that runs the game
function startGame(){
    
    //for loop that goes through the selected string and prints an underscore for every space in the string.
        for(var i = 0; i < movieSelection.length; i++)
        {
            spaces.push("_");
        
        //finds the spaces id in the html document and adds the text inside of the spaces ID
        var placeholderString = spaces.join(" ");
        document.getElementById("spaces").innerHTML = placeholderString;

        document.getElementById("numberOfGuesses").textContent = numberOfGuesses;
        }
}   

 
//logs user key press and checks to see if that key that was press is apart of the current string or not. 

//Funtion that runs the check based on the input from the user. 

document.onkeyup = function(event){
    console.log(playerInput);
    var playerInput = (event.key);
    console.log(playerInput);
    playerGuess = playerInput;
    var input = false;
    //loops through the previous guess to see if the current guess has already been made 
        for (var i = 0; i < playerGuesses.length; i++) {
                if (playerGuess === playerGuesses[i]){
                     input = true; 
                }
        }
        //most likly condition is the input has not been previously made. push the input to an array and check the player guess against the randomly selected movie. 
        if(!input){
            playerGuesses.push(playerGuess);
        //loops throught the movie selection agianst the player guess and if the charcter matches the movie selection then spaces gets a charcter instead of the _ 
            for(var i = 0; i < movieSelection.length; i++ ){
                if (playerGuess === movieSelection[i]){
                    spaces[i] = playerGuess;
                }
            }

        //our script watches for changes on these ids and updates the content as the player continutes to play. 

        document.getElementById("spaces").innerHTML = spaces.join(' ');
        document.getElementById("playerGuessIncorrect").innerHTML = playerGuesses;

        //makes the incorrect guesses take away 1 from the total of 10 guesses I have set up. 

        if(spaces.indexOf(playerGuess) === -1){
            numberOfGuesses --;
        }
            document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;
        // if the number of guesses hits 0 it alerts the user they lost the game. 
        if (numberOfGuesses === 0){
            alert("You ran out of Guess. Better Luck Next Time ;)");
            numberOfGuesses = 10;
            playerGuesses = [];
            spaces = [];
            startGame();
        }
        // if the spaces match the string movie selection alert you win! 
        if(spaces.join("") === movieSelection){
            alert("You Got It! Feel Free to Try Again :D");
            numberOfGuesses = 10;
            playerGuesses = [];
            spaces = [];
            
            startGame();
        }
    }


}





     /*for(var i = 0; i < movieSelection.length; i++){
        if(playerGuess ==! movieSelection.charAt(i)){
            numberOfGuesses --;
            document.getElementById("playerGuessIncorrect").textContent = playerGuessIncorrect.join(playerGuess);
        }else if(playerGuess === movieSelection.charAt(i)){
            document.getElementById("playerGuessCorrect").textContent = playerGuessCorrect.push(playerGuess);
        }else
        console.log("broken");
       
    }*/

    /*function checkGuess(){

        for(i = 0; i < movieSelection.length; i++){
            if(playerGuess !== movieSelection.charAt[i]){
                numberOfGuesses --;
                playerGuessIncorrect.push(playerGuess);
            }else if(playerGuess === movieSelection.charAt[i]){
                playerGuessCorrect.push(playerGuess);
            }else{
                console.log("broken");
        }
    }
    */


//window.onkeyup = startGame();