let puntuacionJugador = 0;
let puntuacionComputadora = 0;
const maxVictorias = 3;



// Aseguramos que la sección exista antes de agregar el event listener
if (section3) {
    section3.tabIndex = 0; // Aseguramos que section3 pueda recibir el foco
    section3.addEventListener('keydown', function (event) {
        console.log('Tecla presionada:', event.key); // Depuración: Ver qué tecla se presionó
        // Solo se juega si no se ha alcanzado el número máximo de victorias
        if (puntuacionJugador < maxVictorias && puntuacionComputadora < maxVictorias) {
            switch (event.key.toLowerCase()) {
                case 'a':
                    jugar('papel');
                    break;
                case 's':
                    jugar('tijeras');
                    break;
                case 'd':
                    jugar('piedra');
                    break;
                default:
                    console.log('Presiona A, S o D');
            }
        } 

    }
    );

    function jugar(eleccionJugador) {
        const opciones = ['papel', 'tijeras', 'piedra'];
        const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

        // Obtener los iconos para el jugador y la computadora dentro de la sección section3
        const iconJugador = section3.querySelector('.figuras .fa-solid:first-child');
        const iconComputadora = section3.querySelector('.figuras .fa-solid:last-child');

        if (!iconJugador || !iconComputadora) {
            console.log("No se encontraron los iconos para el jugador o la computadora");
            return;
        }

        console.log('Elección del jugador:', eleccionJugador); // Depuración: Ver elección del jugador
        console.log('Elección de la computadora:', eleccionComputadora); // Depuración: Ver elección de la computadora

        // Cambiar los iconos y añadir animación
        iconJugador.className = `fa-solid ${getIconClass(eleccionJugador)} fa-bounce`;
        iconComputadora.className = `fa-solid ${getIconClass(eleccionComputadora)} fa-bounce`;

        // Evaluar el resultado después de 2 segundos y detener la animación
        setTimeout(() => {
            // Detener animación
            iconJugador.classList.remove('fa-bounce');
            iconComputadora.classList.remove('fa-bounce');

            // Evaluar resultado
            let resultado;
            if (eleccionJugador === eleccionComputadora) {
                resultado = '¡Empate!';
            } else if (
                (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
                (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel') ||
                (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras')
            ) {
              
                puntuacionJugador++;
            } else {
              
                puntuacionComputadora++;
            }

           
            actualizarMarcadores();
            if (puntuacionJugador === maxVictorias) {
                mensaje_gn();
            } else if (puntuacionComputadora === maxVictorias) {
                mensaje_pd();
            }
           

            // Restaurar iconos a su estado original (puños cerrados)
            iconJugador.className = 'fa-solid fa-hand-fist';
            iconComputadora.className = 'fa-solid fa-hand-fist';

        }, 1000); // Fin del timeout de 2 segundos
    }

    // Función para devolver la clase Font Awesome correspondiente
    function getIconClass(eleccion) {
        switch (eleccion) {
            case 'papel': return 'fa-hand';
            case 'tijeras': return 'fa-hand-scissors';
            case 'piedra': return 'fa-hand-fist';
            default: return 'fa-question';
        }
    }

    // Actualizar marcadores en el DOM
    function actualizarMarcadores() {
        const playerScore = section3.querySelector('#player');
        const computerScore = section3.querySelector('#Computer');
        if (playerScore && computerScore) {
            playerScore.textContent = puntuacionJugador;
            computerScore.textContent = puntuacionComputadora;
        } else {
            console.log("No se encontraron los elementos de marcador");
        }
    }


} else {
    console.log("No se encontró la sección con id='section3'");
}

function mensaje() {

    const mensaje = document.getElementById('mensaje-ganador');
    document.getElementById('menu').style.transform = 'translateY(0)';
    mensaje.textContent = '🎉 ¡Ganaste Player2, Reinicia para volver a jugar.';
 

    
}
function mensaje_gn() {
    const mensaje = document.getElementById('mensaje-ganador');
    document.getElementById('menu').style.transform = 'translateY(0)';
    mensaje.textContent = '🎉 ¡Ganaste Player1!, Reinicia para volver a jugar.';

}

function mensaje_pd() {
    const mensaje = document.getElementById('mensaje-ganador');
    document.getElementById('menu').style.transform = 'translateY(0)';
    mensaje.textContent = '💥 La computadora ganó esta vez. ¡Intenta de nuevo!';


}


