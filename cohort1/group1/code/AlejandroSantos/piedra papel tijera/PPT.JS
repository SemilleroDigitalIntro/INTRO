// Variables para el marcador
let playerScore = 0;
let computerScore = 0;

// Función para que la computadora elija una opción al azar
function getComputerChoice() {
  const choices = ["piedra", "papel", "tijeras"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Función para determinar el ganador
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "¡Empate!";
  }

  if (
    (playerChoice === "piedra" && computerChoice === "tijeras") ||
    (playerChoice === "papel" && computerChoice === "piedra") ||
    (playerChoice === "tijeras" && computerChoice === "papel")
  ) {
    playerScore++;
    return "¡Ganaste!";
  } else {
    computerScore++;
    return "Perdiste...";
  }
}

// Actualizar el marcador
function updateScoreboard() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

// Manejar la elección del jugador
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const resultMessage = determineWinner(playerChoice, computerChoice);

  document.getElementById("resultado").textContent = `Elegiste: ${playerChoice}.
  La computadora eligió: ${computerChoice}. ${resultMessage}`;
  updateScoreboard();
}

document.getElementById("piedra").addEventListener("click", () => playGame("piedra"));
document.getElementById("papel").addEventListener("click", () => playGame("papel"));
document.getElementById("tijeras").addEventListener("click", () => playGame("tijeras"));