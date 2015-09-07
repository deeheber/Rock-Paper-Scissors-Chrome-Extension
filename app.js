//Get user's answer and check to make sure it's valid
function getUserAnswer (choice) {

    playerChoice.innerHTML = 'Player: ' + choice;

    //Disable user choice buttons
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

     //Enable go button
     goButton.disabled = false;

     //Make go button visible
     goButton.style.visibility = "visible";

     userAnswer = choice;
     console.log(userAnswer);
     return userAnswer;
 }

 //Compare computer's answer to the user's answer to see who won
function compare (){

    //generate computer answer
    compAnswer = Math.random();

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
        goButton.disabled = true;
        playAgainButton.style.visibility = "visible";
    }

    else if(userAnswer === "rock") {

        if(compAnswer === "scissors") {
            result.innerHTML = "rock wins";
            goButton.disabled = true;
            playAgainButton.style.visibility = "visible";
        }
        else {
            result.innerHTML = "paper wins";
            goButton.disabled = true;
            playAgainButton.style.visibility = "visible";
        }
    }
    else if(userAnswer === "paper"){

        if(compAnswer === "rock"){
            result.innerHTML = "paper wins";
            goButton.disabled = true;
            playAgainButton.style.visibility = "visible";
        }
        else{
            result.innerHTML = "scissors wins";
            goButton.disabled = true;
            playAgainButton.style.visibility = "visible";
        }
    }
    else if (userAnswer === "scissors"){
        if(compAnswer === "rock"){
            result.innerHTML = "rock wins";
            goButton.disabled = true;
            playAgainButton.style.visibility = "visible";
        }
        else{
            result.innerHTML = "scissors wins";
            goButton.disabled = true;
            playAgainButton.style.visibility = "visible";
        }
    }
}

//refresh the page
function refresh(){
    location.reload();
}

