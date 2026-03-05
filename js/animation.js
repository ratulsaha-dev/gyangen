const mainSentence = "Build your skill with us";

const roles = [
"Java Developer",
"Python Developer",
"GenAI Developer",
"ReactJS Developer",
"Data Analyst",
"Data Scientist"
];

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let roleIndex = 0;

function scrambleText(element, finalText){

let iteration = 0;

const interval = setInterval(()=>{

element.innerText = finalText
.split("")
.map((letter,index)=>{

if(index < iteration){
return finalText[index];
}

return letters[Math.floor(Math.random()*26)];

})
.join("");

if(iteration >= finalText.length){
clearInterval(interval);
}

iteration += 1/2;

},30);

}

function startAnimation(){

const mainElement = document.getElementById("mainText");
const roleElement = document.getElementById("roleText");

scrambleText(mainElement, mainSentence);

setInterval(()=>{

roleElement.innerText="";

scrambleText(roleElement, roles[roleIndex]);

roleIndex++;

if(roleIndex >= roles.length){
roleIndex=0;
}

},3000);

}

startAnimation();