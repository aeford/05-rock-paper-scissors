// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Get the result div from the HTML
const resultDiv = document.getElementById("result");

// This function returns "Rock", "Paper", or "Scissors" at random
function getComputerChoice() {
  // Make a random number: 0, 1, or 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Use if statements to pick a choice based on the random number
  if (randomNumber === 0) {
    return "Rock";
  }
  if (randomNumber === 1) {
    return "Paper";
  }
  // If it's not 0 or 1, it must be 2
  return "Scissors";
}

// This function plays one round of the game
function playRound(playerChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Make a message showing both choices using template literals
  let message = `You chose: ${playerChoice}<br>Computer chose: ${computerChoice}`;

  // Decide who wins
  let result = "";

  // If both choices are the same, it's a tie
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  }
  // Check if player wins
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win!";
  }
  // Check if computer wins
  if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    result = "Computer wins!";
  }

  // Add the result to the message
  message = `${message}<br><strong>${result}</strong>`;

  // Show the message on the page
  resultDiv.innerHTML = message;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  // Call playRound with "Rock"
  playRound("Rock");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  // Call playRound with "Paper"
  playRound("Paper");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  // Call playRound with "Scissors"
  playRound("Scissors");
});