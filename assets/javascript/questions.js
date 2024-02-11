/*Initialize quiz variables.
Show start button.

// On click: Start timer, show first question.
Question Loop

// Show question and answers.
On answer click: Check correctness, update timer if wrong, show next question.

// When questions done or timer at 0: Show score, prompt for initials.

// Display high scores, options to restart or clear scores.

//Make responsive and user-friendly.*/

const codingQuestions = [
  {
    question:
      "What is the purpose of the `console.log` statement in JavaScript?",
    answers: [
      "To write a message to the console",
      "To display a pop-up message",
      "To read input from the user",
      "To clear the console",
    ],
    correctAnswer: "To write a message to the console",
  },
  {
    question:
      "Which method is used to round a number to the nearest integer in JavaScript?",
    answers: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    correctAnswer: "Math.round()",
  },
  {
    question: "How do you declare a constant in JavaScript?",
    answers: [
      "var myConst = 5;",
      "let myConst = 5;",
      "const myConst = 5;",
      "myConst = 5;",
    ],
    correctAnswer: "const myConst = 5;",
  },
  {
    question: "Which statement is used to execute code based on a condition?",
    answers: ["for", "while", "if", "switch"],
    correctAnswer: "if",
  },
  {
    question: "What will `console.log(3 + '3')` output in JavaScript?",
    answers: ["6", "33", "undefined", "Error"],
    correctAnswer: "33",
  },
  {
    question: "How can you prevent the default behavior of an HTML form submission using JavaScript?",
answers: ["event.preventDefault", "event.stopDefault", "event.halt", "event.cancelSubmission"],
correctAnswer: "event.preventDefault",
  },
  {
    question: "What is the purpose of the localStorage object in JavaScript?",
answers: ["Storing data on the server", "Storing data locally in the browser", "Handling asynchronous operations", "Managing CSS styles"],
correctAnswer: "Storing data locally in the browser",
  },
  {
    question: "How do you check if a variable is an array in JavaScript?",
    answers: ["isArray(variable)", "variable.isArray()", "typeof variable === 'array'", "Array.isArray(variable)"],
    correctAnswer: "Array.isArray(variable)",
  },
  {
    question: "What is the difference between 'let' and 'const' in JavaScript?",
    answers: ["let is used for function-scoped variables, while const is used for block-scoped variables.", "There is no difference; they can be used interchangeably.", "let is used for block-scoped variables, while const is used for variables that cannot be reassigned.", "let is used for variables that cannot be reassigned, while const is used for block-scoped variables."],
    correctAnswer: "let is used for block-scoped variables, while const is used for variables that cannot be reassigned.",
  },
  {
    question: "How do you convert a string to a number in JavaScript?",
    answers: ["parseInt(string)", "stringToNumber(string)", "toNumber(string)", "Number(string)"],
    correctAnswer: "Number(string)",
  }
];

export { codingQuestions };