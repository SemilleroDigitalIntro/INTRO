const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');



function seleccion() {
    section1.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        section1.style.display = 'none';
        section2.style.display = 'flex';
        section2.style.transform = 'translateX(0)';
    }, 500);
}

function p1() {
    section2.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        section2.style.display = 'none';
        section3.style.display = 'flex';
        section3.style.transform = 'translateX(0)';
    }, 500);
    console.log('P1 seleccionado');
}

function p2() {
    section2.style.transform = 'translateX(-100%)';

    section3.style.display = 'none';
    section2.style.display = 'none';
    section4.style.display = 'flex';
    section4.style.transform = 'translateX(0)';


    console.log('P2 seleccionado');
}

// Botón Home que regresa al inicio
document.getElementById('home').addEventListener('click', function () {
    document.querySelectorAll('section').forEach(section => {
        section1.style.transform = 'translateX(0)';
        section1.style.display = 'flex';
        section.style.opacity = '1';
        document.getElementById('menu').style.transform = 'translateY(1000%)';
        document.getElementById('menu').style.transition = 'transform 0.8s ease-in-out';
       
          // Reiniciar puntuaciones globales
    puntuacionJugador = 0;
    puntuacionComputadora = 0;
    puntuacionJugador1 = 0;
    puntuacionJugador2 = 0;

    // Reiniciar marcadores visuales
    const marcadorJugador1 = document.querySelector('#Player1');
    const marcadorJugador2 = document.querySelector('#player2');
    const marcadorJugador = document.querySelector('#player');
    const marcadorComputadora = document.querySelector('#Computer');

    if (marcadorJugador1 && marcadorJugador2) {
        marcadorJugador1.textContent = '0';
        marcadorJugador2.textContent = '0';
    }
    if (marcadorJugador && marcadorComputadora) {
        marcadorJugador.textContent = '0';
        marcadorComputadora.textContent = '0';
    }

    // Restablecer iconos a su estado inicial
    const iconJugador1 = document.querySelector('#section4 .figuras .fa-solid:first-child');
    const iconJugador2 = document.querySelector('#section4 .figuras .fa-solid:last-child');
    if (iconJugador1 && iconJugador2) {
        iconJugador1.className = 'fa-solid fa-hand-fist';
        iconJugador2.className = 'fa-solid fa-hand-fist';
    }

    // Ocultar el menú (opcional, ajusta según la lógica de tu juego)
    const menu = document.getElementById('menu');
    if (menu) {
        menu.style.transform = 'translateY(1000%)';
        menu.style.transition = 'transform 0.8s ease-in-out';
    }

    // Reiniciar elecciones de jugadores
    eleccionJugador1 = null;
    eleccionJugador2 = null;

    });
});

document.getElementById('repeat').addEventListener('click', function () {
    // Reiniciar puntuaciones globales
    puntuacionJugador = 0;
    puntuacionComputadora = 0;
    puntuacionJugador1 = 0;
    puntuacionJugador2 = 0;

    // Reiniciar marcadores visuales
    const marcadorJugador1 = document.querySelector('#Player1');
    const marcadorJugador2 = document.querySelector('#player2');
    const marcadorJugador = document.querySelector('#player');
    const marcadorComputadora = document.querySelector('#Computer');

    if (marcadorJugador1 && marcadorJugador2) {
        marcadorJugador1.textContent = '0';
        marcadorJugador2.textContent = '0';
    }
    if (marcadorJugador && marcadorComputadora) {
        marcadorJugador.textContent = '0';
        marcadorComputadora.textContent = '0';
    }

    // Restablecer iconos a su estado inicial
    const iconJugador1 = document.querySelector('#section4 .figuras .fa-solid:first-child');
    const iconJugador2 = document.querySelector('#section4 .figuras .fa-solid:last-child');
    if (iconJugador1 && iconJugador2) {
        iconJugador1.className = 'fa-solid fa-hand-fist';
        iconJugador2.className = 'fa-solid fa-hand-fist';
    }

    // Ocultar el menú (opcional, ajusta según la lógica de tu juego)
    const menu = document.getElementById('menu');
    if (menu) {
        menu.style.transform = 'translateY(1000%)';
        menu.style.transition = 'transform 0.8s ease-in-out';
    }

    // Reiniciar elecciones de jugadores
    eleccionJugador1 = null;
    eleccionJugador2 = null;


    console.log("El juego ha sido reiniciado correctamente");
});




