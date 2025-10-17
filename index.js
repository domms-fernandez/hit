const KEYFRAME_AMOUNT = 50;

let buttonPositioner = document.querySelector("div");
let buttonCutoff = document.getElementById("button-cutoff");
let button = document.querySelector("button");

let style = document.querySelector("style");
let initialStyleHTML = style.innerHTML;

function hit() {
  let shakeCSS = "\n@keyframes shake {";
  for(let i = 0; i <= 100; i += Math.floor(100/KEYFRAME_AMOUNT)) {
    let randX = Math.floor(Math.random() * (200 - 2*i));
    let randY = Math.floor(Math.random() * (200 - 2*i));
    shakeCSS += `\n${i}% {transform: translate(${randX}%, ${randY}%)}`;
  }
  shakeCSS += "\n}\n";
  style.innerHTML = initialStyleHTML + shakeCSS;

  new Audio("/hit/whip.mp3").play();
  buttonCutoff.classList.remove("hit");
  buttonCutoff.classList.add("hit");

  let buttonCutoffRect = buttonCutoff.getBoundingClientRect();
  let scar = document.createElement("img");
  scar.src = "/hit/scar.png";
  scar.style = `
  left: ${mousePos.x - buttonCutoffRect.left - 10}px;
  top: ${mousePos.y - buttonCutoffRect.top - 10}px;
  transform: rotate(${Math.floor(Math.random() * 360)}deg);`;
  buttonCutoff.appendChild(scar);
}

buttonPositioner.addEventListener("click", hit);
button.addEventListener("click", hit);
