// elemento de indicador de jugada del jugador
let indicador_barra2 = document.getElementById("indicador-barra");

// funcion para indicar al jugador que esta jugando
indicador_barra2.addEventListener("click"  ,() => {
    // variables (inputs)
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");

    // desiciones para enfocar a la casilla de juego de los jugadores
    if (indicador_jugador == 1){
        player1.focus();
    }

    if (indicador_jugador == 2){
        player2.focus();
    }
});
