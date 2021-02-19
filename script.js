const startButton = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('quest-cont');

//Upon clicking, .addEventListener runs a function.
startButton.addEventListener('click', startQuiz);

function startQuiz() {

    // Lets console know the quiz has started.
    console.log('Started');

    //Hides start button once quiz has begun.
    startButton.classList.add('hide');
    
    //Removes 'hide' from question container.
    questionContainerEl.classList.remove('hide');

    // Runs next question function.
    setNextQuestion();

};

function setNextQuestion() {

};

function selectAnswer() {


};