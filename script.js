//Dependencies
const intro = document.getElementById('intro')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const viewButton = document.getElementById('viewscore')
const saveButton = document.getElementById('savescore')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scorepage = document.getElementById('finalscore')
const leaderBoard = document.getElementById('leaderboards')

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
            showScore(count);
            // document.getElementById('count').innerHTML = "Time's up!"
        }
        else {
            viewButton.onclick = function () {
                console.log("View Scores Worked")
                clearInterval(interval);
                showScore(count);
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

function showScore(result) {
    // Verify to see it works
    console.log("showScore ran!")

    questionContainerElement.classList.add('hide')
    viewButton.classList.add('hide')
    scorepage.classList.remove('hide')
    saveButton.classList.remove('hide')



    saveButton.onclick = function () {
        var nickname = document.getElementById('initials').value;
        var score = result;
        console.log(nickname)
        console.log(score)
        storeScore(nickname, score)

    }

    // Local storage
    function storeScore(a, b) {

        //Stores score and name into local Storage
        localStorage.setItem(a, b);
        scoreBoard();
    }
}

//Shows the scoreboard from local storage
function scoreBoard() {
    scorepage.classList.add('hide')
    leaderBoard.classList.remove('hide')

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push( key + ' = ' + localStorage.getItem(key));
    }

    // Prints list
    leaderBoard.innerHTML = archive;
}



const questions = [
    {
        question: 'How many species of penguin are there?',
        answers: [
            { text: '18', correct: true },
            { text: '5', correct: false },
            { text: '9', correct: false },
            { text: '45', correct: false },
        ]
    },
    {
        question: 'How long can penguins stay underwater?',
        answers: [
            { text: '5 minutes', correct: false },
            { text: '10 minutes', correct: false },
            { text: '20 minutes', correct: true },
            { text: 'Indefinitely', correct: false }
        ]
    },
    {
        question: 'What do penguins tuxedo-like coloration help with?',
        answers: [
            { text: 'Attract mates', correct: false },
            { text: 'Camoflauge', correct: true },
            { text: 'Lay eggs', correct: false },
            { text: 'Sunbathing', correct: false }
        ]
    },
    {
        question: 'True or False. Penguins eyes work better underwater',
        answers: [
            { text: 'False', correct: false },
            { text: 'True', correct: true }
        ]
    },
    {
        question: 'What species of penguin is the largest?',
        answers: [
            { text: 'Rockhopper', correct: false },
            { text: 'King', correct: false },
            { text: 'Gentoo', correct: false },
            { text: 'Emperor', correct: true }
        ]
    },
    {
        question: 'What species of penguin is the smallest?',
        answers: [
            { text: 'Adelie', correct: false },
            { text: 'Little', correct: true },
            { text: 'Chinstrap', correct: false },
            { text: 'Galapagos', correct: false }
        ]
    },
    {
        question: 'Which species of penguins do not nest?',
        answers: [
            { text: 'Southern Rockhopper', correct: false },
            { text: 'King', correct: true },
            { text: 'Emperor', correct: true },
            { text: 'African', correct: false }
        ]
    },
]