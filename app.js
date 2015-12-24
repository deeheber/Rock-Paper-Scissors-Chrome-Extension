//Declaring global variables, adding Event Listeners, Initializing innerHTML
var userScore = 0;
var computerScore = 0;

var userGuess = document.getElementsByClassName('userGuess');

for(var index = 0; index < userGuess.length; index++){
    userGuess[index].addEventListener("click", function(){playGame(this.id);});
}

var playAgainButton = document.getElementById('playAgain');
playAgainButton.addEventListener("click", initialize);

var clearScoresButton = document.getElementById('clearScores');
clearScoresButton.addEventListener("click", startOver);

window.addEventListener("load", initialize);

function initialize(){
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;

    playerChoice.innerHTML = "";
    computerChoice.innerHTML = "";
    result.innerHTML = "";
    result.removeAttribute("class");
    score.innerHTML = "";

    playAgainButton.style.visibility = "hidden";
    clearScoresButton.style.visibility = "hidden";
}

function playGame (choice) {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

    var userAnswer = choice;
    playerChoice.innerHTML = 'You: ' + userAnswer;

    var compAnswer = Math.random();

    //Convert computer's answer into rock, paper, or scissors
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

    if (userAnswer === compAnswer){
        result.innerHTML = "The result is a tie!";
        result.setAttribute("class", "yellow");
    }

    else if(userAnswer === "rock") {

        if(compAnswer === "scissors") {
            result.innerHTML = "rock wins";
            result.setAttribute("class", "green");
            userScore++;
        }

        else {
            result.innerHTML = "paper wins";
            result.setAttribute("class", "red");
            computerScore++;
        }
    }
    else if(userAnswer === "paper"){

        if(compAnswer === "rock"){
            result.innerHTML = "paper wins";
            result.setAttribute("class", "green");
            userScore++;
        }
        else{
            result.innerHTML = "scissors wins";
            result.setAttribute("class", "red");
            computerScore++;
        }
    }
    else {
        if(compAnswer === "rock"){
            result.innerHTML = "rock wins";
            result.setAttribute("class", "red");
            computerScore++;
        }
        else{
            result.innerHTML = "scissors wins";
            result.setAttribute("class", "green");
            userScore++;
        }
    }
    score.innerHTML = "You: " + userScore + " Computer: " + computerScore;
    playAgainButton.style.visibility = "visible";
    clearScoresButton.style.visibility = "visible";
}

//refresh the page
function startOver(){
    location.reload();
}

