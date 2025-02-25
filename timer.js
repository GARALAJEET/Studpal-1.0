let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isTimerRunning = false;
const timerDisplay = document.querySelector('.timer-display');
const customTimeInput = document.querySelector('.custom-time-input');

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        timeLeft = 0;
        updateTimerDisplay();
        alert('Time is up! Take a break.');
      }
    }, 1000);
    
    // Update button states
    document.querySelector('[data-timer="start"]').classList.add('hidden');
    document.querySelector('[data-timer="pause"]').classList.remove('hidden');
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  
  // Update button states
  document.querySelector('[data-timer="start"]').classList.remove('hidden');
  document.querySelector('[data-timer="pause"]').classList.add('hidden');
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timeLeft = parseInt(customTimeInput.value) * 60 || 25 * 60;
  updateTimerDisplay();
  
  // Update button states
  document.querySelector('[data-timer="start"]').classList.remove('hidden');
  document.querySelector('[data-timer="pause"]').classList.add('hidden');
}

function setCustomTime() {
  const minutes = parseInt(customTimeInput.value);
  if (minutes > 0 && minutes <= 180) { // Limit to 3 hours
    timeLeft = minutes * 60;
    updateTimerDisplay();
  } else {
    alert('Please enter a valid time between 1 and 180 minutes');
    customTimeInput.value = '25';
  }
}

function setPresetTime(minutes) {
  customTimeInput.value = minutes;
  timeLeft = minutes * 60;
  updateTimerDisplay();
}

