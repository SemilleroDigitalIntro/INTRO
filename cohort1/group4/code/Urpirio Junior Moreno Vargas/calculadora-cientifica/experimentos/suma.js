
function Sumar(){
    var Num1 = parseInt(document.getElementById("Num1").value);
    var Num2 = parseInt(document.getElementById("Num2").value);
    let rt = Num1 + Num2;
    resultado = document.querySelector("#Resultado");
    return resultado.innerHTML =  rt
}
//parseInt  se usa para declarar los datos como un numero
//QuerySelector es para decir que X elemento es igual a Y objeto del archivo o documento Html.
//.innerHtml es usado para poder sacar la informacioon y mostarla en el documento en cuestion.
function  Restar(){
    var Num1 = parseInt(document.getElementById("Num1").value);
    var Num2 = parseInt(document.getElementById("Num2").Value);
    let Result = Num1 + Num2;
    resultado = document.querySelector("#Resultado");
    return resultado.innerHTML = Result;
};
function Cambiarcolor(){
   
        let body = document.getElementById("body")
        body.style.color = "blue";
        body.style.backgroundColor = "gray";
}
function  Borrar(){
    let btn_borrar = document.getElementById("Borrar");
    let seccion = document.getElementById("seccion");
    let aparece = document.getElementById("Aparece");
    btn_borrar.style.display = "none";
    seccion.style.display = "none";
    aparece.style.display = "block";
}
function aparece(){
    let btn_borrar = document.getElementById("Borrar");
    let seccion = document.getElementById("seccion");
    let aparece = document.getElementById("Aparece");
    btn_borrar.style.display = "block";
    seccion.style.display = "block";
    aparece.style.display = "none";
}