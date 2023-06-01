
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

{
    question: "Vad innebär demokrati?",
    options: ["Styrelseform där makten ligger hos en enda person", "Styrelseform där makten ligger hos en liten grupp", "Styrelseform där makten ligger hos folket", "Styrelseform där makten ligger hos en monark"],
    answer: 2
},
{
    question: "I vilken lag finns formuleringen att all makt utgår ifrån folket?",
    options: ["I brottsbalken", "I förvaltningslagen", "I regeringsformen", "I tryckfrihetsförordningen"],
    answer: 2
},
{
    question: "Hur styrs Sverige?",
    options: ["Genom direktdemokrati", "Genom monarki", "Genom diktatur", "Genom representativ parlamentarism"],
    answer: 3
},
{
    question: "Vad innebär representativ parlamentarism?",
    options: ["Medborgarna deltar direkt i alla politiska beslut", "Medborgarna väljer representanter till ett parlament som tar beslut och styr landet på deras vägnar", "En ensam ledare tar alla beslut", "En monark tar alla beslut"],
    answer: 1
},
{
    question: "Vad är regeringens främsta uppgifter?",
    options: ["Styra landet, förvalta offentliga resurser, upprätthålla lag och ordning, skydda nationens intressen", "Bestämma skattesatser, skapa lagar, upprätthålla ordning och säkerhet", "Lägga fram budgetförslag, förhandla med andra länder, upprätthålla säkerheten", "Skydda medborgarnas rättigheter, bestämma räntan, fördela offentliga medel"],
    answer: 0
},
{
    question: "Vad kännetecknar offentlig förvaltning?",
    options: ["Rättslig verksamhet, faktisk verksamhet", "Kommersiell verksamhet, faktisk verksamhet", "Faktisk verksamhet, politisk verksamhet", "Inget av ovanstående"],
    answer: 0
},
{
    question: "Vad är en norm?",
    options: ["En lag", "En skriven regel", "En oskriven regel eller standard som styr och påverkar beteendet och förväntningarna i ett samhälle eller en grupp", "En politisk ideologi"],
    answer: 2
},
{
    question: "Vilka är Sveriges grundlagar?",
    options: ["Regeringsformen, Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen, Successionsordningen", "Regeringsformen, Strafflagen, Civilrätten, Successionsordningen", "Regeringsformen, Tryckfrihetsförordningen, Konsumenträtten, Successionsordningen", "Regeringsformen, Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen, Äktenskapsbalken"],
    answer: 0
},
{
    question: "Vad är en folkomröstning?",
    options: ["En process där alla röstberättigade medborgare i en nation röstar om ett specifikt ämne eller en fråga", "En process där alla ledamöter av riksdagen röstar om ett specifikt ämne eller en fråga", "En process där regeringen röstar om ett specifikt ämne eller en fråga", "En process där kungen röstar om ett specifikt ämne eller en fråga"],
    answer: 0
},
{
    question: "Vad är välfärd?",
    options: ["Rikedom och ekonomiskt välstånd", "En individ eller ett samhälles hälsa, lycka och förmåga att blomstra", "Politisk stabilitet", "Ett annat namn för regeringen"],
    answer: 1
},
{
    question: "Vad innebär begreppet 'rättsstat'?",
    options: ["Ett samhälle där alla handlingar och beslut är baserade på lag", "Ett samhälle där rättsliga beslut baseras på en ledares vilja", "Ett samhälle där kriminaliteten är låg", "Ett samhälle där det finns många advokater"],
    answer: 0
}
    // add more questions as needed
];

let score = 0;
let currentQuestion = 0;

document.addEventListener('DOMContentLoaded', () => {
    shuffleQuestions();
    showQuestion();
});

function shuffleQuestions() {
    // Randomize the options and update the answer index
    questions.forEach(question => {
        let correctOption = question.options[question.answer];
        question.options.sort(() => Math.random() - 0.5);
        question.answer = question.options.indexOf(correctOption);
    });

    // Randomize the questions
    questions.sort(() => Math.random() - 0.5);
}

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
        if (score > 0)
          score--;
    }
}

function showScore() {
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}`;
}

function showFinalScore() {
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = `<h2>Game Over! Your final score is: ${score}/${questions.length}</h2>
    <button onclick="restartGame()">Restart Game</button>`;
}

function restartGame() {
    score = 0;
    currentQuestion = 0;
    shuffleQuestions();
    showQuestion();
}
