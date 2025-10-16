const KEYFRAME_AMOUNT = 20;

let buttonPositioner = document.querySelector("div");
let button = document.querySelector("button");

let style = document.querySelector("style");
let initialStyleHTML = style.innerHTML;

button.addEventListener("click", () => {
  let shakeCSS = "\n@keyframes shake {";
  for(let i = 0; i <= 100; i += Math.floor(100/KEYFRAME_AMOUNT)) {
    let randX = 50 - Math.floor(Math.random() * (200 - 2*i));
    let randY = 50 - Math.floor(Math.random() * (200 - 2*i));
    shakeCSS += `\n${i}% {transform: translate(${randX}%, ${randY}%)}`;
  }
  shakeCSS += "\n}";

  style.innerHTML = initialStyleHTML + shakeCSS;
  buttonPositioner.style = "animation: shake 1s linear 0s infinite forwards;"
});
