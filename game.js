let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");
let result = document.getElementById("resultpar");
let difficulty = 50;

function setAdditionGame() {
    answerform.setAttribute("data-gametype", "addition");
    questionbox.style.color = "red";
    additionQuiz();
}

function setSubtractionGame() {
    answerform.setAttribute("data-gametype", "subtraction");
    questionbox.style.color = "blue";
    subtractionQuiz();
}

function setMultiplicationGame() {
    answerform.setAttribute("data-gametype", "multiplication");
    questionbox.style.color = "green";
    multiplicationQuiz();
}

function chooseGameType(gametype) {
    if(gametype == "addition") {
        additionQuiz();
    } else if(gametype == "subtraction") {
        subtractionQuiz();
    } else if(gametype == "multiplication") {
        multiplicationQuiz();
    }
    
}

function refreshDifficulty() {
    let gametype = answerform.getAttribute("data-gametype");
    difficulty = document.forms["difficulty"]["level"].value;
    chooseGameType(gametype);
}

function checkAnswer() {
    let gametype = answerform.getAttribute("data-gametype");
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        alert("Hey! You got it right :)");
        score++;
    } else {
        alert("Awww...wrong this time :(");
    }
    answerform["answer"].value = "";
    scorebox.textContent = score;
    difficulty = document.forms["difficulty"]["level"].value;
    chooseGameType(gametype);
    return false;
}

function additionQuiz() {
    let num1 = Math.floor(Math.random() * difficulty);
    let num2 = Math.floor(Math.random() * difficulty);
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerform["rightAnswer"].value = (num1 + num2);
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * difficulty);
    let num2 = Math.floor(Math.random() * difficulty);
    questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
    answerform["rightAnswer"].value = (num1 * num2);
}

function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * difficulty);
    let num2 = Math.floor(Math.random() * difficulty);
    if (num2 > num1) {
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
    answerform["rightAnswer"].value = (num1 - num2);
}

additionQuiz();

