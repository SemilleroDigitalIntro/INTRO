function jugar(eleccionJugador) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    let resultado = '';
    

    const imagenComputadora = document.getElementById('eleccionComputadora');
    imagenComputadora.innerHTML = `<img src="${eleccionComputadora}.png" alt="${eleccionComputadora}">`;

    if (eleccionJugador === eleccionComputadora) {
        resultado = `¡Empate! Ambos eligieron ${eleccionJugador}.`;
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
        resultado = `¡Ganaste! Tú elegiste ${eleccionJugador} y la computadora eligió ${eleccionComputadora}.`;
    } else {
        resultado = `¡Perdiste! Tú elegiste ${eleccionJugador} y la computadora eligió ${eleccionComputadora}.`;
    }

    document.getElementById('resultado').innerText = resultado;
}