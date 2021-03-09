//Dependencies
const intro = document.getElementById('intro')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// Shuffles questions
let shuffledQuestions, currentQuestionIndex

//Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        //Timer conditions
        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);
}

// Starts timer upon load
startButton.onclick = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
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

//Checks right or wrong answers
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        let nice = element.classList.add('correct')
        timerChange(nice);
        return nice
        // element.classList.add('correct')

    } else {
        let bad = element.classList.add('wrong')
        timerChange(bad)
        return bad
        // element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// Changes according to answers
function timerChange(e) {
    // if ( good ) {
    //     --timer + 10
    // }
    // else {
    //     --timer - 10
    // }

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
        question: 'Who is the best YouTuber?',
        answers: [
            { text: 'Web Dev Simplified', correct: true },
            { text: 'Traversy Media', correct: true },
            { text: 'Dev Ed', correct: true },
            { text: 'Fun Fun Function', correct: true }
        ]
    },
    {
        question: 'Is web development fun?',
        answers: [
            { text: 'Kinda', correct: false },
            { text: 'YES!!!', correct: true },
            { text: 'Um no', correct: false },
            { text: 'IDK', correct: false }
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