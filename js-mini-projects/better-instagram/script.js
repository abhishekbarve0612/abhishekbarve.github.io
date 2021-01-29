
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("sender", ev.target.src);
  ev.dataTransfer.setData("senderid", ev.target.id);
}


function drop(ev) {
  ev.preventDefault();
  var receiversrc = ev.target.src;
  var receiverid = ev.target.id;
  var sendersrc = ev.dataTransfer.getData("sender");
  var senderid = ev.dataTransfer.getData("senderid");
  var sender = document.getElementById(senderid);
  var receiver = document.getElementById(receiverid);
  sender.src = receiversrc;
  receiver.src = sendersrc;
}