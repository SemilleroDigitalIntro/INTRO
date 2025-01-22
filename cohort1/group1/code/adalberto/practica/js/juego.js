function playGame(playerChoice) {
    console.log(`Jugador eligió: ${playerChoice}`); // Para depurar
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = `Empate 🤝 Ambos eligieron <span class="highlight">${playerChoice}</span>.`;
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijera') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
        resultMessage = `¡Ganaste! 🎉 Elegiste <span class="highlight">${playerChoice}</span> y la computadora eligió <span class="highlight">${computerChoice}</span>.`;
    } else {
        resultMessage = `Perdiste 😢 Elegiste <span class="highlight">${playerChoice}</span> y la computadora eligió <span class="highlight">${computerChoice}</span>.`;
    }

    document.getElementById('result').innerHTML = resultMessage;
}