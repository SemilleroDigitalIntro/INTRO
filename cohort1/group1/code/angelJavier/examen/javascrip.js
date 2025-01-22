// Selección de elementos del DOM
const campobatalla = document.getElementById(`batalla-camp`); // Contenedor principal de la batalla
const msjbatalla = document.getElementById(`msj-batalla`); // Elemento para mostrar el mensaje de la batalla
const jugadorataque = document.getElementById(`imagen-jugador`); // Contenedor para la imagen del ataque del jugador
const pcataque = document.getElementById(`imagen-pc`); // Contenedor para la imagen del ataque de la PC
const btpiedra = document.getElementById(`bt-piedra`); // Botón para elegir "piedra"
const btpapel = document.getElementById(`bt-papel`); // Botón para elegir "papel"
const bttijera = document.getElementById(`bt-tijera`); // Botón para elegir "tijera"

// Variables para almacenar las opciones seleccionadas
let opcionjugador;
let opcionpc;
let imgjugador;
let imgpc;

// Array con las opciones de ataque y sus respectivas imágenes
const imagenes = [
    {
        name: "piedra",
        url: "img/botao-pedra.png"
    },
    {
        name: "papel",
        url: "img/botao-papel.png"
    },
    {
        name: "tijera",
        url: "img/botao-tesoura.png"
    }
];

// Función para ocultar el campo de batalla al inicio
function iniciar() {
    campobatalla.style.display = `none`; // Oculta el campo de batalla inicialmente
}

// Event listeners para los botones de ataque (piedra, papel, tijera)
btpiedra.addEventListener(`click`, function () {
    opcionjugador = "piedra"; // Asigna la opción del jugador a "piedra"
    opPC(); // Llama a la función que genera la opción aleatoria para la PC
});

btpapel.addEventListener(`click`, function () {
    opcionjugador = "papel"; // Asigna la opción del jugador a "papel"
    opPC(); // Llama a la función que genera la opción aleatoria para la PC
});

bttijera.addEventListener(`click`, function () {
    opcionjugador = "tijera"; // Asigna la opción del jugador a "tijera"
    opPC(); // Llama a la función que genera la opción aleatoria para la PC
})

// Función que genera una opción aleatoria para la PC
function opPC() {
    var aleatorio = nAleatorio(); // Llama a la función para obtener un número aleatorio entre 0 y 2
    if (aleatorio == 0) {
        opcionpc = "papel"; // La PC elige "papel"
    }
    else if (aleatorio == 1) {
        opcionpc = "piedra"; // La PC elige "piedra"
    }
    else if (aleatorio == 2) {
        opcionpc = "tijera"; // La PC elige "tijera"
    }
    batalla(); // Llama a la función que resuelve la batalla
}

// Función que determina el resultado de la batalla
function batalla() {
    if (opcionjugador == opcionpc) {
        msjbatalla.innerHTML = "empate"; // Si ambos eligen lo mismo, es un empate
    }
    else if (opcionjugador == "piedra" && opcionpc == "tijera") {
        msjbatalla.innerHTML = "Ganaste"; // Piedra vence a tijera
    }
    else if (opcionjugador == "tijera" && opcionpc == "papel") {
        msjbatalla.innerHTML = "Ganaste"; // Tijera vence a papel
    }
    else if (opcionjugador == "papel" && opcionpc == "piedra") {
        msjbatalla.innerHTML = "Ganaste"; // Papel vence a piedra
    }
    else {
        msjbatalla.innerHTML = "perdiste"; // En todos los demás casos, el jugador pierde
    }
    addImagenes(); // Llama a la función para mostrar las imágenes de las elecciones
}

// Función para agregar las imágenes de las elecciones del jugador y de la PC
function addImagenes() {
    // Recorre el array de imágenes para encontrar la imagen del jugador
    for (let i = 0; i < imagenes.length; i++) {
        if (opcionjugador == imagenes[i].name) {
            imgjugador = imagenes[i].url; // Asigna la URL de la imagen del jugador
            var inserta = `<img class = "img-batalla" src=${imgjugador}>`; // Crea el código HTML para insertar la imagen

            jugadorataque.innerHTML = inserta; // Inserta la imagen del jugador en el DOM
        }
        // Recorre el array de imágenes para encontrar la imagen de la PC
        if (opcionpc == imagenes[i].name) {
            imgpc = imagenes[i].url; // Asigna la URL de la imagen de la PC
            var inserta = `<img class = "img-batalla" src= ${imgpc} >`; // Crea el código HTML para insertar la imagen
            pcataque.innerHTML = inserta; // Inserta la imagen de la PC en el DOM
        }
    }
    campobatalla.style.display = `flex`; // Muestra el campo de batalla con las imágenes de las elecciones
}

// Función para generar un número aleatorio entre 0 y 2
function nAleatorio() {
    let n = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 2
    return n; // Retorna el número aleatorio
}

// Inicializa el juego cuando la página ha cargado completamente
window.addEventListener(`load`, iniciar());
