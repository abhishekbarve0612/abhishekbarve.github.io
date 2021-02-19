
let number = "";
let result = "";
let operation = "";
var flag = false;
isComputed = false;
const display = document.querySelector("#input");
display.value = "";

function numberClick(e) {
  var num = e.innerText;
  number += num;
  display.value = number;
}

function symbolClicked(e){
  console.log(e);
  var symbol = e.innerText;
  if (symbol == "^") number += "**";
  else 
  number += symbol;
  display.value = number;
}

function compute(num){
  return eval(num);
}

function showResult(e) {
  console.log("Show esult");
  console.log(result);
  result = compute(number);
  console.log(result);
  display.value = result;
  number = "";
  isComputed = true;
}

function reset(e){
  number = ""
  display.value = "";
  result = "";
}