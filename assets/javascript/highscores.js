function displayScores() {
  const scoreList = document.getElementById("highscores");
  scoreList.innerHTML = "";

  const retrievedScores = JSON.parse(localStorage.getItem("highScores")) || [];

  retrievedScores.forEach((item, index) => {
    const element = document.createElement("li");
    element.textContent = `${index + 1}. ${item.initials} : ${item.score}`;
    scoreList.appendChild(element);
  });

  document.getElementById("clear").addEventListener("click", () => {
    localStorage.removeItem("highScores");
    scoreList.innerHTML = "";
  });
}

function loadScores() {
  displayScores();
}
loadScores();
