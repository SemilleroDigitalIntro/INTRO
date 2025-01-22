//Variables para almacenar los puntos
let puntosJugador = 0;
let puntosComputadora = 0;

//Función que se ejecuta cuando el jugador elige una opción

function jugar(eleccionJugador) {

    //opciones disponibles
    const opciones = ['piedra', 'papel', 'tijera'];

    //es la selección aleatoria de la computadora
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];


    //muestra las elecciones y el <span> es para una parte del diseño
    let resultado = `Tú elegiste <span>${eleccionJugador}</span> la computadora eligió <span>${eleccionComputadora}</span>.`;

    //determina el resultado del juego
    if (eleccionJugador === eleccionComputadora) {
        resultado += "\n" + 'Empate';
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
        resultado += "\n" + '¡Ganaste esta ronda!';
        puntosJugador++;
    } else {
        resultado += "\n" + '¡Perdiste esta ronda!';
        puntosComputadora++;
    }

    //actualiza las puntucaciones
    document.getElementById('puntosJugador').textContent = puntosJugador;
    document.getElementById('puntosComputadora').textContent = puntosComputadora;

    //Si uno de los dos llega  3 puntos el juego comienza
    if (puntosJugador === 3) {
        resultado = '<span>¡Felicidades!</span> Ganaste la partida completa';
        reiniciarJuego();
    } else if (puntosComputadora === 3) {
        resultado = '<span>La computadora ganó</span> la partido completa. Intenta nuevamente';
        reiniciarJuego();
    }

    //Muestra el juego en el documento
    document.getElementById('resultado').innerHTML = resultado;
}
    //Función que reinicia el juego
function reiniciarJuego() {
    puntosJugador = 0;
    puntosComputadora = 0;

    document.getElementById('puntosJugador').textContent = puntosJugador;
    document.getElementById('puntosComputadora').textContent = puntosComputadora;
}



