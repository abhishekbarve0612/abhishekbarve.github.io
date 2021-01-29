const container = document.querySelector("#main-container");
var array = new Array(36);
var visited = new Array();
var bombs = new Array();
let score = 0;
function randomArray(){
  for (let i = 0; i < 20; i++) {
    var num = Math.floor(Math.random() * (80 - 0) + 0);
    array[num] = 1;
    bombs.push(num);
  }
}

function increaseScore(){
  score++;
  var gscore = document.getElementById("gameScore");
  gscore.innerText = score;
}

function setContainer(){
  for (let count = 0; count < 9*9; count++) {
    let div = document.createElement("div");
    div.setAttribute("data-index", count);
    div.setAttribute("class", "cell");
    div.id = "cell_"+count;
    console.log(div);
    div.addEventListener("click", fun(count));
    container.appendChild(div);
  }
}

function fun(count) {
  var cellid = "cell_" + count;
  console.log(cellid);
  var element2 = document.getElementById(cellid);
  var ele = parseInt(element2.getAttribute("data-index"));
      if (visited.includes(ele) == false){
        if (array[ele] == 1) {
          gameOver("You Lost!!!");
          return;
        }
        element.classList.add("visited");
        increaseScore();
        visited.push(ele);
        if (visited.length > 10){
          gameOver("You Won!");
          return;
        }
      }
}


function gameOver(msg){
  var newNode = document.createElement("h3");
  newNode.innerText = msg;
  var status = document.querySelector("#game-status");
  status.innerHTML = "";
  revealBombs();
  status.appendChild(newNode);
}

function revealBombs() {
  var nodes = document.getElementsByClassName("cell");
  for (const node of nodes) {
    var num = parseInt(node.getAttribute("data-index"));
    if (bombs.includes(num) == true){
      node.classList.add("bombed");
    }
    node.removeEventListener("click", fun(num));
  }
}

function startGame() {
  visited = [];
  score = 0;
  array.fill(-1);
  randomArray();
  container.innerHTML = "";
  var status = document.querySelector("#game-status");
  status.innerHTML = "";
  setContainer();
}

startGame();