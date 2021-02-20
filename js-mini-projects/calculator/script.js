let expression = "";
let result = "";
const display = document.querySelector("#input");
display.value = "";

// function numberClick(e) {
//   var num = e.innerText;
//   number += num;
//   display.value = number;
// }

function buttonClicked(e){
  console.log(e);
  var symbol = e.innerText;
  if (symbol == "^") expression += "**";
  else 
  expression += symbol;
  display.value = expression;
}



function showResult(e) {
  console.log("Show result");
  console.log(result);
  result = eval(expression);
  console.log(result);
  display.value = result;
  expression = "";
}

function reset(e){
  expression = ""
  display.value = "";
  result = "";
}