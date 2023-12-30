
/*Initialize quiz variables.
Show start button.

// On click: Start timer, show first question.
Question Loop

// Show question and answers.
On answer click: Check correctness, update timer if wrong, show next question.

// When questions done or timer at 0: Show score, prompt for initials.

// Display high scores, options to restart or clear scores.

//Make responsive and user-friendly.*/

const questions = [
  {
    question: "What is the purpose of the `console.log` statement in JavaScript?",
    answers: ["To write a message to the console", "To display a pop-up message", "To read input from the user", "To clear the console"],
    correctAnswer: "To write a message to the console"
  },
  {
    question: "Which method is used to round a number to the nearest integer in JavaScript?",
    answers: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    correctAnswer: "Math.round()"
  },
  {
    question: "How do you declare a constant in JavaScript?",
    answers: ["var myConst = 5;", "let myConst = 5;", "const myConst = 5;", "myConst = 5;"],
    correctAnswer: "const myConst = 5;"
  },
  {
    question: "Which statement is used to execute code based on a condition?",
    answers: ["for", "while", "if", "switch"],
    correctAnswer: "if"
  },
  {
    question: "What will `console.log(3 + '3')` output in JavaScript?",
    answers: ["6", "33", "undefined", "Error"],
    correctAnswer: "33"
  }
];
