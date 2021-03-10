//Dependencies
const intro = document.getElementById('intro')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const viewButton = document.getElementById('viewscore')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scorepage = document.getElementById('finalscore')

// Sorted questions
let sortedQuestions, currentQuestionIndex

var count = 99;

function startTimer() {
    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = count;
        count--;
        if (count <= 0) {
            console.log("This works!")
            clearInterval(interval);
            saveScore(count);
            // document.getElementById('count').innerHTML = "Time's up!"
        }
        else () => {
            viewButton.onclick = function () {
                console.log("View Scores Worked")
                clearInterval(interval);
                saveScore(count);
            };
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

    sortedQuestions = questions.sort(() => Math.floor() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(sortedQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    // Writes the sortedQuestions[currentQuestionIndex] into HTML
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
    if (sortedQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        // startButton.innerText = 'Restart'
        viewButton.classList.remove('hide')
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

function saveScore(result) {
    console.log("This also ran somewhat.")

    questionContainerElement.classList.add('hide')
    viewButton.classList.add('hide')
    scorepage.classList.remove('hide')


    // Local storage
    var nickname = "";
    var score = result;
    console.log(score)

    // localStorage.set(nickname, score);

}




const questions = [
    {
        question: 'Question 1',
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
        question: 'Question 4?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: true }
        ]
    }
]