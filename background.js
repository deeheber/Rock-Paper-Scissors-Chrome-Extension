//declare variables
var compAnswer;
var userAnswer;
var goButton = document.getElementById('go');
var playAgainButton = document.getElementById('playAgain');

goButton.style.visibility = "hidden";
playAgainButton.style.visibility = "hidden";

var userGuess = document.getElementsByClassName('userGuess');

for(var index = 0; index < userGuess.length; index++){
  userGuess[index].addEventListener("click", function(){getUserAnswer(this.id);});
}

document.getElementById('go').addEventListener("click", compare, false);
document.getElementById('playAgain').addEventListener("click", refresh, false);
