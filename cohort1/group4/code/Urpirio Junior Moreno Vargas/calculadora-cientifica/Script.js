function Suma(){
    let Suma = document.getElementById("Suma");
    let Resta = document.getElementById("Resta");
    let Division = document.getElementById("Division");
    let Multiplicacion = document.getElementById("Multiplicacion");
    Multiplicacion.style.display = "none";
    Division.style.display = "none";
    Resta.style.display = "none";
    Suma.style.display = "Flex";
    Suma.style.borderBottom = "2px solid black"

    let btn_sumaS =  document.getElementById("btn_sumaS");
    btn_sumaS.style.borderBottom = "2px solid black"
    let btn_restaR = document.getElementById("btn_restaR");
    btn_restaR.style.borderBottom = "none"
    let btn_multiM = document.getElementById("btn_multiM");
    btn_multiM.style.borderBottom = "none"
    let btn_DivisionD = document.getElementById("btn_DivisionD");
    btn_DivisionD.style.borderBottom = "none"
    //Textbox de suma
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "none";
}
function QS_2(){
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "Flex";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "none";
}
function QS_3(){
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="Flex";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "none";
}
function QS_4(){
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="Flex";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "none";
}
function QS_5(){
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "Flex";
}
//funcion de sumar dos valores//  
function sumar(){
    let Num1 = parseFloat(document.getElementById("Num1").value);
    let Num2 = parseFloat(document.getElementById("Num2").value);
    let result = Num1 + Num2;
    resulta = document.querySelector("#Sumar"); 
    return resulta.innerHTML = result;
}
//funcion que suma tres valores
function Sumar1(){
    let Num1 = parseFloat(document.getElementById("Num11").value);
    let Num2 = parseFloat(document.getElementById("Num22").value);
    let Num3 = parseFloat(document.getElementById("Num33").value);
    let result = Num1 + Num2 + Num3;
    resulta = document.querySelector("#Sumar1");
    return resulta.innerHTML = result;  
}
//funcion que suma cuatro valores
function Sumar2(){
    let Num1 = parseFloat(document.getElementById("Num111").value);
    let Num2 = parseFloat(document.getElementById("Num222").value);
    let Num3 = parseFloat(document.getElementById("Num333").value);
    let Num4 = parseFloat(document.getElementById("Num444").value);
    let result = Num1 + Num2 + Num3 + Num4;
    resulta = document.querySelector("#Sumar2");
    return resulta.innerHTML = result;
}
//funcion que suma cinco valores
function Sumar3(){
    let Num1 = parseFloat(document.getElementById("Num1111").value);
    let Num2 = parseFloat(document.getElementById("Num2222").value);
    let Num3 = parseFloat(document.getElementById("Num3333").value);
    let Num4 = parseFloat(document.getElementById("Num4444").value);
    let Num5 = parseFloat(document.getElementById("Num5555").value);
    let result = Num1 + Num2 + Num3 + Num4 + Num5;
    resulta = document.querySelector("#Sumar3");
    return resulta.innerHTML = result;
}
//Funcion de resta
function Resta(){
    let Resta = document.getElementById("Resta");
    let Suma = document.getElementById("Suma");
    let Division = document.getElementById("Division");
    let Multiplicacion = document.getElementById("Multiplicacion");
    Multiplicacion.style.display = "none";
    Division.style.display = "none";
    Resta.style.display = "Flex";
    Suma.style.display = "none";

    let btn_sumaS =  document.getElementById("btn_sumaS");
    btn_sumaS.style.borderBottom = "none"
    let btn_restaR = document.getElementById("btn_restaR");
    btn_restaR.style.borderBottom = "2px solid black"
    let btn_multiM = document.getElementById("btn_multiM");
    btn_multiM.style.borderBottom = "none"
    let btn_DivisionD = document.getElementById("btn_DivisionD");
    btn_DivisionD.style.borderBottom = "none"
    //Textbox de resta
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "none";
}
function QR_2(){
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "Flex";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "none";
}
function QR_3(){
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="Flex";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "none";
}
function QR_4(){
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="Flex";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "none";
}
function QR_5(){
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "Flex";
}
//funcion para restar dos valores
function Restar(){
    let Num1 = parseFloat(document.getElementById("NumR1").value);
    let Num2 = parseFloat(document.getElementById("NumR2").value);
    let result = Num1 - Num2;
    resultado = document.querySelector("#Resta1");
    return resultado.innerHTML = result;

}
//funcion para restar tres valores
function Restar2(){
    let Num1 = parseFloat(document.getElementById("NumR11").value);
    let Num2 = parseFloat(document.getElementById("NumR22").value);
    let Num3 = parseFloat(document.getElementById("NumR33").value);
    let result = Num1 - Num2 - Num3;
    resultado = document.querySelector("#Resta2");
    return resultado.innerHTML = result;
}
//Funcion para restar cuatro valores
function Restar3(){
    let Num1 = parseFloat(document.getElementById("NumR111").value);
    let Num2 = parseFloat(document.getElementById("NumR222").value);
    let Num3 = parseFloat(document.getElementById("NumR333").value);
    let Num4 = parseFloat(document.getElementById("NumR444").value);
    let result = Num1 - Num2 - Num3 - Num4;
    resultado = document.querySelector("#Resta3");
    return resultado.innerHTML = result;
}
//funcion para restar cinco valores
function Restar4(){
    let Num1 = parseFloat(document.getElementById("NumR1111").value);
    let Num2 = parseFloat(document.getElementById("NumR2222").value);
    let Num3 = parseFloat(document.getElementById("NumR3333").value);
    let Num4 = parseFloat(document.getElementById("NumR4444").value);
    let Num5 = parseFloat(document.getElementById("NumR5555").value);
    let result = Num1 - Num2 - Num3 - Num4 - Num5;
    resultado = document.querySelector("#Resta4");
    return resultado.innerHTML = result;
}



