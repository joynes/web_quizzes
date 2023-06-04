
let score = 0;
let currentStage = null;
let currentQuestion = 0;
let completedStages = JSON.parse(localStorage.getItem("completedStages")) || {};

document.addEventListener('DOMContentLoaded', () => {
    showMenu();
});

function showMenu() {
  let stagesElement = document.getElementById("stages");
  
  stages.forEach((stage, index) => {
    let button = document.createElement("button");
    button.textContent = "Stage " + (index + 1) + " (" + "0" + "/" + stages[index].length + ")";
    button.addEventListener('click', () => startStage(index));
    stagesElement.appendChild(button);
  });
}

function startStage(index) {
  currentStage = stages[index];
  shuffleQuestions(currentStage);
  showQuestion(currentStage);
  
  // hide the menu and show the quiz section
  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
}

function shuffleQuestions(questions) {
    // Randomize the options and update the answer index
    questions.forEach(question => {
        let correctOption = question.options[question.answer];
        question.options.sort(() => Math.random() - 0.5);
        question.answer = question.options.indexOf(correctOption);
    });

    // Randomize the questions
    questions.sort(() => Math.random() - 0.5);
}

function showQuestion(questions) {
    if (currentQuestion >= questions.length) {
        showFinalScore(currentStage);
        return;
    }

    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    optionsElement.innerHTML = '';

    questionElement.textContent = questions[currentQuestion].question;

    questions[currentQuestion].options.forEach((option, index) => {
        let button = document.createElement("button");
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index, currentStage));
        optionsElement.appendChild(button);
    });

    showScore(currentStage);
}

function checkAnswer(index, questions) {
    if (index === questions[currentQuestion].answer) {
        alert('Yes! Correct answer: ' + questions[currentQuestion].answer);
        score++;
        currentQuestion++;
        showQuestion(currentStage);
    } else {
        alert('No! Wrong: ' + questions[currentQuestion].answer);
        if (score > 0)
          score--;
        showQuestion(currentStage);
    }
}

function showScore(questions) {
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = `Nr ${currentQuestion}/${questions.length}  ------  Score: ${score}`;
}

function showFinalScore(questions) {
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = `<h2>Game Over! Your final score is: ${score}/${questions.length}</h2>
    <button onclick="restartGame()">Restart Game</button>`;
}

function restartGame() {
    score = 0;
    currentQuestion = 0;
}
