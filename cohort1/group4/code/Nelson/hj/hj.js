function jugar(eleccionJugador) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (eleccionJugador === eleccionComputadora) {
        resultado = 'Empate';
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        resultado = '¡Ganaste!';
    } else {
        resultado = 'Perdiste';
    }

    document.getElementById('resultado').innerText = `Tú elegiste: ${eleccionJugador}\nLa computadora eligió: ${eleccionComputadora}\n${resultado}`;
}_

function jugar(eleccionJugador){
    resultado = 'empate'
    if ((eleccionJugador==='piedra' && eleccionComputadora ==='tijeras', 'piedra', ' papel')||
        (eleccionJugador===' papel '&&  eleccionComputadora=== 'tijeras', ' piedra',' papel')||
        (eleccionJugador=== 'tijeras ' && eleccionComputadora === ' tijeras','papel', ' piedra')
    )
}


{ 
    resultado= ' gananste'
} {
    else {
        resultado = 'perdiste'
    }


}