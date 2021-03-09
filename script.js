const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('quest-cont');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
//Shuffles questions
let shuffledQuestions, currentQuestionIndex

//Upon clicking, .addEventListener runs a function.
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

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

};

function resetState() {
    clearStatusCLass(document.body)
    //Hides the next button
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function showQuestion(question) {

    questionElement.innerText = question.question
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
}

function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }

};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


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
    },
    {
        question: "Mr.Senor Jalapeno",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "Mr.Senor Jalapeno",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
    {
        question: "What is 2 + 2",
        answers: [
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
            { text: '4', correct: true },
        ]
    },
]