function randomNum(){
  var num = Math.floor(Math.random() * (20 - -20) + -20);
  return num;
}

function displayRandomNumber(){
  var node = document.querySelector("#num");
  node.innerText = randomNum();
}