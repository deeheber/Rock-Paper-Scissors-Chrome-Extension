//declare variables
var compAnswer;
var goButton = document.getElementById('go');
var playAgainButton = document.getElementById('playAgain');

playAgainButton.style.visibility = "hidden";

var userGuess = document.getElementsByClassName('userGuess');

for(var index = 0; index < userGuess.length; index++){
  userGuess[index].addEventListener("click", function(){getUserAnswer(this.id);});
}

document.getElementById('playAgain').addEventListener("click", refresh, false);
