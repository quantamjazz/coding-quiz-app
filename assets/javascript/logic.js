import { codingQuestions } from "./questions.js";

const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("questions");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  startButton.style.display = "none";
  quizContainer.classList.remove("hide");
  displayQuestion();
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === codingQuestions[currentQuestionIndex].correctAnswer) {
    score++;
    // Correct answer logic
  } else {
    // Incorrect answer logic
    subtractTime();
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
    // This code assumes that your buttons have the class 'answer'
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button) => {
      button.addEventListener("click", function () {
        checkAnswer(this.innerText);
      });
    });
  } else {
    // End the quiz when all questions are displayed
    quizContainer.innerHTML = "<h2>Quiz completed!</h2>";
  }
}

// Add event listener to startButton to begin the quiz
startButton.addEventListener("click", startQuiz);

let timeLeft = 60; // Example: 60 seconds for the quiz
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
  quizContainer.innerHTML =
    "<h2>Quiz completed! Your score: " + score + "</h2>";
  // Additional logic for displaying the score and saving results
}

document.getElementById("startButton").addEventListener("click", startTimer);
