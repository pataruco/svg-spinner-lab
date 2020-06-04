// Animation trigger
const successButton = document.querySelector("menu li:first-of-type button");
const failureButton = document.querySelector("menu li:nth-of-type(2) button");
const resetButton = document.querySelector("menu li:last-of-type button");
const svg = document.querySelector("svg");

const setSvgTo = (className) => {
  // hideDialog();
  className
    ? svg.classList.toggle(className)
    : svg.classList.remove(...svg.classList);
};

successButton.addEventListener("click", () => setSvgTo("success"));
failureButton.addEventListener("click", () => setSvgTo("failure"));
resetButton.addEventListener("click", () => setSvgTo(null));

// Animation ended handlers

const checkmark = document.querySelector("svg .checkmark polyline");
const crossLastLine = document.querySelector("svg .cross line:last-of-type");
const dialogBox = document.querySelector("dialog");

const animatedElements = [checkmark, crossLastLine];

const showDialog = (_event) => {
  dialogBox.setAttribute("open", true);
};

const hideDialog = (_event) => {
  // TODO: Remove atribute
  [...dialogBox.attributes].forEach((attr) =>
    dialogBox.removeAttribute(attr.name)
  );
};

animatedElements.forEach((element) =>
  element.addEventListener("animationend", showDialog)
);
