let css = document.querySelector("h3");
let inputColor1 = document.querySelector(".color1");
let inputColor2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

inputColor1.addEventListener("input", setGradient);

inputColor2.addEventListener("input", setGradient);

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    inputColor1.value +
    "," +
    " " +
    inputColor2.value +
    ")";
  css.textContent = body.style.background + ";";
}
