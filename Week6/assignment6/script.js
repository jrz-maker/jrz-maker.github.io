

function setGreeting() {
  var hour = new Date().getHours();
  var icon = document.getElementById("greetIcon");
  var text = document.getElementById("greetText");

  if (hour >= 6 && hour < 12) {
    icon.textContent = "🌅";
    text.textContent = "Good Morning — Park is opening for visitors";
  } else if (hour >= 12 && hour < 17) {
    icon.textContent = "☀️";
    text.textContent = "Good Afternoon — All enclosures active";
  } else if (hour >= 17 && hour < 21) {
    icon.textContent = "🌇";
    text.textContent = "Good Evening — Preparing night protocols";
  } else {
    icon.textContent = "🌙";
    text.textContent = "Good Night — Park on lockdown";
  }
}

window.addEventListener("load", setGreeting);

var alarmOn = false;

function toggleAlarm() {
  var btn = document.getElementById("alarmBtn");
  var msg = document.getElementById("alarmMsg");

  alarmOn = !alarmOn;

  if (alarmOn) {
    btn.textContent = "Deactivate Alarm";
    btn.classList.add("alarm-on");
    msg.textContent = "⚠ CONTAINMENT BREACH — ALL UNITS RESPOND";
  } else {
    btn.textContent = "Activate Alarm";
    btn.classList.remove("alarm-on");
    msg.textContent = "";
  }
}

document.getElementById("alarmBtn").addEventListener("click", toggleAlarm);

var cards = document.querySelectorAll(".dino-card");

cards.forEach(function(card) {
  card.addEventListener("mouseenter", function() {
    this.querySelector("h3").style.color = "#c8a33e";
  });

  card.addEventListener("mouseleave", function() {
    this.querySelector("h3").style.color = "";
  });
});

function toggleMenu() {
  var menu = document.getElementById("hiddenMenu");
  menu.classList.toggle("show");
}

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

var input = document.getElementById("dinoInput");
var hint = document.getElementById("focusHint");

input.addEventListener("focus", function() {
  hint.classList.add("visible");
});

input.addEventListener("blur", function() {
  hint.classList.remove("visible");
});

function toggleTodo(checkEl) {
  checkEl.classList.toggle("checked");
  var textEl = checkEl.nextElementSibling;
  textEl.classList.toggle("done-text");
}

function deleteTodo(btnEl) {
  var li = btnEl.parentElement;
  li.style.opacity = "0";
  setTimeout(function() { li.remove(); }, 300);
}
