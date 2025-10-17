const KEYFRAME_AMOUNT = 50;

let buttonPositioner = document.querySelector("div");
let button = document.querySelector("button");

let style = document.querySelector("style");
let initialStyleHTML = style.innerHTML;

funciton hit() {
  let shakeCSS = "\n@keyframes shake {";
  for(let i = 0; i <= 100; i += Math.floor(100/KEYFRAME_AMOUNT)) {
    let randX = Math.floor(Math.random() * (200 - 2*i)) - 100;
    let randY = Math.floor(Math.random() * (200 - 2*i)) - 100;
    shakeCSS += `\n${i}% {transform: translate(${randX}%, ${randY}%)}`;
  }
  shakeCSS += "\n}\n";
  style.innerHTML = initialStyleHTML + shakeCSS;
  
  button.classList.add("hit");
}

buttonPositioner.addEventListener("click", hit);
button.addEventListener("click", hit);

button.addEventListener("animationend", () => {button.classList.remove("hit");});
