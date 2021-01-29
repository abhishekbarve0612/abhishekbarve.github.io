const container = document.querySelector("#main-container");
var array = new Array(81);
var visited = new Array();
window.random = new Array();
let gameOverFlag = false
var score = 0;
function randomArray(){
  for (let i = 0; i < 10; i++) {
    var num = Math.floor(Math.random() * (80 - 0) + 0);
    window.random.push(num);
  }
}

function setContainer(){
  for (let count = 0; count < 9*9; count++) {
    let div = document.createElement("div");
    div.setAttribute("data-index", count);
    div.setAttribute("id", "cell_" + count);
    div.setAttribute("class", "cell");
    div.addEventListener("click", (e) => {
      if (gameOverFlag == true) return;
      var ele = parseInt(e.target.getAttribute("data-index"));
      if (visited.includes(ele) == false){
        if (window.random.includes(ele) == true) {
          gameOver("game over");
          return;
        }
        e.target.classList.add("visited");
        score++;
        var gscore = document.getElementById("gameScore");
        gscore.innerText = score;
        visited.push(ele);
        if (visited.length > 71){
          gameOver("win");
          return;
        }
      }
        
    });
    container.appendChild(div);
  }
}


function gameOver(msg){
  var newNode = document.createElement("h3");
  newNode.innerText = msg;
  var status = document.querySelector("#resultDisplay");
  status.innerHTML = "";
  revealBombs();
  status.appendChild(newNode);
}

function revealBombs() {
  var nodes = document.getElementsByClassName("cell");
  for (const node of nodes) {
    var num = parseInt(node.getAttribute("data-index"));
    if (window.random.includes(num) == true){
      node.classList.add("bombed");
    }
  }
  gameOverFlag = true;
}

function startGame() {
  visited = [];
  for (let i = 0; i < 81; i++) array[i] = i;
  randomArray();
  score = 0;
  container.innerHTML = "";
  var status = document.querySelector("#resultDisplay");
  status.innerHTML = "";
  setContainer();
}

startGame();