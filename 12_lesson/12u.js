const score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loses: 0,
  ties: 0,
};
updateScore();

const alertBtn = document.querySelector(".alert-btn");
const resetScore = document.querySelector(".js-reset-score-btn");

resetScore.addEventListener("click", () => {
  showResetConfirmation();
});

function resetBtn() {
  score.win = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScore();
}

let isAutoPlaying = false;
let intervalId;

function autoplay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      document.querySelector(".js-auto-play-btn").innerHTML = "Stop playing";
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector(".js-auto-play-btn").innerHTML = "Auto Play";
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("Rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("Paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("Scissors");
});

document.querySelector(".js-auto-play-btn").addEventListener("click", () => {
  autoplay();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame("Paper");
  } else if (event.key === "s") {
    playGame("Scissors");
  } else if (event.key === "a") {
    autoplay();
  } else if (event.key === "Backspace") {
    showResetConfirmation();
  }
});

function showResetConfirmation() {
  alertBtn.innerHTML = `
    Are you sure you want to remove Score ?
    <button class="js-reset-confirm-yes">Yes</button>
    <button class="js-reset-confirm-no">No</button>
  `;

  document
    .querySelector(".js-reset-confirm-yes")
    .addEventListener("click", () => {
      resetBtn();
      hideResetButton();
    });

  document
    .querySelector(".js-reset-confirm-no")
    .addEventListener("click", () => {
      hideResetButton();
    });
}

function hideResetButton() {
  alertBtn.innerHTML = "";
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You win.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    score.win += 1;
  } else if (result === "You lose.") {
    score.loses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-moves").innerHTML = `You 
        <img src="Images/${playerMove}-emoji.png" class="move-icon">
        <img src="Images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
  updateScore();
  localStorage.setItem("score", JSON.stringify(score));
}

function updateScore() {
  const jsScore = document.querySelector(".js-score");
  jsScore.innerHTML = `Wins ${score.win}, Loses ${score.loses}, Ties ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
