import { codingQuestions } from "./questions.js";

const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("questions");
let currentQuestionIndex = 0;

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  startButton.style.display = "none";
  quizContainer.classList.remove("hide");
  displayQuestion();
}

function displayQuestion() {
  if (currentQuestionIndex < codingQuestions.length) {
    const questionData = codingQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
      <h2>${questionData.question}</h2>
      <ul>
        ${questionData.answers.map((answer) => `<li>${answer}</li>`).join("")}
      </ul>
    `;
  } else {
    // End the quiz when all questions are displayed
    quizContainer.innerHTML = "<h2>Quiz completed!</h2>";
  }
}

// Add event listener to startButton to begin the quiz
startButton.addEventListener("click", startQuiz);
