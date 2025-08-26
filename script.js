let timer;
let totalSeconds= 25 * 60;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const quoteDisplay = document.getElementById('quote');
const alarm = document.getElementById('alarm');

const quotes = [
    "Respire fundo, você está indo bem!",
    "Cada pausa é um passo para mais foco.",
    "Você merece esse momento.",
    "Beba um pouco de água 💧",
    "Movimente-se e alongue o corpo.",
    "Relaxe a mente, recarregue a energia."
];

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alarm.play();
                showRandomQuote();
            }
        }, 1000);
    }
}

function pauseTimer () {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer () {
    clearInterval(timer);
    totalSeconds = 25 * 60;
    isRunning = false;
    updateDisplay();
    quoteDisplay.textContent ="Pronto para começar?";
}

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();