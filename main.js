let gameValue = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  gameValue = Math.floor(Math.random() * 100) + 1;
  console.log("정답", gameValue);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이의 숫자만 입력해 주세요";
    return; // return만 쓰는 건 여기서 해당 함수를 종료시켜주는 역할. 아래 코드까지 읽지 않는다.
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해 주세요";
    return;
  }
  chances--;
  chanceArea.textContent = `남은 기회: ${chances}번`;
  console.log("chance", chances);

  if (userValue < gameValue) {
    resultArea.textContent = "UP!!!";
  } else if (userValue > gameValue) {
    resultArea.textContent = "DOWN!!!";
  } else {
    resultArea.textContent = "정답입니다!!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver === true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과가 나온다";
  chanceArea.textContent = `남은 찬스: 5번`;
  chances = 5;
}

pickRandomNum();
