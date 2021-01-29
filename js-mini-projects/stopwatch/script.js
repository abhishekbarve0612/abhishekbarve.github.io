
var start = document.querySelector("#start");
var pause = document.querySelector("#pause");
var reset = document.querySelector("#reset");
var stopWatch = document.querySelector("#stp");
var startTime = false, stopTime = null;
var min = 0, sec = 0, hr = 0;
var pauseflg = false;

pause.disabled = true;
reset.disabled = true;

start.addEventListener("click", () => {
    if (stopTime == null) {
      stopTime = false;
      timer();
      start.disabled = true;
      pause.disabled = false;
      reset.disabled = false;
    } 
})

pause.addEventListener("click", () => {
  if (stopTime == false && pauseflg == false) {
    stopTime = true;
    pause.innerHTML = "Continue";
    pauseflg = true;
  } else if (stopTime == true && pauseflg == true){
    stopTime = false;
    pause.innerHTML = "Pause";
    pauseflg = false;
    timer();
  }
})

reset.addEventListener("click", () => {
  sec = 0;
  min = 0;
  hr = 0;
  pause.innerHTML = "Pause";
  stp.innerHTML = "00:00:00";
  pauseflg = false;
  startTime = false;
  stopTime = null;
  start.disabled = false;
  pause.disabled = true;
  reset.disabled = true;
  timer();
})

function timer() {
  if (stopTime == false) {
  sec = parseInt(sec);
  min = parseInt(min);
  hr = parseInt(hr);

  sec++;

  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hr++;
    min = 0;
    sec = 0;
  }

  if (sec < 10 || sec == 0) {
    sec = '0' + sec;
  }
  if (min < 10 || min == 0) {
    min = '0' + min;
  }
  if (hr < 10 || hr == 0) {
    hr = '0' + hr;
  }

  stp.innerHTML = hr + ':' + min + ':' + sec;

  setTimeout("timer()", 1000);
}
}

