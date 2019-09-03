const logoText = document.querySelector(".logo-heading");
const heading = document.getElementById("heading");

logoText.addEventListener("mouseover", event => {
  logoText.style.fontSize = "50px";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.fontSize = "";
  }, 500);
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(el =>
  el.addEventListener("click", () => {
    alert("you clicked a button");
  })
);
const theBody = document.body;
let counter = 0;
theBody.addEventListener("click", event => {
  counter++;
  console.log(`scrolled ${counter} times`);
});

const card = document.querySelector(".img-fluid");
console.log(card);

card.addEventListener("dblclick", e => {
  console.log("Double clicked");
});

const windowSize = () => {
  console.log("window resized");
};

window.addEventListener("resize", windowSize);

window.addEventListener("load", () => {
  alert("page loaded successfully");
});

window.addEventListener("scroll", () => {
  console.log("page scrolled");
});

const inputText = document.querySelector('input[type="text"]');

inputText.addEventListener("focus", event => {
  event.target.style.background = "pink";
});

inputText.addEventListener("blur", event => {
  event.target.style.background = "";
});
