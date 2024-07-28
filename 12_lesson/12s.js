let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loses: 0,
  ties: 0,
};
updateScore();

let isAutoPlaying = false;
let intervalId;

document.querySelector(".js-auto-play-btn").addEventListener("click", () => {
  autoplay();
});
function autoplay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
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

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame("Paper");
  } else if (event.key === "s") {
    playGame("Scissors");
  }
});

function playGame(playerMove) {
  let computerMove = pickComputerMove();
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
  let computerMove = "";
  const RandomNumber = Math.random();
  if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (RandomNumber >= 2 / 3 && RandomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
