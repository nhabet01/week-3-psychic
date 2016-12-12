$(document).ready(function(){

    // Array of possible computer choices
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "x", "w", "y", "z" ];

    // Set ComputerPick variable equal to a random choice from the computerChoice array.
    // This pick will remain the same for up to 9 tries so executed prior to document.onkeyup
    function ComputerPick(){
       return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    } 

    var newComputerPick = ComputerPick(); //created a variable (newComputerPick) that is assigned the value from the function; wasn't clear from the inclass exercises, but believe this is correct.
    console.log("the comp picked: " + newComputerPick);

    // Variables for tracking our wins, losses, Guesses left, and guesses remaining. 
      var wins = 0;
      var losses = 0;
      var guessesLeft = 9;
      var playerGuess=[];

    // created a function called myFunction that simply deletes the array of guessed letters
    function myFunction() {
       delete playerGuess;
    }   
          // Injecting the HTML into our div and updating the game information on our page.
          
    var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Your Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses so far: " + playerGuess + "</p>";

     // Calling this here, spits out the initial values before starting the game. Realized that could have put initial values in the html div as text since I have the "var=html" set to replace all the text.
     document.querySelector("#psychicgame").innerHTML = html;
     // could have also made this a function function myFunction() {  document.querySelector("#psychicgame").innerHTML = "html"; }


     
     

      // When the user presses a key, it will run the following function:
      document.onkeyup = function(event) {

      // Determine which key was pressed, make it lowercase, and set it to the userGuess variable.
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      console.log(userGuess);

    if (event.key.match(/^[A-Za-z]$/)) {

        if (playerGuess.indexOf(userGuess) >= 0) {
        return;
        }

        if (userGuess === newComputerPick)  {
            wins++;
            guessesLeft=9;
          console.log("wins= " + wins);
            newComputerPick=ComputerPick();
          console.log("the comp picked: " + newComputerPick);
            myFunction();
          playerGuess=[];
          // document.querySelector("#psychicgame").innerHTML = html; ...doesn't update when placed here.
                  
        }
       
        else {
            guessesLeft--;
             // Add userGuess element to PlayerGuess array using push commad
            playerGuess.push(userGuess); 
            console.log(playerGuess);
        }

        // document.querySelector("#psychicgame").innerHTML = html; ...doesn't update when placed here

        if (guessesLeft===0) {
            losses++;
          console.log("losses= " + losses);
            guessesLeft=9;
            newComputerPick=ComputerPick();
          console.log("the comp picked: " + newComputerPick);
            myFunction();
          playerGuess=[];
        }
        // Had to re-write this section of code at the end of all If statements because it was not updating the page withing the If's.  Really not sure why this is, but doing it this way works so leaving as is. From my reading on "if" statements, the document.querrySelector command should work like any other withing an "if" statement.
        var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Your Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses so far: " + playerGuess + "</p>";
        document.querySelector("#psychicgame").innerHTML = html;

    }

    }













})

