// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let highScore = localStorage.getItem("highScore") || "--";

// Select DOM elements
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const highScoreDisplay = document.getElementById("highScore");

// Display high score if it exists
highScoreDisplay.textContent = `High Score: ${highScore}`;

// Event listener for the "Check" button
checkBtn.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⛔ Please enter a number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    message.style.color = "#00ff00";

    if (highScore === "--" || attempts < highScore) {
      highScore = attempts;
      localStorage.setItem("highScore", highScore);
      highScoreDisplay.textContent = `High Score: ${highScore}`;
    }

    guessInput.disabled = true;
    checkBtn.disabled = true;

  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "#ffd700";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "#ffd700";
  }

  guessInput.value = "";
});

// Event listener for the "Reset" button
resetBtn.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.disabled = false;
  checkBtn.disabled = false;
  message.textContent = "";
  message.style.color = "#fff";
  guessInput.value = "";
  attemptsDisplay.textContent = "Attempts: 0";
});
