let puntuacionJugador1 = 0;
let puntuacionJugador2 = 0;
const maxVictoria = 3;



// Agregar control por teclado para dos jugadores
if (section4) {
    // Variables globales inicializadas
    let eleccionJugador1 = null;
    let eleccionJugador2 = null;

    section4.tabIndex = 0; // Permitir que la sección reciba el foco

    section4.addEventListener('keydown', function (event) {
        console.log('Tecla presionada:', event.key); // Depuración
        if (puntuacionJugador1 < maxVictoria && puntuacionJugador2 < maxVictoria) {
            // Registrar elecciones según la tecla presionada
            switch (event.key.toLowerCase()) {
                case 'a': eleccionJugador1 = 'papel'; break;
                case 's': eleccionJugador1 = 'tijeras'; break;
                case 'd': eleccionJugador1 = 'piedra'; break;
                case 'j': eleccionJugador2 = 'papel'; break;
                case 'k': eleccionJugador2 = 'tijeras'; break;
                case 'l': eleccionJugador2 = 'piedra'; break;
            }

            // Si ambos jugadores han hecho su elección, jugar
            if (eleccionJugador1 && eleccionJugador2) {
                jugar(eleccionJugador1, eleccionJugador2);
                eleccionJugador1 = null; // Reiniciar elección
                eleccionJugador2 = null; // Reiniciar elección
            }
        }
    });

    function jugar(eleccionJugador1, eleccionJugador2) {
        const iconJugador1 = section4.querySelector('.figuras .fa-solid:first-child');
        const iconJugador2 = section4.querySelector('.figuras .fa-solid:last-child');

        if (!iconJugador1 || !iconJugador2) {
            console.log("No se encontraron los iconos para los jugadores");
            return;
        }

        // Cambiar iconos y añadir animación
        iconJugador1.className = `fa-solid ${getIconClass(eleccionJugador1)} fa-bounce`;
        iconJugador2.className = `fa-solid ${getIconClass(eleccionJugador2)} fa-bounce`;

        // Evaluar resultado después de 2 segundos
        setTimeout(() => {
            iconJugador1.classList.remove('fa-bounce');
            iconJugador2.classList.remove('fa-bounce');

            if (eleccionJugador1 === eleccionJugador2) {
                console.log('¡Empate!');
            } else if (esGanador(eleccionJugador1, eleccionJugador2)) {
                puntuacionJugador1++;
            } else {
                puntuacionJugador2++;
            }

            actualizarMarcadores();

            if (puntuacionJugador1 === maxVictoria) {
                mensaje_gn(); // Mostrar mensaje de ganador
            } else if (puntuacionJugador2 === maxVictoria) {
                mensaje(); // Mostrar mensaje de derrota
            }

            // Restaurar iconos a su estado original
            iconJugador1.className = 'fa-solid fa-hand-fist';
            iconJugador2.className = 'fa-solid fa-hand-fist';
        }, 2000);
    }

    function getIconClass(eleccion) {
        switch (eleccion) {
            case 'papel': return 'fa-hand';
            case 'tijeras': return 'fa-hand-scissors';
            case 'piedra': return 'fa-hand-fist';
            default: return 'fa-question';
        }
    }

    function esGanador(eleccion1, eleccion2) {
        return (
            (eleccion1 === 'papel' && eleccion2 === 'piedra') ||
            (eleccion1 === 'tijeras' && eleccion2 === 'papel') ||
            (eleccion1 === 'piedra' && eleccion2 === 'tijeras')
        );
    }

    function actualizarMarcadores() {
        const marcadorJugador1 = section4.querySelector('#Player1');
        const marcadorJugador2 = section4.querySelector('#player2');
        if (marcadorJugador1 && marcadorJugador2) {
            marcadorJugador1.textContent = puntuacionJugador1;
            marcadorJugador2.textContent = puntuacionJugador2;
        } else {
            console.log("No se encontraron los elementos de marcador");
        }
    }
} else {
    console.log("No se encontró la sección con id='section4'");
}


