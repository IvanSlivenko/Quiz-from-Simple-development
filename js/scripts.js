let data = questionsArray;

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');


 const renderQuestions = (index) => {
    const renderAnswers = () =>{

    }
    questions.innerHTML = `
    <div class="quiz-questions-item">
          <div class="quiz-questions-item__question">${data[index].question}</div>
          <ul class="quiz-questions-item__answers">
            <li>
              <label>
                <input type="radio" name="q1" />
                Відповідь № 1
              </label>
            </li>

            <li>
              <label>
                <input type="radio" name="q1" />
                Відповідь № 2
              </label>
            </li>
          </ul>
        </div>
    `;
 };
 const renderResults = () => {};
 const renderIndicator = () => {};


 quiz.addEventListener('change', (event) => {
    // логіка відповіді

 });

 quiz.addEventListener('click', (event) => {
    // Кнопка вперед чи зпочатку

    if(event.target.classList.contains('btn-next')){
        console.log('btn-next')
    }

    if(event.target.classList.contains('btn-restart')){
        console.log('btn-restart')
    }
    
 });