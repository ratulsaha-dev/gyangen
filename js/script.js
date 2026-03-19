document.addEventListener("DOMContentLoaded", function(){

/* ---------------------------
   HERO TEXT ANIMATION
---------------------------- */
// MAIN TAGLINE

const mainText = "Build Your Skills. Get Trained. Get Hired.";
document.getElementById("mainText").innerText = mainText;


// WHAT WE DO ANIMATION

const dynamicRoles = [
"We Train",
"We Build Skills",
"We Provide Courses",
"We Collaborate with Institutions",
"We Enable Hiring"
];

const dynamicElement = document.getElementById("dynamicText");

let dIndex = 0;
let dChar = 0;

function typeDynamic(){

if(dChar < dynamicRoles[dIndex].length){
dynamicElement.innerHTML += dynamicRoles[dIndex].charAt(dChar);
dChar++;
setTimeout(typeDynamic,50);
}
else{
setTimeout(eraseDynamic,1500);
}

}

function eraseDynamic(){

if(dChar > 0){
dynamicElement.innerHTML = dynamicRoles[dIndex].substring(0,dChar-1);
dChar--;
setTimeout(eraseDynamic,30);
}
else{
dIndex++;
if(dIndex >= dynamicRoles.length){
dIndex = 0;
}
setTimeout(typeDynamic,300);
}

}

typeDynamic();


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

/* REPRESENTATIVE POPUP CONTROL */

document.addEventListener("DOMContentLoaded", function(){

const popup = document.getElementById("repPopup");
const closeBtn = document.querySelector(".rep-close");

if(!popup) return;

let today = new Date().toDateString();

let popupData = JSON.parse(localStorage.getItem("repPopupData")) || {
date: today,
count: 0
};

/* reset counter if new day */

if(popupData.date !== today){
popupData.date = today;
popupData.count = 0;
}

/* show popup max 4 times per day */

if(popupData.count < 4){

setTimeout(() => {
popup.style.display = "flex";
}, 1500);

popupData.count++;

localStorage.setItem("repPopupData", JSON.stringify(popupData));

}

/* close popup */

closeBtn.addEventListener("click", () => {
popup.style.display = "none";
});

});

const modal = document.getElementById("courseModal");

document.querySelectorAll(".btn-details").forEach(btn => {

btn.addEventListener("click", () => {

modal.style.display = "flex";

});

});

document.querySelector(".close-modal").onclick = function(){

modal.style.display = "none";

}

window.onclick = function(event){

if(event.target == modal){
modal.style.display = "none";
}

}

const repPopup = document.getElementById("repPopup");
const repClose = document.querySelector(".rep-close");

window.onload = function(){

setTimeout(()=>{
repPopup.style.display = "flex";
},2000);

}

repClose.onclick = function(){
repPopup.style.display = "none";
}

window.onclick = function(e){
if(e.target === repPopup){
repPopup.style.display = "none";
}
}

// Course

document.querySelectorAll(".topic").forEach(button => {

button.addEventListener("click", () => {

const sub = button.nextElementSibling;

sub.style.display =
sub.style.display === "block" ? "none" : "block";

});

});

// SMOOTH SCROLL

document.querySelectorAll('.policy-sidebar a').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

target.scrollIntoView({
behavior: 'smooth'
});

});

});


// ACTIVE LINK ON SCROLL

const sections = document.querySelectorAll(".policy-block");
const navLinks = document.querySelectorAll(".policy-sidebar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if (scrollY >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href").includes(current)) {
link.classList.add("active");
}

});

});