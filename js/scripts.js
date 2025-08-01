const data = [
    {
        question: 'Питання № 1',
        answers: [
            {
                id: '1',
                value: 'Відповідь 1',
                correct: true
            },
            {
                id: '2',
                value: 'Відповідь 2',
                correct: false
            },
            {
                id: '3',
                value: 'Відповідь 3',
                correct: false
            }


        ]
    },
    {
        question: 'Питання № 2',
        answers: [
            {
                id: '4',
                value: 'Відповідь 4',
                correct: false
            },
            {
                id: '5',
                value: 'Відповідь 5',
                correct: true
            }
        ]
    }
]

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');


 const renderQuestions = () => {};
 const renderResults = () => {};
 const renderIndicator = () => {};


 quiz.addEventListener('change')