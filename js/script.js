document.addEventListener("DOMContentLoaded", function(){

/* ===========================
   HERO TEXT + ROLE ANIMATION
=========================== */

const mainText = "Build Your Skills. Get Trained. Get Hired.";

const roles = [
"Java Developer",
"Python Developer",
"GenAI Engineer",
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
roleIndex = (roleIndex + 1) % roles.length;
setTimeout(typeRole,300);
}

}

typeRole();
}


/* ===========================
   DARK MODE TOGGLE
=========================== */

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


/* ===========================
   TIMELINE ANIMATION
=========================== */

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


/* ===========================
   POLICY ANIMATION
=========================== */

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

window.addEventListener("scroll", revealPolicy);
revealPolicy();


/* ===========================
   FINAL POPUP SYSTEM (FIXED)
=========================== */

const popups = [
document.getElementById("repPopup"),
document.getElementById("coursePopup"),
document.getElementById("partnerPopup"),
document.getElementById("supportPopup")
].filter(p => p !== null);

/* show only once */

let popupShown = localStorage.getItem("popupShown");

if(!popupShown && popups.length > 0){

setTimeout(() => {

let popup = popups[Math.floor(Math.random() * popups.length)];

popup.style.display = "flex";

/* mark as shown */
localStorage.setItem("popupShown", "true");

/* close button */
const closeBtn = popup.querySelector(".rep-close");

if(closeBtn){
closeBtn.addEventListener("click", () => {
popup.style.display = "none";
});
}

/* outside click */
popup.addEventListener("click", function(e){
if(e.target === popup){
popup.style.display = "none";
}
});

}, 1500);

}


/* ===========================
   COURSE MODAL
=========================== */

const modal = document.getElementById("courseModal");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".btn-details").forEach(btn => {
btn.addEventListener("click", () => {
if(modal) modal.style.display = "flex";
});
});

if(closeModal){
closeModal.onclick = () => modal.style.display = "none";
}

window.addEventListener("click", function(e){
if(e.target === modal){
modal.style.display = "none";
}
});


/* ===========================
   COURSE SYLLABUS TOGGLE
=========================== */

document.querySelectorAll(".topic").forEach(btn => {
btn.addEventListener("click", () => {
const sub = btn.nextElementSibling;
sub.style.display = sub.style.display === "block" ? "none" : "block";
});
});


/* ===========================
   POLICY SMOOTH SCROLL
=========================== */

document.querySelectorAll('.policy-sidebar a').forEach(anchor => {
anchor.addEventListener('click', function(e){
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if(target){
target.scrollIntoView({ behavior: 'smooth' });
}
});
});


/* ===========================
   POLICY ACTIVE LINK
=========================== */

const sections = document.querySelectorAll(".policy-block");
const navLinks = document.querySelectorAll(".policy-sidebar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop - 150;
if (window.scrollY >= sectionTop) {
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

});

// // Contextmenu -- Will add the logic later on prod

// document.addEventListener("contextmenu", function(e) {
//   e.preventDefault();
// });

// document.onkeydown = function(e) {
//   if (e.keyCode == 123) { // F12
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl+Shift+I
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { // Ctrl+Shift+J
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == 85) { // Ctrl+U
//     return false;
//   }
// };


// /* REPRESENTATIVE POPUP CONTROL */ -- Need to check if required.

// document.addEventListener("DOMContentLoaded", function(){

// const popup = document.getElementById("repPopup");
// const closeBtn = document.querySelector(".rep-close");

// if(!popup) return;

// let today = new Date().toDateString();

// let popupData = JSON.parse(localStorage.getItem("repPopupData")) || {
// date: today,
// count: 0
// };
// });
