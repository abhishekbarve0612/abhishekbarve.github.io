let randomImageArray = ["", "", "", "", ""];
let chosenFive = [1,2,3,4,5];
let selected = new Set();
function randomArray() {
  for (let index = 0; index < 5; index++) {
    var id = Math.floor(Math.random() * (200 - 10) + 10);
    randomImageArray[index] = "https://picsum.photos/id/" + id +"/200";
  }
}


var chosenOne = Math.floor(Math.random() * (5 - 1) + 1);
console.log(chosenOne + " <--------");
const resetBtn = document.querySelector("#reset");
const verifyBtn = document.querySelector("#btn");
  
const imgset = document.querySelector(".image-set")
function renderImages() {
  randomArray();
  chosenFive.sort(() => Math.random() - 0.5);
  for (const i of chosenFive) {
    var img = document.createElement("img");
    img.src = randomImageArray[i-1];
    img.setAttribute("data-ns-test", "img" + i);
    img.setAttribute("id", i);
    img.addEventListener("click", (e) => {
    
      console.log("Hello");
      if (e.target.classList.contains("selected")){
        e.target.classList.remove("selected");
        selected.delete(e.target.id);
      } else {
        e.target.classList.add("selected");
        selected.add(e.target.id);
      }
      
      console.log(e.target);
      console.log("Abhi-----" + selected + "----" + selected.size);
      if (selected.size == 2){
        verifyBtn.style.visibility = "visible";
      } else {
        verifyBtn.style.visibility = "hidden";
      }
      if (selected.size >= 1) resetBtn.style.visibility = "visible";
      else resetBtn.style.visibility = "hidden";
    });
    imgset.appendChild(img);
  }
  var img = document.createElement("img");
  img.src = randomImageArray[chosenOne-1];
  img.setAttribute("data-ns-test", "img" + chosenOne);
  img.addEventListener("click", (e) => {
    
    console.log("Hello");
    e.target.classList.add("selected");
    selected.add(e.target.id);
    console.log(e.target);
    if (selected.size == 2){
      verifyBtn.style.visibility = "visible";
    } else {
      verifyBtn.style.visibility = "hidden";
    }
    if (selected.size >= 1) resetBtn.style.visibility = "visible";
    else resetBtn.style.visibility = "hidden";
  });
  img.setAttribute("id", 6);
  imgset.appendChild(img);
}


renderImages();

const paraNode = document.querySelector("#para");

function verify() {
  if (selected.size != 2 ) return;
  if (selected.has(chosenOne.toString()) == true && selected.has("6") == true) {
    paraNode.innerText = "You are a human. Congratulations!";
  } else {
    console.log(selected.values + "=====" + chosenOne);
    for (let item of selected) console.log(item + " " + typeof item) ;
    paraNode.innerText = "We can't verify you as a human. You selected the non-identical tiles";
  }
  verifyBtn.style.visibility = "hidden";
}

function reset(){
  chosenOne = Math.floor(Math.random() * (5 - 1) + 1);
  let randomImageArray = ["", "", "", "", ""];
  let chosenFive = [1,2,3,4,5];
  let selected = new Set();
  verifyBtn.style.visibility = "hidden";
  resetBtn.style.visibility = "hidden";
  paraNode.innerText = "";
  imgset.innerHTML = "";
  renderImages();
}