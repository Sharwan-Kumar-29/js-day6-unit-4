let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let interval = null;
let isRunning = false;

// Function to update the timer display
function updateDisplay() {
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        interval = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    updateDisplay();
    isRunning = false;
}

// Event Listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Initial display
updateDisplay();
