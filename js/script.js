// initializing score to zero
let pScore = 0;
let cScore = 0;
// For get the option selected by the user 
function select(option){
    let options = ['rock','paper','scissor'];
    let compChoice = options[Math.floor(Math.random() * 3)];
    player = document.getElementById('player');
    computer = document.getElementById('computer');
    player.classList.add('animating');
    computer.classList.add('animating');
    setTimeout(() => {
        result(option,compChoice);
        player.src = "./images/"+ option +".png";
        computer.src = "./images/"+ compChoice +".png";
        player.classList.remove('animating');
        computer.classList.remove('animating');
    }, 3000);
}
// For making decision of winner and displaying winner message
function result(playerChoice,computerChoice){
    let display = "Choose any option";
    console.log(playerChoice+" "+computerChoice);
    resultDisplay = document.querySelector(".result");
    // For Same choice
    if(playerChoice == computerChoice){
        display = 'Match Draw';
    }
    // For player choosing rock
    if((playerChoice == 'rock')&&(computerChoice == 'scissor')){
        display = 'Player Wins!!!';
        pScore+=1;
    }else if(playerChoice == 'rock' && computerChoice == 'paper'){
        display = 'Computer Wins!!!';
        cScore+=1;
    }
    // For player choosing paper
    if(playerChoice == 'paper' && computerChoice == 'rock'){
        display = 'Player Wins!!!';
        pScore+=1;
    }else if(playerChoice == 'paper' && computerChoice == 'scissor'){
        display = 'Computer Wins!!!';
        cScore+=1;
    }
    // For player choosing scissor
    if(playerChoice == 'scissor' && computerChoice == 'paper'){
        display = 'Player Wins!!!';
        pScore+=1;
    }else if(playerChoice == 'scissor' && computerChoice == 'rock'){
        display = 'Computer Wins!!!';
        cScore+=1;
    }
    resultDisplay.innerHTML = display;
    updateScore(pScore,cScore);
}
// For updating the score
function updateScore(pScore,cScore){
    playerScore = document.getElementById('pScore');
    computerScore = document.getElementById('cScore');
    playerScore.innerHTML = "Player : " + pScore;
    computerScore.innerHTML = "Computer : " + cScore;
}