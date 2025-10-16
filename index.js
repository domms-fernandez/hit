const KEYFRAME_AMOUNT = 20;

let buttonPositioner = document.querySelector("div");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let shakeCSS = "\n@keyframes shake {";
  for(let i=0; i<100; i += Math.floor(100/KEYFRAME_AMOUNT)) {
    let randX = Math.floor(Math.random() * (100 - i));
    shakeCSS += `${i}% {transform: translate(${randX}%, ${i}%)}`;
  }
  shakeCSS += "}";
  console.log(shakeCSS);
});
