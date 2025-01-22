// animacion de cascada
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.falling-container');
    const shapes = ['stone', 'paper', 'scissors'];

    for (let i = 0; i < 20; i++) {
        const shapeElement = document.createElement('div');
        shapeElement.classList.add('shape');
        shapeElement.classList.add(shapes[Math.floor(Math.random() * shapes.length)]);
        shapeElement.style.left = `${Math.random() * 100}vw`;
        shapeElement.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(shapeElement);
    }
});

// animacion de las letras
document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    const text = h1.innerText;
    h1.innerHTML = '';
  
    // Dividir el texto en letras y envolver cada una en un <span>
    text.split('').forEach(letter => {
      const span = document.createElement("span");
      span.innerText = letter;
      h1.appendChild(span);
    });
  });
  