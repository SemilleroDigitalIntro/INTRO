let title2 = document.getElementById("title");

// funciona para cambiar los tiempos de eleccion del jugador:
let indicador_jugador = 0;
let jugadas = 6;
let apuntes_victoria_jugadores = {
    player1: 0,
    player2: 0    
};

// creando una funciona de la jugada
function Jugada(){
      // variables
      let body = document.querySelector("body");
      let indicador_barra = document.getElementById("indicador-barra");
      let player1 = document.getElementById("player1");
      let player2 = document.getElementById("player2");
      
      // Cambiando al modo del primer jugador
      body.classList.add("player1-mode");
      indicador_barra.classList.add("player1-mode");
  
      // Enfocando al input del jugador 1
      player1.focus();
  
      // variable para indicar a se debe enfocar
      indicador_jugador = 1;
  
      // conteo
      indicateTime();
  
  
      setTimeout(() => {
          // ahora indicando el modo del segundo jugador
          body.classList.remove("player1-mode");
          indicador_barra.classList.remove("player1-mode");
  
          body.classList.add("player2-mode");
          indicador_barra.classList.add("player2-mode");
  
          indicador_jugador = 2;
          indicateTime();
  
          player2.focus();
  
          setTimeout(() => {
              // quitando los modods
              body.classList.remove("player2-mode");
              indicador_barra.classList.remove("player2-mode");
              title2.innerHTML = "10";
  
              // para luego saber quien gano la ronda
              Win();
          },10200);
      },10200);
}

// para luego llamarla aqui, para poder ejecutarla las 6 jugadas o menos
let btn_play = document.getElementById("btn-play");
btn_play.addEventListener("click" , () => {
    Jugada();

    // repeticiones, se va a repetir hasta que un jugador alcance 3 victoria
    let repeticion_jugada = setInterval(() => {
        if (apuntes_victoria_jugadores.player1 == 3 || apuntes_victoria_jugadores.player2 == 3){
            clearInterval(repeticion_jugada);
            return;
        }

        Jugada();

        jugadas--;
    }, 25600);
});