//funcion de multipicacion
function Multiplicacion(){
    let Resta = document.getElementById("Resta");
    let Suma = document.getElementById("Suma");
    let Division = document.getElementById("Division");
    let Multiplicacion = document.getElementById("Multiplicacion");
    Multiplicacion.style.display = "flex";
    Division.style.display = "none";
    Resta.style.display = "none";
    Suma.style.display = "none";

    let btn_sumaS =  document.getElementById("btn_sumaS");
    btn_sumaS.style.borderBottom = "none"
    let btn_restaR = document.getElementById("btn_restaR");
    btn_restaR.style.borderBottom = "none"
    let btn_multiM = document.getElementById("btn_multiM");
    btn_multiM.style.borderBottom = "2px solid black"
    let btn_DivisionD = document.getElementById("btn_DivisionD");
    btn_DivisionD.style.borderBottom = "none"
    //Textbox de Multiplicacion
    let Dos_numeros = document.getElementById("Dos_numerosM");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numerosM");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numerosM");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numerosM");
    cinco_numeros.style.display = "none";
}
function QM_2(){
    let Dos_numeros = document.getElementById("Dos_numerosM");
    Dos_numeros.style.display = "Flex";
    let Tres_numeros = document.getElementById("Tres_numerosM");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numerosM");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numerosM");
    cinco_numeros.style.display = "none";
}
function QM_3(){
    let Dos_numeros = document.getElementById("Dos_numerosM");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numerosM");
    Tres_numeros.style.display ="Flex";
    let cuatro_numeros = document.getElementById("cuatro_numerosM");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numerosM");
    cinco_numeros.style.display = "none";
}
function QM_4(){
    let Dos_numeros = document.getElementById("Dos_numerosM");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numerosM");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numerosM");
    cuatro_numeros.style.display ="Flex";
    let cinco_numeros = document.getElementById("cinco_numerosM");
    cinco_numeros.style.display = "none";
}
function QM_5(){
    let Dos_numeros = document.getElementById("Dos_numerosM");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numerosM");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numerosM");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numerosM");
    cinco_numeros.style.display = "Flex";
}

//funcion para multiplicar dos valores
function Multi(){
    let Num1 = parseFloat(document.getElementById("NumM1").value);
    let Num2 = parseFloat(document.getElementById("NumM2").value);
    let result = Num1 * Num2;
    resultado = document.querySelector("#Multi1");
    return resultado.innerHTML = result;
}
//funcion para multiplicar tres valores
function Multi2(){
    let Num1 = parseFloat(document.getElementById("NumM11").value);
    let Num2 = parseFloat(document.getElementById("NumM22").value);
    let Num3 = parseFloat(document.getElementById("NumM33").value);
    let result = Num1 * Num2 * Num3;
    resultado = document.querySelector("#Multi2");
    return resultado.innerHTML = result;
}
//funcion para multiplicar cuatro valores
function Multi3(){
    let Num1 = parseFloat(document.getElementById("NumM111").value);
    let Num2 = parseFloat(document.getElementById("NumM222").value);
    let Num3 = parseFloat(document.getElementById("NumM333").value);
    let Num4 = parseFloat(document.getElementById("NumM444").value);
    let result = Num1 * Num2 * Num3 * Num4;
    resultado = document.querySelector("#Multi3");
    return resultado.innerHTML = result;
}
//funcion para multiplicar cinco valores
function Multi4(){
    let Num1 = parseFloat(document.getElementById("NumM1111").value);
    let Num2 = parseFloat(document.getElementById("NumM2222").value);
    let Num3 = parseFloat(document.getElementById("NumM3333").value);
    let Num4 = parseFloat(document.getElementById("NumM4444").value);
    let Num5 = parseFloat(document.getElementById("NumM5555").value);
    let result = Num1 * Num2 * Num3 * Num4 * Num5;
    resultado = document.querySelector("#Multi4");
    return resultado.innerHTML = result;
}



