// titulo de conteo
let title = document.getElementById("title");

// funcion para hacer la cuenta regresiva
function indicateTime(){
    title.innerHTML = "10";

    setTimeout(() => {
       clearInterval(tiempo);
    },10300);

    let tiempo = setInterval(() => {
        title.innerHTML = (parseInt(title.innerHTML) - 1);
    },1000);
}