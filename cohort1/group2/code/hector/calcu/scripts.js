//Estas tres variables son las que se usaran para almacenar los números a calcula y los operadores
let displayValue = '';
let operation = null;
let previousValue = '';
/*
Esta funcion en conjunto con los elementos de la clase buttons o los elementos del evento
 keydown se encarga de darle el valor del primer número que vamos a carcular a displayvalue
*/
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}
/*Esta funcion establece la operacion
*/
function setOperation(op) {
    if (operation !== null) calculateResult();
    operation = op;
    previousValue = displayValue;
    displayValue = '';
}
// Esta funcion calcula el resultado
function calculateResult() {
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousValue) + parseFloat(displayValue);
            break;
        case '-':
            result = parseFloat(previousValue) - parseFloat(displayValue);
            break;
        case '*':
            result = parseFloat(previousValue) * parseFloat(displayValue);
            break;
        case '/':
            result = parseFloat(previousValue) / parseFloat(displayValue);
            break;
        default:
            return;
    }
    displayValue = result.toString();
    operation = null;
    previousValue = '';
    updateDisplay();
}
//Funcion para borrar una operacion restableciendo los valores originales
function clearDisplay() {
    displayValue = '';
    operation = null;
    previousValue = '';
    updateDisplay();
}
//Funcion que actualiza el cuadro de la calculadora 
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
