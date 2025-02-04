const seccionnBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePC = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btntijeras = document.getElementById('btn-tijeras');

let opcionJugador;
let opcionPc;
let imgjugador;
let imgPc;

const imagenes = [
    {
        name: "Piedra",
        url: "piedra.jpg"
    },
    {
        name: "Papel",
        url: "raise.png"
    },
    {
        name: "Tijeras",
        url: "scissors.png"
    }
];

function iniciar(){
    seccionnBatalla.style.display= 'none';
};
btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btntijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
})

function opPc(){
    var aleatorio = nAleatorio();
    if (aleatorio == 0){
        opcionPc = "Piedra";
    } else if(aleatorio == 1){
        opcionPc = "Papel";
    } else if(aleatorio == 2){
        opcionPc = "Tijeras"
    };

   batalla();
};

function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";
    } else if(opcionJugador == "Piedra" && opcionPc == "Tijeras") {
        msjBatalla.innerHTML = "Ganaste!";
    } else if(opcionJugador == "Papel" && opcionPc == "Piedra") {
        msjBatalla.innerHTML = "Ganaste!";
    } else if(opcionJugador == "Tijeras" && opcionPc == "Papel") {
        msjBatalla.innerHTML = "Ganaste!";
    } else{
        msjBatalla.innerHTML = "Perdiste :(";
    };

    addImagenes();
}

function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n ;
}

function addImagenes(){
    for(let i= 0; i<imagenes.length; i ++){
        if(opcionJugador == imagenes[i].name){
            imgjugador = imagenes[i].url;
            var inserta = `<img class = "img-batalla" src = ${imgjugador} alt= ""> `;
            imgAtaqueJugador.innerHTML = inserta ;
        };

        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class = "img-batalla" src = ${imgPc} alt= ""> `;
            imgAtaquePC.innerHTML = inserta;
        };
    };
    seccionnBatalla.style.display = 'flex';
};

window.addEventListener('load', iniciar);