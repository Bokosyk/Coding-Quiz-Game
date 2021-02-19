const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('quest-cont');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
//Shuffles questions
let shuffleQuestions, currentQuestionIndex

//Upon clicking, .addEventListener runs a function.
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    //Hides start button once quiz has begun.
    startButton.classList.add('hide');

    //Shuffles questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    //Removes 'hide' from question container.
    questionContainerEl.classList.remove('hide');

    // Runs next question function.
    setNextQuestion();

};

function setNextQuestion() {
    //Resets everything
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        //only sets if answer is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    })
};

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function showQuestion(question) {

    questionElement.innerText = question.question
}

function selectAnswer() {
con

};

//All of the questions for the quiz go here
const questions = [
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    }
]