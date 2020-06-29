// Declare variables
const container = document.getElementById("container");
const text = document.getElementById("text");

// Other times not hardcoded in case we want to change total breathing time
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

// Set container animation properties
function breatheAnimation() {
  text.innerHTML = "Breathe in!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

// Run breatheAnimation every 7.5 seconds
setInterval(breatheAnimation, totalTime);
