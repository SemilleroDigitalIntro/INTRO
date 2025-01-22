// Contador de victorias
let wins = 0; 
// Contador de empates
let ties = 0; 
// Contador de derrotas
let losses = 0; 

// Función principal para jugar el juego
// Esta función se llama cuando el jugador hace una elección. 
// Toma la elección del jugador como argumento, obtiene la elección de la computadora, 
// determina el resultado y muestra el resultado en pantalla.
function playGame(playerChoice) {
    const computerChoice = getComputerChoice(); // Elección aleatoria de la computadora
    const result = determineWinner(playerChoice, computerChoice); // Determinar el resultado
    displayResult(playerChoice, computerChoice, result); // Mostrar el resultado
}

// Función para obtener la elección aleatoria de la computadora
// Esta función genera una elección aleatoria entre 'piedra', 'papel' y 'tijera' 
// y la devuelve como resultado.
function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera']; // Opciones disponibles
    const randomIndex = Math.floor(Math.random() * choices.length); // Índice aleatorio
    return choices[randomIndex]; // Retorna la elección aleatoria
}

// Función para determinar el ganador del juego
// Esta función compara la elección del jugador con la de la computadora 
// y determina el resultado del juego. Actualiza los contadores de victorias, empates y derrotas.
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) { // Si hay un empate
        ties++; // Incrementa el contador de empates
        return 'Empate'; // Retorna el resultado
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijera') || // Piedra gana a tijera
        (playerChoice === 'papel' && computerChoice === 'piedra') || // Papel gana a piedra
        (playerChoice === 'tijera' && computerChoice === 'papel') // Tijera gana a papel
    ) {
        wins++; // Incrementa el contador de victorias
        return '¡Ganaste!'; // Retorna el resultado
    } else {
        losses++; // Incrementa el contador de derrotas
        return 'Perdiste'; // Retorna el resultado
    }
}

// Función para mostrar el resultado en la pantalla
// Esta función actualiza el contenido del elemento HTML que muestra el resultado 
// del juego, incluyendo la elección del jugador, la elección de la computadora y el resultado.
function displayResult(playerChoice, computerChoice, result) {
    const resultDisplay = document.getElementById('resultDisplay'); // Elemento donde se muestra el resultado
    resultDisplay.innerHTML = `Tú elegiste: ${playerChoice}<br>Computadora eligió: ${computerChoice}<br>${result}`; // Actualiza el contenido
    updateStats(); // Llama a la función para actualizar estadísticas
}

// Función para actualizar las estadísticas
// Esta función actualiza el contenido del elemento HTML que muestra las estadísticas 
// del juego, incluyendo el número de victorias, empates y derrotas.
function updateStats() {
    const statsDisplay = document.getElementById('statsDisplay'); // Elemento donde se muestran las estadísticas
    statsDisplay.innerHTML = `Victorias: ${wins} | Empates: ${ties} | Derrotas: ${losses}`; // Actualiza el contenido
}