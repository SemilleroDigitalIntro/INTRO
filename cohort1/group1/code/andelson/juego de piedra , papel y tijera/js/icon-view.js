// funcion para indicar el icono correcto de la jugada que hiso el jugador
function view_icon(p1,p2) {
    // variables (iconos)
    let icon_player1 = document.getElementById("icon_player1");
    let icon_player2 = document.getElementById("icon_player2");

    // libro que guarda los diferentes iconos
    let cartas = [
        "fa-solid fa-hand fa-bounce",
        "fa-regular fa-hand-scissors fa-bounce",
        "fa-solid fa-hand-back-fist fa-bounce",
        "fa-regular fa-handshake fa-bounce"
    ]
    
    // para luego llamar ese libro y colocar al icono que jugo cada jugador
    icon_player1.setAttribute("class" , cartas[p1]);
    icon_player2.setAttribute("class" , cartas[p2]);
}