//funcion de division
function Division(){
    let Resta = document.getElementById("Resta");
    let Suma = document.getElementById("Suma");
    let Division = document.getElementById("Division");
    let Multiplicacion = document.getElementById("Multiplicacion");
    Multiplicacion.style.display = "none";
    Division.style.display = "flex";
    Resta.style.display = "none";
    Suma.style.display = "none";

    let btn_sumaS =  document.getElementById("btn_sumaS");
    btn_sumaS.style.borderBottom = "none"
    let btn_restaR = document.getElementById("btn_restaR");
    btn_restaR.style.borderBottom = "none"
    let btn_multiM = document.getElementById("btn_multiM");
    btn_multiM.style.borderBottom = "none"
    let btn_DivisionD = document.getElementById("btn_DivisionD");
    btn_DivisionD.style.borderBottom = "2px solid black"
    //Textbox de Division
    let Dos_numeros = document.getElementById("Dos_numerosD");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numerosD");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numerosD");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numerosD");
    cinco_numeros.style.display = "none";
}
function QD_2(){
    let Dos_numerosD = document.getElementById("Dos_numerosD");
    Dos_numerosD.style.display = "Flex";
    let Tres_numerosD = document.getElementById("Tres_numerosD");
    Tres_numerosD.style.display ="none";
    let cuatro_numerosD = document.getElementById("cuatro_numerosD");
    cuatro_numerosD.style.display ="none";
    let cinco_numerosD = document.getElementById("cinco_numerosD");
    cinco_numerosD.style.display = "none";
}
function QD_3(){
    let Dos_numerosD = document.getElementById("Dos_numerosD");
    Dos_numerosD.style.display = "none";
    let Tres_numerosD = document.getElementById("Tres_numerosD");
    Tres_numerosD.style.display ="Flex";
    let cuatro_numerosD = document.getElementById("cuatro_numerosD");
    cuatro_numerosD.style.display ="none";
    let cinco_numerosD = document.getElementById("cinco_numerosD");
    cinco_numerosD.style.display = "none";
}
function QD_4(){
    let Dos_numerosD = document.getElementById("Dos_numerosD");
    Dos_numerosD.style.display = "none";
    let Tres_numerosD = document.getElementById("Tres_numerosD");
    Tres_numerosD.style.display ="none";
    let cuatro_numerosD = document.getElementById("cuatro_numerosD");
    cuatro_numerosD.style.display ="Flex";
    let cinco_numerosD = document.getElementById("cinco_numerosD");
    cinco_numerosD.style.display = "none";
}
function QD_5(){
    let Dos_numerosD = document.getElementById("Dos_numerosD");
    Dos_numerosD.style.display = "none";
    let Tres_numerosD = document.getElementById("Tres_numerosD");
    Tres_numerosD.style.display ="none";
    let cuatro_numerosD = document.getElementById("cuatro_numerosD");
    cuatro_numerosD.style.display ="none";
    let cinco_numerosD = document.getElementById("cinco_numerosD");
    cinco_numerosD.style.display = "Flex";
}
//funcion para dividir dos valores
function Div(){
    let Num1 = parseFloat(document.getElementById("NumD1").value);
    let Num2 = parseFloat(document.getElementById("NumD2").value);
    let result = Num1 / Num2;
    resultado = document.querySelector("#Div1");
    return resultado.innerHTML = result;
}
//funcion para dividir tres valores
function Div2(){
    let Num1 = parseFloat(document.getElementById("NumD11").value);
    let Num2 = parseFloat(document.getElementById("NumD22").value);
    let Num3 = parseFloat(document.getElementById("NumD33").value);
    let result = Num1 / Num2 / Num3;
    resultado = document.querySelector("#Div2");
    return resultado.innerHTML = result;
}
//funcion para dividir cuatro valores
function Div3(){
    let Num1 = parseFloat(document.getElementById("NumD111").value);
    let Num2 = parseFloat(document.getElementById("NumD222").value);
    let Num3 = parseFloat(document.getElementById("NumD333").value);
    let Num4 = parseFloat(document.getElementById("NumD444").value);
    let result = Num1 / Num2 / Num3 / Num4 ;
    resultado = document.querySelector("#Div3");
    return resultado.innerHTML = result;
}
//funcion para dividir cinco valores
function Div4(){
    let Num1 = parseFloat(document.getElementById("NumD1111").value);
    let Num2 = parseFloat(document.getElementById("NumD2222").value);
    let Num3 = parseFloat(document.getElementById("NumD3333").value);
    let Num4 = parseFloat(document.getElementById("NumD4444").value);
    let Num5 = parseFloat(document.getElementById("NumD5555").value);
    let result = Num1 / Num2 / Num3 / Num4 / Num5;
    resultado = document.querySelector("#Div4");
    return resultado.innerHTML = result;
}
