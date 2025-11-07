document.addEventListener("DOMContentLoaded", function () {
  let userScore = 0;
  let compScore = 0;

  // to get the div container of choices
  const choices = document.querySelectorAll(".choice");

  const msg = document.querySelector("#msg");
  const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");
  const resetBtn = document.querySelector("#reset-btn");

  // to generate computer choice
  const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
  };

  // to show draw game
  const drawGame = () => {
    msg.textContent = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#0d3b66";
  };

  // display the winner
  const displayWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.textContent = userScore;
      msg.textContent = `✅You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.textContent = compScore;
      msg.textContent = `❌You lost! ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };

  // when user choose the choice
  const playGame = (userChoice) => {
    // generating computer choice
    const compChoice = generateCompChoice();

    // to check the game
    if (userChoice === compChoice) {
      // draw game
      drawGame();
    } else {
      // to track whether user wins or not
      let userWin = true;
      if (userChoice === "rock") {
        // check winning condition
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        // check wining condition
        userWin = compChoice === "scissors" ? false : true;
      } else {
        // check winning condition
        userWin = compChoice === "rock" ? false : true;
      }
      displayWinner(userWin, userChoice, compChoice);
    }
  };

  choices.forEach((choice) => {
    // executes when user click on one choice
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      resetBtn.style.display = "inline-block";
      playGame(userChoice);
    });
  });

  // reset button
  resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.textContent = 0;
    compScorePara.textContent = 0;
    msg.textContent = "Play your move!";
    msg.style.backgroundColor = "#0d3b66";
  });
});
