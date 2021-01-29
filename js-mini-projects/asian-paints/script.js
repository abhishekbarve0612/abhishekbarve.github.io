
function apply(){
  var block = document.querySelector('#block_id');
  var color = document.querySelector('#color_id');
  var iblock = document.getElementById(block.value);
  iblock.style.backgroundColor = color.value;
  for (let i = 1; i < 10; i++){
    if (parseInt(block.value) == i) continue;
    var oblock = document.getElementById(i);
    oblock.style.backgroundColor = "transparent";
  }
}

function reset(){
  for (let i = 1; i < 10; i++){
    var oblock = document.getElementById(i);
    oblock.style.backgroundColor = "transparent";
  }
}