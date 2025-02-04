//Ejemplo de declaracion de variables y asignacion de valores a las mismas//
let Numero1;
let Numero2;

Numero1 = 1;
Numero2 = 2;
//Ejemplo de declaracion de variables y asignacion en la misma linea//
let Numero3 = 3;
let Numero4 = 4;
//Ejemplos de los diferentes tipos de variables que existen//

//1//String
let letra = "C"; // es basicamente un caracter, tambien conocido como texto o cadena, las comillas se usan para distinquirla de los numeros e indicar que las mismas es una cadena//
let NumeroEnLetra = "7"; //tambien los numeros entre comillas se pueden volver caracter, textos o cadena con las comillas.
//en otras palabras las comillas convierten los numeros en string.
//2//Number

let Num = 700; //estos son varibles con numeros

//3//Boolean

let HOLA = true; let HELLO = false; //los booleanos son simplemente verdaderos o falso o tambien comando que el lenguaje tiene por predeterminado.

//4//Array
let Amigos = [1, "pedro", 2, "Juan"] //es una estructura que te permite guardas distintos valores en una sola variable.

//para llamar a los miembros del array usamos
Amigos[0]
Amigos[1]
Amigos[2]
Amigos[3]//recordando que no importa que este dentro siempre para llamar aun valor dentro de la array inicamos desde el cero.
//nota: el array es muy similar a cuando usas dimensionar en PSEINT.

//5//Object

let Hombre = document.querySelector("h1"); //todo en javascritp es un objeto y puede ser almacenados en una variable.
//nota: esto puede ser cualquier cosa.

/*Operadores*/

//Suma
6 + 7;
"JAvier" + "Nelson";
//Resta
6-7 ;
//Multiplicacion 
7*8;
//division 
7/8;
//valores de orperadores con asignacion
let pedro = 18;
let maria = 17;
maria + pedro;
maria - pedro;
maria * pedro;
maria / pedro;//es basicamente cuando declaramos variables y luegos sumamos,restamos,multiplocamos o dividimos estas.
//nota: si estas sumando todos los numeros para luego dividirlo en la misma linea se te sera imposible, para lograr que una variable puede dividir a otra primero debes asignar
//los valores a una variable la cual posea el resultado de la suma y luego encansular en una varioble el valos que quieres que 
//divida este resultado, esto aplica para todas las operaciones en cuestion.
//identidad y igualdad
let rodrigo = 15;
rodrigo === 18; // en este ejemplo estamos diciendo que rodrigo tiene 15, pero en otro lado atravez
//de === nos estan preguntando si rodrigo tiene 18, las repuesta para esto sera un booleano, recordemos
//que un boleanos es cuando solo se responde Verdadero o falso(True or False).

//negacion, distinto(No igual)
let nashla = 17;//estamos diciendo que nashla tiene 17 años 
!nashla === 17; //Aqui estamos negando la edad de nashla diciendo que ella no tiene 17 años, esto nos dara un booleano diciendo que esta afirmacion es falsa(False)

let Yerlina = 18;//estamos diciendo que nashla tiene 18 años
Yerlina !== 18;//esta es otra manera de negar algo.
/*Ejemplos de funciones en javascritps */
let X = 3;
let Y = 6;
let Z = 8;
function Suma(X,Z,Y){
    let resultado = X + Y + Z; 
    return resultado;
}

function Resta(X,Y){
    let resultado2 = X - Y;
    return resultado2
}

function Multiplicacion(X,Z,Y){
    let resultado3 = X*Z*Y;
    return resultado3
}
function division(X,Y){
    let resultado4 = X / Y;
    return resultado4
}
function pontencia(X,Y,Z){
    let pontencia1 = X^2;
    let pontencia2 = Y^2;
    let pontencia3 = Z^2;
    
    console.log(pontencia1,pontencia2,pontencia3);
    
    
}