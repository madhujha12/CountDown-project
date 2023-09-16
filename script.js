
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");


let countdown;
let timerIsRunning = false;
let minutes = 2;
let seconds = 0; 

function updateDisplay() {
    minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
}


function startTimer() {
    if (!timerIsRunning) {
        countdown = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(countdown);
                timerIsRunning = false;
                return;
            }
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
        timerIsRunning = true;
    }
}

function stopTimer() {
    clearInterval(countdown);
    timerIsRunning = false;
}


function resetTimer() {
    stopTimer();
    minutes = 2; 
    seconds = 0; 
    updateDisplay();
}


startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);


updateDisplay();
