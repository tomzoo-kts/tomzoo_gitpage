let currentNumber = Math.floor(Math.random() * 100) + 1;

function updateDisplay() {
    document.getElementById('currentNumber').textContent = `Current Number: ${currentNumber}`;
    document.getElementById('resultMessage').textContent = '';
}

function guessHigher() {
    const nextNumber = Math.floor(Math.random() * 100) + 1;
    if (nextNumber > currentNumber) {
        document.getElementById('resultMessage').textContent = 'Correct! It was higher!';
    } else {
        document.getElementById('resultMessage').textContent = 'Wrong! It was not higher!';
    }
    currentNumber = nextNumber;
    updateDisplay();
}

function guessLower() {
    const nextNumber = Math.floor(Math.random() * 100) + 1;
    if (nextNumber < currentNumber) {
        document.getElementById('resultMessage').textContent = 'Correct! It was lower!';
    } else {
        document.getElementById('resultMessage').textContent = 'Wrong! It was not lower!';
    }
    currentNumber = nextNumber;
    updateDisplay();
}

function startNewGame() {
    currentNumber = Math.floor(Math.random() * 100) + 1;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', (event) => {
    startNewGame();
});
