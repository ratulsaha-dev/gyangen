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



// /* REPRESENTATIVE POPUP CONTROL */

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
// /* ===========================
//    RANDOM POPUP SYSTEM
// =========================== */

// const popups = [
// document.getElementById("popup-rep"),
// document.getElementById("popup-course"),
// document.getElementById("popup-partner")
// ];

// let popupShown = false;
// let lastPopupTime = localStorage.getItem("lastPopupTime") || 0;

// function showRandomPopup(){

// if(popupShown) return;

// /* limit frequency (1 popup per 2 mins) */

// let now = Date.now();

// if(now - lastPopupTime < 120000) return;

// /* random popup */

// let popup = popups[Math.floor(Math.random() * popups.length)];

// if(!popup) return;

// popup.style.display = "flex";

// popupShown = true;

// localStorage.setItem("lastPopupTime", now);

// /* close logic */

// popup.querySelector(".popup-close").onclick = () => {
// popup.style.display = "none";
// popupShown = false;
// };

// window.addEventListener("click", function(e){
// if(e.target === popup){
// popup.style.display = "none";
// popupShown = false;
// }
// });

// }


// /* TRIGGER ON SCROLL */

// let scrollTriggered = false;

// window.addEventListener("scroll", () => {

// if(scrollTriggered) return;

// /* trigger after user scrolls 40% */

// let scrollPercent = (window.scrollY / document.body.scrollHeight) * 100;

// if(scrollPercent > 25){

// scrollTriggered = true;

// /* delay for UX */

// setTimeout(showRandomPopup, 1000);

// }

// });

// /* reset counter if new day */

// if(popupData.date !== today){
// popupData.date = today;
// popupData.count = 0;
// }

// /* show popup max 4 times per day */

// if(popupData.count < 4){

// setTimeout(() => {
// popup.style.display = "flex";
// }, 1500);

// popupData.count++;

// localStorage.setItem("repPopupData", JSON.stringify(popupData));

// }

// /* close popup */

// closeBtn.addEventListener("click", () => {
// popup.style.display = "none";
// });



// const modal = document.getElementById("courseModal");

// document.querySelectorAll(".btn-details").forEach(btn => {

// btn.addEventListener("click", () => {

// modal.style.display = "flex";

// });

// });

// document.querySelector(".close-modal").onclick = function(){

// modal.style.display = "none";

// }

// window.onclick = function(event){

// if(event.target == modal){
// modal.style.display = "none";
// }

// }

// const repPopup = document.getElementById("repPopup");
// const repClose = document.querySelector(".rep-close");

// window.onload = function(){

// setTimeout(()=>{
// repPopup.style.display = "flex";
// },2000);

// }

// repClose.onclick = function(){
// repPopup.style.display = "none";
// }

// window.onclick = function(e){
// if(e.target === repPopup){
// repPopup.style.display = "none";
// }
// }

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
