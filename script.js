document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "What is the unit of force in the International System of Units (SI)?",
            options: ["Newton", "Joule", "Watt"],
            answer: "Newton"
        },
        {
            lesson: "What is the speed of light in a vacuum?",
            options: ["3 x 10^8 m/s", "1 x 10^8 m/s", "3 x 10^6 m/s"],
            answer: "3 x 10^8 m/s"
        },
        {
            lesson: "What is the formula for calculating kinetic energy?",
            options: ["0.5 * m * v^2", "m * v", "m * g * h"],
            answer: "0.5 * m * v^2"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
