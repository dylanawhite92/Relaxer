// Declare variables
const container = document.getElementsByClassName("container");
const text = document.getElementById("text");

// Other times not hardcoded in case we want to change total breathing time
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Set container animation properties
function breatheAnimation() {
  text.innerHTML = "Breathe in!";
  container.className = "container grow";
}
