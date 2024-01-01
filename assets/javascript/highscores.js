document.addEventListener('DOMContentLoaded', () => {
    const highScoresList = document.getElementById('highScoresList');
    if (highScoresList) {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScoresList.innerHTML = highScores
            .map(score => `<li>${score.initials}: ${score.score}</li>`)
            .join('');
    }
});
