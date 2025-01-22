const resultDiv = document.getElementById('result');
const user1ChoiceText = document.getElementById('user1-choice');
const user2ChoiceText = document.getElementById('user2-choice');

let user1Choice = '';
let user2Choice = '';
let isUser1Ready = false;
let isUser2Ready = false;

function checkResult() {
    if (!isUser1Ready || !isUser2Ready) return;

    let result = '';

    if (user1Choice === user2Choice) {
        result = `Empate! Ambos eligieron ${user1Choice}.`;
    } else if (
        (user1Choice === 'piedra' && user2Choice === 'tijera') ||
        (user1Choice === 'papel' && user2Choice === 'piedra') ||
        (user1Choice === 'tijera' && user2Choice === 'papel')
    ) {
        result = `Jugador 1 gana! ${user1Choice} vence a ${user2Choice}.`;
    } else {
        result = `Jugador 2 gana! ${user2Choice} vence a ${user1Choice}.`;
    }

    user1ChoiceText.textContent = user1Choice; // Muestra la elección del Jugador 1
    user2ChoiceText.textContent = user2Choice; // Muestra la elección del Jugador 2
    resultDiv.textContent = result;

    // Reiniciar elecciones
    user1Choice = '';
    user2Choice = '';
    isUser1Ready = false;
    isUser2Ready = false;
}

document.getElementById('rock1').addEventListener('click', () => { user1Choice = 'piedra'; isUser1Ready = true; checkResult(); });
document.getElementById('paper1').addEventListener('click', () => { user1Choice = 'papel'; isUser1Ready = true; checkResult(); });
document.getElementById('scissors1').addEventListener('click', () => { user1Choice = 'tijera'; isUser1Ready = true; checkResult(); });

document.getElementById('rock2').addEventListener('click', () => { user2Choice = 'piedra'; isUser2Ready = true; checkResult(); });
document.getElementById('paper2').addEventListener('click', () => { user2Choice = 'papel'; isUser2Ready = true; checkResult(); });
document.getElementById('scissors2').addEventListener('click', () => { user2Choice = 'tijera'; isUser2Ready = true; checkResult(); });