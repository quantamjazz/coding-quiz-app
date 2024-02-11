import { codingQuestions } from "./questions.js";

const feedback = document.getElementById("feedback");
const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("questions");
let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", startQuiz);


function startQuiz() {
  startTimer();
  document.getElementById("start-screen").style.display = "none";
  startButton.style.display = "none";
  quizContainer.classList.remove("hide");
  displayQuestion();
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === codingQuestions[currentQuestionIndex].correctAnswer) {
    score++;
    // Correct answer
    feedback.classList.remove("hide");
    feedback.textContent = "Correct!";
  } else {
    // Incorrect answer
    subtractTime();
    feedback.classList.remove("hide");
    feedback.textContent = "Incorrect!";
  }

  if (currentQuestionIndex < codingQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    endQuiz();
  }
}

function displayQuestion() {
  if (currentQuestionIndex < codingQuestions.length) {
    const questionData = codingQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
      <h2>${questionData.question}</h2>
      ${questionData.answers
        .map((answer) => `<button class="answer">${answer}</button>`)
        .join("")}
    `;

    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button) => {
      button.addEventListener("click", function () {
        checkAnswer(this.innerText);
      });
    });
  } else {
    quizContainer.innerHTML = "<h2>Quiz completed!</h2>";
  }
}

let timeLeft = 60;
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      endQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById("time").innerText = timeLeft;
}

function subtractTime() {
  timeLeft -= 10; // Subtract 10 seconds for an incorrect answer
  updateTimerDisplay();
}

function endQuiz() {
  clearInterval(timerId);
  quizContainer.innerHTML = `
      <h2>Quiz completed! Your score: ${score}</h2>
      <form id="scoreForm">
          <input type="text" id="initials" placeholder="Enter Initials" required>
          <button type="submit">Save Score</button>
      </form>
  `;

  const scoreForm = document.getElementById("scoreForm");
  scoreForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const initials = document.getElementById("initials").value;

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ score, initials });
    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href = "highscores.html";
  });
}