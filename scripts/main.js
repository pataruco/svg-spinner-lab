const successButton = document.querySelector("menu li:first-of-type button");
const failureButton = document.querySelector("menu li:nth-of-type(2) button");
const resetButton = document.querySelector("menu li:last-of-type button");
const svg = document.querySelector("svg");

const setSvgTo = (className) => {
  console.log("hi");
  className
    ? svg.classList.toggle(className)
    : svg.classList.remove(...svg.classList);
};

successButton.addEventListener("click", () => setSvgTo("success"));
failureButton.addEventListener("click", () => setSvgTo("failure"));
resetButton.addEventListener("click", () => setSvgTo(null));
