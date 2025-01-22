
//slider
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);

//expanción de elementos
const elementos = document.querySelectorAll('.ver_mas');

elementos.forEach(elemento => {
  elemento.addEventListener('click', function (event) {
    const card = elemento.closest('.card'); 
    const container_multimedia = card.querySelector('.container-multimedia');
    const container_info = card.querySelector('.container-info');
    const container_btn = card.querySelector('.container-btn');
    const close = card.querySelector('.close');
    const body = document.querySelector('body'); 

    // Modificación de clases en la tarjeta clicada
    card.classList.remove('card');
    card.classList.add('cards');

    container_multimedia.classList.remove('container-multimedia');
    container_multimedia.classList.add('container-multimedias');

    container_info.classList.remove('container-info');
    container_info.classList.add('container-infos');

    container_btn.classList.remove('container-btn');
    container_btn.classList.add('container-btns');
    close.style.display = "flex";
    body.style.overflowY = "hidden"; 
  });
});


const contraccion = document.querySelectorAll('.close');

contraccion.forEach(elemento => {
  elemento.addEventListener('click', function (event) {
    const card = elemento.closest('.cards'); 
    if (!card) return; 

    const container_multimedias = card.querySelector('.container-multimedias');
    const container_infos = card.querySelector('.container-infos');
    const container_btns = card.querySelector('.container-btns');
    const close = card.querySelector('.close');
    const body = document.querySelector('body'); 

    if (card) {
      card.classList.add('card');
      card.classList.remove('cards');
    }

    if (container_multimedias) {
      container_multimedias.classList.add('container-multimedia');
      container_multimedias.classList.remove('container-multimedias');
    }

    if (container_infos) {
      container_infos.classList.add('container-info');
      container_infos.classList.remove('container-infos');
    }

    if (container_btns) {
      container_btns.classList.add('container-btn');
      container_btns.classList.remove('container-btns');
    }

    // Ocultar el botón de cerrar
    if (close) {
      close.style.display = "none";
    }

    // Habilitar scroll en el body
    if (body) {
      body.style.overflowY = "scroll";
    }
  });
});

const btnvideo = document.querySelectorAll('.play');
btnvideo.forEach(elemento => {
  elemento.addEventListener('click', function () {
    const card = elemento.closest('.cards');
    const containervideo = card.querySelector('#videoContenedor'); 
    const close = card.querySelector('.close'); 

    if (containervideo && close) {
      containervideo.style.display = "block"; 
      close.style.display = "none";
    }
    
  });
});


const closevideo = document.querySelectorAll('.closes'); 
closevideo.forEach(elemento => {
  elemento.addEventListener('click', function () {
    const card = elemento.closest('.cards'); 
    const containervideo = card.querySelector('#videoContenedor'); 
    const close = card.querySelector('.close');

    if (containervideo && close) {
      containervideo.style.display = "none"; 
      close.style.display = "block";
    }
  });
});


// Cierre de aside
function cerrar() {
  const lateral = document.querySelector('.lateral');
  

  lateral.style.left = '-200%'; 
}

// abrir de aside
function abrir() {
  const lateral = document.querySelector('.lateral');
  

    lateral.style.left = '0'; 

}

