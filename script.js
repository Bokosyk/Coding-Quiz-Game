//Dependencies
const intro = document.getElementById('intro')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// Shuffles questions
let shuffledQuestions, currentQuestionIndex

var count = 99;

function startTimer() {
    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = count;
        count--;
        if (count <= 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = "Time's up!"
            
        }
    }, 1000);
}

// Starts timer upon load
startButton.onclick = function () {
    startTimer();
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    // Hides beginning page
    intro.classList.add('hide')
    startButton.classList.add('hide')

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//Resets everything related to forms, question, body, back to its default state
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)

    //returns a live collection
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//Checks right or wrong answers
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        count += 10;
        element.classList.add('correct')
        

    } else {
        count -= 10;
        element.classList.add('wrong')
        

    }
}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'Question 2?',
        answers: [
            { text: 'Option 1', correct: true },
            { text: 'Option 2', correct: false },
            { text: 'Option 3', correct: false },
            { text: 'Option 4', correct: false }
        ]
    },
    {
        question: 'Question 3?',
        answers: [
            { text: 'Option 1', correct: false },
            { text: 'Option 1', correct: true },
            { text: 'Option 1', correct: false },
            { text: 'Option 1', correct: false }
        ]
    },
    {
        question: 'What is 4 * 2?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: true }
        ]
    }
]