window.addEventListener("load", init);

//available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};

//to change level
const currentLevel = levels.easy;

//global variables
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "algorithm",
  "code",
  "data",
  "encryption",
  "AI",
  "cloud",
  "security",
  "network",
  "VR",
  "blockchain",
];

// initialize game
function init() {
  //show number of seconds in the UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  //start matching on word input
  wordInput.addEventListener("input", startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 50);
}

//start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // if score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
//match currentword to input() {
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "CORRECT";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//pick and show random word
function showWord(words) {
  // generate random array index
  const randomIndex = Math.floor(Math.random() * words.length);

  //output random word
  currentWord.innerHTML = words[randomIndex];
}

//countdown timer
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  //showing the time
  timeDisplay.innerHTML = time;
}

//check game status

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game ends!";
    score = 0;
  }
}
