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
