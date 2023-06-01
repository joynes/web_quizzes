
let questions2 = [
    {
        question: "What is the capital of England?",
        options: ["New York", "London", "Paris", "Tokyo"],
        answer: 1
    },
    {
        question: "Who is the author of '1984'?",
        options: ["George Orwell", "J.K. Rowling", "Stephen King", "Ernest Hemingway"],
        answer: 0
    },
    // add more questions as needed
];

let questions = [
    {
        question: "Vilka tre områden samverkar för att forma och styra samhället?",
        options: ["Politik, ekonomi, och kultur", "Politik, religion, och vetenskap", "Ekonomi, vetenskap, och kultur", "Politik, vetenskap, och kultur"],
        answer: 0
    },
    {
        question: "Vad kännetecknar offentlig förvaltning?",
        options: ["Bara rättslig verksamhet", "Bara faktisk verksamhet", "Det inkluderar både rättslig verksamhet och faktisk verksamhet", "Inget av ovanstående"],
        answer: 2
    },
    {
        question: "Vad innebär ministerstyre?",
        options: ["Att en minister personligen utför myndighetens arbete", "Att en politiskt tillsatt person påverkar hantering av ärenden hos myndigheter", "Att alla myndigheter styrs av en enda minister", "Inget av ovanstående"],
        answer: 1
    },
    {
        question: "Hur många kommuner och regioner finns det i Sverige?",
        options: ["200 kommuner och 18 regioner", "220 kommuner och 20 regioner", "290 kommuner och 21 regioner", "300 kommuner och 25 regioner"],
        answer: 2
    },
    // add more questions as needed
];

// Randomize the options and update the answer index
questions.forEach(question => {
    let correctOption = question.options[question.answer];
    question.options.sort(() => Math.random() - 0.5);
    question.answer = question.options.indexOf(correctOption);
});

// Randomize the questions
questions.sort(() => Math.random() - 0.5);

let score = 0;
let currentQuestion = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showFinalScore();
        return;
    }

    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    optionsElement.innerHTML = '';

    questionElement.textContent = questions[currentQuestion].question;

    questions[currentQuestion].options.forEach((option, index) => {
        let button = document.createElement("button");
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });

    showScore();
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].answer) {
        score++;
        currentQuestion++;
        showQuestion();
    } else {
        alert('Wrong answer! Please try again.');
    }
}

function showScore() {
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}`;
}

function showFinalScore() {
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = `<h2>Game Over! Your final score is: ${score}/${questions.length}</h2>`;
}
