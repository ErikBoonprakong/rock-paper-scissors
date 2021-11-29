let computerSelection = ''
let playerSelection = ''
const rps = ['rock', 'paper', 'scissors']
const win = ['rockscissors', 'paperrock', 'scissorspaper']
const winText = ['Rock beats scissors', 'Paper beats rock', 'Scissors beats paper', 'Rock beats scissors']

function computerPlay(){
    let x = Math.floor(Math.random() * 3);
    return rps[x]
}

let pWins = 0
let cWins = 0

function playGame(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = window.prompt('Enter your weapon: ').toLowerCase();
    let playerIndex = rps.indexOf(playerSelection)
    console.log("You played: " + playerSelection + "\n" + "The computer played: " + computerSelection)
    if (playerSelection == computerSelection){
        console.log("It's a draw!");
        return 'draw'
    }
        else if (win.includes(playerSelection.concat(computerSelection))){
            console.log("You win! " + winText[playerIndex]);
            pWins++
            return pWins
        }
            else{
                console.log("You lose! " + winText[playerIndex + 1]);
                cWins++
                return cWins
            }
}


function game(){
    let i = 0
    pWins = 0
    cWins = 0
    while (i < 5){
        if (playGame(playerSelection, computerSelection) == 'draw'){
            ++i
            console.log("Player: " + pWins + "\n" + "Computer: " + cWins)
        }
            else{
                ++i
                console.log("Player: " + pWins + "\n" + "Computer: " + cWins)
            }
    }

    if (pWins == cWins){
        return "DRAW"
    }
        else if (pWins > cWins){
            return "YOU WIN!"
        }
            else{
                return "YOU LOSE!"
            }
}
console.log(game())