/* Esta función es para agregar valores a la pantalla de la calculadora.
El valor que se pasa como argumento se agrega al contenido actual de la pantalla */
function Agregar(valor) {
    const pantalla = document.getElementById("pantalla"); // Obtiene el elemento de la pantalla
    pantalla.value += valor; // Agrega el valor al contenido existente
}

// Función para realizar el cálculo basado en la operación que aparece en la pantalla
function Calcular() {
    try {
        const pantalla = document.getElementById("pantalla"); // Obtiene el elemento de la pantalla
        const resultado = eval(pantalla.value); // Evalúa la operación (por ejemplo, "5+3" = 8)
        pantalla.value = resultado; // Muestra el resultado en la pantalla
    } catch (error) {
        // Si ocurre un error (por ejemplo, el usuario escribió algo inválido), muestra "Error"
        document.getElementById("pantalla").value = "Error";
    }
}

// Función para limpiar completamente la pantalla
function Limpiar() {
    document.getElementById("pantalla").value = ""; // Borra todo el contenido de la pantalla
}

// Función para borrar el último carácter que se ingresó en la pantalla
function BorrarUno() {
    const pantalla = document.getElementById("pantalla"); // Obtiene el elemento de la pantalla
    pantalla.value = pantalla.value.slice(0, -1); // Elimina el último carácter (por ejemplo, "123" -> "12")
}
