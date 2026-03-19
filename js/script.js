document.addEventListener("DOMContentLoaded", function(){

/* ===========================
   HERO MAIN TEXT
=========================== */

const mainText = "Build Your Skills. Get Trained. Get Hired.";
const mainEl = document.getElementById("mainText");
if(mainEl) mainEl.innerText = mainText;


/* ===========================
   WHAT WE DO ANIMATION
=========================== */

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
dIndex = (dIndex + 1) % dynamicRoles.length;
setTimeout(typeDynamic,300);
}
}

if(dynamicElement) typeDynamic();


/* ===========================
   ROLE ANIMATION
=========================== */

const roles = [
"Java Developer",
"Python Developer",
"GenAI Engineer",
"Frontend Developer",
"Data Analyst",
"Data Scientist"
];

const roleElement = document.getElementById("roleText");

let roleIndex = 0;
let charIndex = 0;

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

if(roleElement) typeRole();


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

// Load saved theme
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
   POLICY CARD ANIMATION
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
   RIGHT CLICK DISABLE
=========================== */

document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("keydown", function(e){
if (e.keyCode === 123 ||
(e.ctrlKey && e.shiftKey && [73,74].includes(e.keyCode)) ||
(e.ctrlKey && e.keyCode === 85)){
return false;
}
});


/* ===========================
   REPRESENTATIVE POPUP (FIXED)
=========================== */

const popup = document.getElementById("repPopup");
const closeBtn = document.querySelector(".rep-close");

if(popup){

let today = new Date().toDateString();

let popupData = JSON.parse(localStorage.getItem("repPopupData")) || {
date: today,
count: 0
};

if(popupData.date !== today){
popupData.date = today;
popupData.count = 0;
}

if(popupData.count < 4){

setTimeout(()=>{
popup.style.display = "flex";
},1500);

popupData.count++;

localStorage.setItem("repPopupData", JSON.stringify(popupData));
}

if(closeBtn){
closeBtn.onclick = () => popup.style.display = "none";
}

window.addEventListener("click", function(e){
if(e.target === popup){
popup.style.display = "none";
}
});

}


/* ===========================
   COURSE MODAL (FIXED)
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