let currentPlayer = "X";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameOver = false;

const currentP = document.getElementById("current-player");
const statusDisplay = document.getElementById("game-status");

let gameState = ["", "", "", "", "", "", "", "", ""];

function changePlayer(){
  if (currentPlayer == "X"){
    currentPlayer = "O";
  } 
  else {
    currentPlayer = "X";
  }
  currentP.innerText = currentPlayer;
}

function play(e){
  if (gameOver == false){
    e.innerText = currentPlayer;
    gameState[e.id] = currentPlayer;
    console.log(gameState);
    checkResult();
  }
}

function checkResult(){
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];

    let a = gameState[condition[0]];
    let b = gameState[condition[1]];
    let c = gameState[condition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.innerHTML = message("win");
    gameOver = true;
    return;
  }
  if (gameState.includes("") == false){
    statusDisplay.innerHTML = message("draw");
    gameOver = true;
  }
  
  changePlayer();
}

function message(msg){
  if (msg == "win") return "Player " + currentPlayer + " Wins!";
  else return "The Match resulted in a Draw!"
}

function reset() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  var cells = document.querySelectorAll(".cell");
  for (const cell of cells) {
      cell.innerText = "";
  }
  statusDisplay,innerText = "";
}