let data = questionsArray;

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');


const renderQuestions = (index) => {
    renderIndicator(index+1)
    const renderAnswers = () =>
        data[index].answers
            .map((answer) =>
                `
            <li>
              <label>
                <input class="answer-input" type="radio" name=${index} value=${answer.id}/>
                ${answer.value}
              </label>
            </li>
            `
            ).join('');

    questions.innerHTML = `
    <div class="quiz-questions-item">
          <div class="quiz-questions-item__question">${data[index].question}</div>
          <ul class="quiz-questions-item__answers">
            ${renderAnswers()}
          </ul>
        </div>
    `;
};
const renderResults = () => { };
const renderIndicator = (currentStep) => {
    indicator.innerHTML= `${currentStep} / ${data.length}`
 };


quiz.addEventListener('change', (event) => {
    // логіка відповіді

});

quiz.addEventListener('click', (event) => {
    // Кнопка вперед чи зпочатку

    if (event.target.classList.contains('btn-next')) {
        console.log('btn-next')
    }

    if (event.target.classList.contains('btn-restart')) {
        console.log('btn-restart')
    }

});

renderQuestions(0);