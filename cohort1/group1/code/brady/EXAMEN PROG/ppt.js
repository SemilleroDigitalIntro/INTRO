// creando 3 variables constantes. Llamando todos los elementos de button y el elemento resultado.
const opciones = ['piedra', 'papel', 'tijera'];
const botones = document.querySelectorAll('button');
const resultdiv = document.getElementById('resultado');
//creando una funcion haciendo que eliga o escoga una eleccio random
function jugAleatoria() {
    return opciones[Math.floor(Math.random() * opciones.length)];
}
// creando la funcion jugar, la cual tiene la funcion de lo que pasara dependiendo la eleccion
// del usuario y la maquina.
function jugar(opcJugador) {
    const opcCompu = jugAleatoria();

    if (opcJugador === opcCompu) {
        resultdiv.textContent = "¡Empate!";
    } else if (
        (opcJugador === 'piedra' && opcCompu === 'tijera') ||
        (opcJugador === 'papel' && opcCompu === 'piedra') ||
        (opcJugador === 'tijera' && opcCompu === 'papel')
    ) {
        resultdiv.textContent = "¡Ganaste! :)";
    } else {
        resultdiv.textContent = "Perdiste... :(";
    }
}
// esta parte hace que cada boton tenga una accion al momento que se le haga clic asi llamando la funcion jugar con lo que tenga
// el id de boton
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        jugar(boton.id);
    });
});


