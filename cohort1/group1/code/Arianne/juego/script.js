// Variables para los puntajes
let userScore = 0;
let cpuScore = 0;

// Función principal del juego
function playGame(userChoice) {
  // Opciones posibles
  const choices = ['piedra', 'papel', 'tijera'];
  const cpuChoice = choices[Math.floor(Math.random() * 3)]; // Elección aleatoria de la CPU

  // Determinar el resultado
  let resultMessage = '';

  if (userChoice === cpuChoice) {
    resultMessage = `Empate. Ambos eligieron ${userChoice}.`;
  } else if (
    (userChoice === 'piedra' && cpuChoice === 'tijera') ||
    (userChoice === 'papel' && cpuChoice === 'piedra') ||
    (userChoice === 'tijera' && cpuChoice === 'papel')
  ) {
    userScore++;
    resultMessage = `¡Ganaste! ${userChoice} vence a ${cpuChoice}.`;
  } else {
    cpuScore++;
    resultMessage = `Perdiste. ${cpuChoice} vence a ${userChoice}.`;
  }

  // Actualizar el mensaje y puntaje en el DOM
  document.getElementById('result').textContent = resultMessage;
  document.getElementById('score').textContent = `Tú: ${userScore} | CPU: ${cpuScore}`;
}