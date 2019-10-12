let userScore = 0;
let computerScore = 0;

const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const resultH2 = document.querySelector('.result > h2')
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const choiceNumber  = Math.floor(
        Math.random() * 3
    );
    return choices[choiceNumber];
}

function win(computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultH2.innerHTML = `Computer chose ${ computerChoice }, you winned!`;
}

function lose(computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultH2.innerHTML = `Computer chose ${ computerChoice }, so you lost :(`;
}

function draw(computerChoice) {
    resultH2.innerHTML = `Computer chose ${ computerChoice }, its seems like a draw`;
}

function toWord(choice) {
    switch (choice) {
        case 'r':
            return 'rock';
        case 'p':
            return 'paper';
        case 's':
            return 'scissors';
    }
}

function game(userChoice, computerChoice) {
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(toWord(computerChoice));
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(toWord(computerChoice));
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(toWord(computerChoice));
            break;
    }
}

function main () {
    rockDiv.addEventListener('click', () => {
        game("r", getComputerChoice());
    });

    paperDiv.addEventListener('click', () => {
        game("p", getComputerChoice());
    });

    scissorsDiv.addEventListener('click', () => {
        game("s", getComputerChoice());
    });
}

main();