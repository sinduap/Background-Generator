const css = document.querySelector("h3");
const inputColor1 = document.querySelector(".color1");
const inputColor2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

const setGradient = () => {
  body.style.background = `linear-gradient(to right, ${inputColor2.value}, ${inputColor1.value})`;
  css.textContent = body.style.background + ";";
};

inputColor1.addEventListener("input", setGradient);

inputColor2.addEventListener("input", setGradient);
