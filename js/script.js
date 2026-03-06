document.addEventListener("DOMContentLoaded", function(){

/* ---------------------------
   HERO TEXT ANIMATION
---------------------------- */

const mainText = "Build your skill with us";

const roles = [
"Java Developer",
"Python Developer",
"GenAI Developer",
"Frontend Developer",
"Data Analyst",
"Data Scientist"
];

const mainElement = document.getElementById("mainText");
const roleElement = document.getElementById("roleText");

let roleIndex = 0;
let charIndex = 0;

if(mainElement && roleElement){

mainElement.innerText = mainText;

function typeRole(){

if(charIndex < roles[roleIndex].length){

roleElement.innerHTML += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeRole,80);

}

else{

setTimeout(eraseRole,1500);

}

}

function eraseRole(){

if(charIndex > 0){

roleElement.innerHTML = roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseRole,40);

}

else{

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

setTimeout(typeRole,300);

}

}

typeRole();

}


/* ---------------------------
   DARK / LIGHT THEME TOGGLE
---------------------------- */

const toggleBtn = document.getElementById("themeToggle");

if(toggleBtn){

toggleBtn.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

else{

localStorage.setItem("theme","light");

toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

}

});

}

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

document.body.classList.add("dark-mode");

if(toggleBtn){
toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

}

});

/* TIMELINE ANIMATION */

const timelineBlocks = document.querySelectorAll(".timeline-block");

function showTimeline(){

const triggerBottom = window.innerHeight * 0.85;

timelineBlocks.forEach(block => {

const blockTop = block.getBoundingClientRect().top;

if(blockTop < triggerBottom){
block.classList.add("show");
}

});

}

window.addEventListener("scroll", showTimeline);
showTimeline();

// scroll

const policyCards = document.querySelectorAll(".policy-card");

function revealPolicy(){

const trigger = window.innerHeight * 0.85;

policyCards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < trigger){
card.style.opacity = 1;
card.style.transform = "translateY(0)";
}

});

}

window.addEventListener("scroll",revealPolicy);
revealPolicy();

// Contextmenu

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

document.onkeydown = function(e) {
  if (e.keyCode == 123) { // F12
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl+Shift+I
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { // Ctrl+Shift+J
    return false;
  }
  if (e.ctrlKey && e.keyCode == 85) { // Ctrl+U
    return false;
  }
};