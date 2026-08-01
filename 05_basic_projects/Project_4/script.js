let randomNumber = Math.round(Math.random() * 100);
const submitButton = document.querySelector(".submit-btn");
const form = document.querySelector(".content");
const gameMessage = document.querySelector(".game-message");
const newGameBtn = document.querySelector(".newgame-btn");
let preShow = document.querySelector(".prev-show");
let invalidMessage = document.querySelector(".valid-num");
let numOfAttempts = document.querySelector(".num-attempt-left");

console.log(randomNumber);

let playGame = true;
let prevGuesses = [];
let numOfGuesses = 1;

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let userInput = document.querySelector(".userInput");
    let userInputValue = parseInt(userInput.value);
    console.log(userInputValue);
    userInput.value = "";
    validGuess(userInputValue);
  });
}

const validGuess = (guess) => {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    showMessage(`Please Enter a Valid Number`);
  } else if (numOfGuesses === 10) {
    showMessage(`No attempts left, the random number was ${randomNumber}`);
    endGame();
  } else {
    checkGuess(guess);
    prevGuesses.push(guess);
    numOfGuesses++;
    preShow.innerHTML = `[${prevGuesses}]`;
    numOfAttempts.innerHTML = `${10 - numOfGuesses + 1}`;
    invalidMessage.innerHTML = "";
  }
};

function checkGuess(guess) {
  if (guess < randomNumber) {
    showMessage(`The entered number is too low`);
  } else if (guess > randomNumber) {
    showMessage(`The entered number is too high`);
  } else if (guess === randomNumber) {
    showMessage(`You Win! ❤️`);
    endGame();
  }
}

function showMessage(message) {
  invalidMessage.innerHTML = message;
  gameMessage.innerHTML = message;
}

let button = document.createElement("button");
button.innerText = "New Game";
button.classList.add("new-gameBtn");

function endGame() {
  playGame = false;
  submitButton.setAttribute("disabled", "");
  newGameBtn.appendChild(button);
}

button.addEventListener("click", () => {
  newGame();
  console.log("clicked");
});

function newGame() {
  playGame = true;
  randomNumber = Math.round(Math.random() * 100);
  submitButton.removeAttribute("disabled");
  newGameBtn.removeChild(button);
  numOfGuesses = 1;
  prevGuesses = [];
  invalidMessage.innerHTML = "";
  gameMessage.innerHTML = "";
  preShow.innerHTML = "";
  numOfAttempts.innerHTML = "10";
  form.reset();
  console.log(randomNumber);
}
