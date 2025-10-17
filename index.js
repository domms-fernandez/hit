//hawk tuah!
const KEYFRAME_AMOUNT = 50;

let buttonPositioner = document.querySelector("div");
let buttonCutoff = document.getElementById("button-cutoff");
let button = document.querySelector("button");

let style = document.querySelector("style");
let initialStyleHTML = style.innerHTML;

let mousePos = {x: window.innerWidth * 0.5, y: window.innerHeight * 0.5};
document.addEventListener("mousemove", (e) => {mousePos = e;});

function hit() {
  buttonCutoff.classList.remove("hit");
  let buttonCutoffRect = buttonCutoff.getBoundingClientRect();
  
  let scar = document.createElement("img");
  scar.src = "/hit/scar.png";
  scar.style = `
  left: ${mousePos.x - buttonCutoffRect.left - 10}px;
  top: ${mousePos.y - buttonCutoffRect.top - 10}px;
  transform: rotate(${Math.floor(Math.random() * 360)}deg);`;
  buttonCutoff.appendChild(scar);
  
  let shakeCSS = "\n@keyframes shake {";
  for(let i = 0; i <= 100; i += Math.floor(100/KEYFRAME_AMOUNT)) {
    let randX = Math.floor(Math.random() * (100 - i));
    if(!Math.floor(Math.random()) * 2) randX *= -1;
    let randY = Math.floor(Math.random() * (100 - i));
    if(!Math.floor(Math.random()) * 2) randY *= -1;
    shakeCSS += `\n${i}% {transform: translate(${randX}%, ${randY}%)}`;
  }
  shakeCSS += "\n}\n";
  style.innerHTML = initialStyleHTML + shakeCSS;
  
  buttonCutoff.classList.add("hit");
  new Audio("/hit/whip.mp3").play();
}

buttonPositioner.addEventListener("click", hit);
button.addEventListener("click", hit);
