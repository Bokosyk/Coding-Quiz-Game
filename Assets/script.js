const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('quest-cont');

startButton.addEventListener('click', startQuiz);

function startQuiz() {

    // Lets console know the quiz has started.
    console.log('Started')
    //Hides start button once quiz has begun.
    startButton.classList.add('hide')
};

function setNextQuestion() {

};

function selectAnswer() {


};