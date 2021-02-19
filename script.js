const startButton = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('quest-cont');

//Shuffles questions
const shuffleQuestions, currentQuestionIndex

//Upon clicking, .addEventListener runs a function.
startButton.addEventListener('click', startQuiz);

function startQuiz() {

    // Lets console know the quiz has started.
    console.log('Started');

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

};

function selectAnswer() {


};

//All of the questions for the quiz go here
const questions = [
    {
        question: "What is 2 + 2",
        answers: [
            {text: '4', correct: true },
            {text: '4', correct: true },
            {text: '4', correct: true },
            {text: '4', correct: true },
        ]
    }
]