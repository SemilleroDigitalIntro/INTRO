function buscador(){
   let F_Buscador = document.getElementById("F-Buscador");
   F_Buscador.style.display = "flex";
   let btn2 = document.getElementById("btn2");
   btn2.style.display = "none";
}
function btn_guardar(){
    let btn_guardar = document.getElementById("btn-guardar")
    btn_guardar.style.display = "none";
    let btn_mostrar = document.getElementById("btn-mostrar");
    btn_mostrar.style.display = "block";
    let header_section3 = document.querySelector(".header-section3")
    header_section3.style.display = "none";
}
function btn_mostrar(){
    let btn_guardar = document.getElementById("btn-guardar")
    btn_guardar.style.display = "block";
    let btn_mostrar = document.getElementById("btn-mostrar");
    btn_mostrar.style.display = "none";
    let header_section3 = document.querySelector(".header-section3")
    header_section3.style.display = "flex";
}