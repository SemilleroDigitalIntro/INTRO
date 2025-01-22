// Leyenda

// 1 = mano
// 2 = tijera
// 3 = piedra

// Player 1 perdio contra player 2 = 0. Player 1 = 1
// Player 2 perdio contra player 1 = 1. Player 2 = 2

// variables
let indicador_celebracion = 0;

// funcion que coloca la puntuación y deside la desicion final
function Puntuacion(jugador) {
    if (jugador == 0){

    } else {
        // elemento que indica los puntajes de los jugadores
        let puntuacion = document.getElementById("puntuacion");

        // indicador
        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-square-check fa-shake");
    
        // decision de quien gano
        if (jugador == 1) {
            i.classList.add("player1");
            apuntes_victoria_jugadores.player1++;
        } else {
            i.classList.add("player2");
            apuntes_victoria_jugadores.player2++;
        }
    
        // Para al final colocar la puntuacion correcta
        puntuacion.append(i);
    }
}

// funcion que determina que jugador gano
function Win() {
    // variables
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    // ---- antes de verificar el contenido de los inputs para arreglar

    // -- primera condicion verificar si estan vacios
    if (player1.value == ""){
        player1.value = Math.floor(Math.random() * 3) + 1;
    }

    if (player2.value == ""){
        player2.value = Math.floor(Math.random() * 3) + 1;
    }

    // -- verificar el texto que tiene el input
    if (isNaN(player1.value) || (parseInt(player1.value) > 3)){
        player1.value = Math.floor(Math.random() * 3) + 1;
    }

    if (isNaN(player2.value) || (parseInt(player2.value) > 3)){
        player2.value = Math.floor(Math.random() * 3) + 1;
    }

    // ------- condiciones de victoria

    // ----- Victorias del jugador 1:
    // -- papel gana con tijera - 0
    if ((parseInt(player1.value.charAt(0)) == 1) 
        && (parseInt(player2.value.charAt(0)) == 3)) {
        DeterminanteJugadas(1,player1,player2);
        // mostrar los iconos indicados
        view_icon(0, 2);
        return;

        // -- tijera gana con papel - 0
    } else if ((parseInt(player1.value.charAt(0)) == 2) 
        && (parseInt(player2.value.charAt(0)) == 1)) {
        DeterminanteJugadas(1,player1,player2);
        view_icon(1, 0);
        return;

        // -- piedra gana con tijera - 0
    } else if ((parseInt(player1.value.charAt(0)) == 3) 
        && (parseInt(player2.value.charAt(0)) == 2)) {
        DeterminanteJugadas(1,player1,player2);
        view_icon(2, 1);
        return;
    }

    // ----- Victorias del jugador 2:
    // -- papel gana con tijera - 1
    if ((parseInt(player2.value.charAt(0)) == 1) 
        && (parseInt(player1.value.charAt(0)) == 3)) {
        DeterminanteJugadas(2,player1,player2);
        // mostrar los iconos indicados
        view_icon(0, 2);
        return;

        // -- tijera gana con papel - 1
    } else if ((parseInt(player2.value.charAt(0)) == 2) 
        && (parseInt(player1.value.charAt(0)) == 1)) {
        DeterminanteJugadas(2,player1,player2);
        view_icon(0, 1);
        return;

        // -- piedra gana con tijera - 1
    } else if ((parseInt(player2.value.charAt(0)) == 3) 
        && (parseInt(player1.value.charAt(0)) == 2)) {
        DeterminanteJugadas(2,player1,player2);
        view_icon(1, 2);
        return;
        
        // -- Empate
    } else if ( parseInt(player2.value.charAt(0)) == parseInt(player1.value) ) {
        DeterminanteJugadas(0,player1,player2);
        view_icon(3, 3);
        return;

        // -- si no coincide la jugada
    } else {
        DeterminanteJugadas(0,player1,player2);
        view_icon(3, 3);
        return;
    }
}

// funcion que manda el mensaje y apunta los puntos.
function DeterminanteJugadas(jugador, input1, input2) {
    // guardar la puntuacion
    Puntuacion(jugador);

    // mostrar el mensaje
    let mensaje = document.getElementById("mensaje");
    console.log(mensaje);
    mensaje.classList.add(`mensaje-activo-p${jugador}`);

    setTimeout(() => {
        // quitar el mensaje
        mensaje.classList.remove(`mensaje-activo-p${jugador}`);
        icon_player1.classList.add("inactive-icon");
        icon_player2.classList.add("inactive-icon");

        input1.value = "";
        input2.value = "";
    }, 5000)
}
