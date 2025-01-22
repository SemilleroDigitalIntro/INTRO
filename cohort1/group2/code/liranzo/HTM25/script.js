// Obtener elementos del DOM y cachearlos
const display = document.getElementById('display');
const scientificButtons = document.getElementById('scientific-buttons');
const savedCalculationsList = document.getElementById('savedCalculationsList');
let isScientific = false; // Calculadora no cientifica por defecto
let isDarkTheme = true; // Tema oscuro por defecto

// Función para agregar números al display
const appendNumber = (number) => {
    display.value += number;
};

// Función para agregar operadores al display
const appendOperator = (operator) => {
    display.value += operator;
};

// Función para agregar funciones científicas al display
const appendFunction = (func) => {
    if (func === 'PI') {
        display.value += Math.PI;
    } else if (func === 'E') {
        display.value += Math.E;
    } else {
        display.value += `${func}(`;
    }
};

// Función para calcular el resultado
const calculate = () => {
    try {
        display.value = math.evaluate(display.value).toString();
    } catch (error) {
        display.value = 'Error';
    }
};

// Función para limpiar el display
const clearDisplay = () => {
    display.value = '';
};

// Función para alternar entre calculadora básica y científica
const toggleScientific = () => {
    isScientific = !isScientific;
    scientificButtons.style.display = isScientific ? 'grid' : 'none';
};

// Función para alternar entre temas claro y oscuro
const toggleTheme = () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('light-theme', !isDarkTheme);
};

// Función para manejar atajos de teclado con debounce
const handleKeyDown = (event) => {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
};

document.addEventListener('keydown', debounce(handleKeyDown, 200));

// Función para personalizar atajos de teclado
const setCustomShortcut = (key, action) => {
    document.addEventListener('keydown', (event) => {
        if (event.key === key) {
            action();
        }
    });
};

// Ejemplo de uso de atajos personalizados
setCustomShortcut('s', toggleScientific);
setCustomShortcut('t', toggleTheme);

// Función para graficar funciones matemáticas
const plotGraph = () => {
    const ctx = document.getElementById('graphCanvas').getContext('2d');
    const expression = display.value;
    const data = {
        labels: [],
        datasets: [{
            label: 'Graph',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    };

    for (let x = -10; x <= 10; x += 0.1) {
        try {
            const y = math.evaluate(expression.replace(/x/g, `(${x})`));
            if (typeof y === 'number' && isFinite(y)) {
                data.labels.push(x.toFixed(1));
                data.datasets[0].data.push({ x: x.toFixed(1), y });
            }
        } catch (error) {
            console.error('Error al evaluar la expresión:', error);
            display.value = 'Error';
            return;
        }
    }

    new Chart(ctx, {
        type: 'scatter',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
};

// Función para guardar cálculos
const saveCalculation = () => {
    const calculation = display.value;
    if (calculation) {
        const savedCalculations = JSON.parse(localStorage.getItem('calculations')) || [];
        savedCalculations.push(calculation);
        localStorage.setItem('calculations', JSON.stringify(savedCalculations));
        updateSavedCalculationsList();
    }
};

// Función para borrar cálculos guardados
const clearSavedCalculations = () => {
    localStorage.removeItem('calculations');
    updateSavedCalculationsList();
};

// Función para actualizar la lista de cálculos guardados
const updateSavedCalculationsList = () => {
    const savedCalculations = JSON.parse(localStorage.getItem('calculations')) || [];
    savedCalculationsList.innerHTML = '';
    savedCalculations.forEach((calculation) => {
        const div = document.createElement('div');
        div.textContent = calculation;
        savedCalculationsList.appendChild(div);
    });
};

// Inicializar la lista de cálculos guardados al cargar la página
document.addEventListener('DOMContentLoaded', updateSavedCalculationsList);

// Función de debounce para limitar la frecuencia de ejecución de una función
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}