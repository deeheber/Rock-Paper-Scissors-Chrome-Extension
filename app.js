//Initial set up and adding Event Listeners to buttons
window.addEventListener("load", initialize);

var playAgainButton = document.getElementById('playAgain');

function initialize(){
    playAgainButton.style.visibility = "hidden";
    playAgainButton.addEventListener("click", refresh);

    var userGuess = document.getElementsByClassName('userGuess');

    for(var index = 0; index < userGuess.length; index++){
      userGuess[index].addEventListener("click", function(){getUserAnswer(this.id);});
    }
}

//Get user's answer and check to make sure it's valid
function getUserAnswer (choice) {

    playerChoice.innerHTML = 'You: ' + choice;

    //Disable user choice buttons
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

    var userAnswer = choice;
    compare(userAnswer);
 }

 //Compare computer's answer to the user's answer to see who won
function compare (userAnswer){

    //generate computer answer
    var compAnswer = Math.random();

    //Convert computer's answer into rock, paper, or scissors
    console.log('Computer: ' + compAnswer);

    if(compAnswer < 0.33){
        compAnswer = 'rock';
    }
    else if(compAnswer < 0.66){
        compAnswer = 'paper';
    }
    else {
        compAnswer = 'scissors';
    }

    computerChoice.innerHTML = 'Computer: ' + compAnswer;

    //compare the user answer to the computer answer
    if (userAnswer === compAnswer){
        result.innerHTML = "The result is a tie!";
        playAgainButton.style.visibility = "visible";
    }

    else if(userAnswer === "rock") {

        if(compAnswer === "scissors") {
            result.innerHTML = "rock wins";
            playAgainButton.style.visibility = "visible";
        }
        else {
            result.innerHTML = "paper wins";
            playAgainButton.style.visibility = "visible";
        }
    }
    else if(userAnswer === "paper"){

        if(compAnswer === "rock"){
            result.innerHTML = "paper wins";
            playAgainButton.style.visibility = "visible";
        }
        else{
            result.innerHTML = "scissors wins";
            playAgainButton.style.visibility = "visible";
        }
    }
    else if (userAnswer === "scissors"){
        if(compAnswer === "rock"){
            result.innerHTML = "rock wins";
            playAgainButton.style.visibility = "visible";
        }
        else{
            result.innerHTML = "scissors wins";
            playAgainButton.style.visibility = "visible";
        }
    }
}

//refresh the page
function refresh(){
    location.reload();
}

