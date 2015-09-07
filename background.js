//declare variables
var compAnswer;
var userAnswer;
var goButton = document.getElementById('go');
var playAgainButton = document.getElementById('playAgain');

goButton.style.visibility = "hidden";
playAgainButton.style.visibility = "hidden";

document.getElementById('rock').addEventListener("click", function(){ var choice = this.id; getUserAnswer(choice);}, false);
document.getElementById('paper').addEventListener("click", function(){ var choice = this.id; getUserAnswer(choice);}, false);
document.getElementById('scissors').addEventListener("click", function(){ var choice = this.id; getUserAnswer(choice);}, false);

document.getElementById('go').addEventListener("click", compare, false);
document.getElementById('playAgain').addEventListener("click", refresh, false);
