const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const date = new Date();
  let hour = date.getHours(); // for line 13 to work.
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // hour = hour > 12? hour - 12 : hour; this is 0 to 24 hours format.
  hourEl.innerHTML = hour;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  ampmEl.innerHTML = ampm;

  setTimeout(updateClock, 1000);
}
updateClock();
