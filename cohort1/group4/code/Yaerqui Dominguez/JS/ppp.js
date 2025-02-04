function hola(){
    

console.log("saludos");

var MyVar = 4;
var variable2 = "hola";
var Myr = false;

console.log(MyVar);
console.log(variable2);
console.log(Myr);
}
function otro(){
var array= [1,"¿cual es el valor de la vida?", true,5,6]
console.log(array[1])

var eee = [];
eee.push(0);
eee.push(1);
eee.push(2);
eee.push(42);
console.log(eee);

eee.unshift(35);
console.log(eee);

eee.splice(2,1);
console.log(eee)
}
 function boton(){
var hhhh = Math.round(Math.random()*(100-1)+ 3);
console.log(hhhh);

var datos = "Yaerqui ";
var apellidos = "Dominguez";
console.log( "Hola " + datos + apellidos + "!");

var numero = 10;
console.log(numero *5);
}

function numeroramdon (){
    var ramdon = Math.round(Math.random()*(20-10)+4);
console.log(ramdon);
}

function confirmacion(){
    if (confirm("Eres Yaerqui?"))
        {
            console.log("Hola Yaerqui");
        } else {
            console.log("Como te llamas?");
        }
}

function condiciones(){
    var rank = prompt("Dime tu rango");
switch(rank)
{
    case "Privado":
        console.log("No estas autorizado");
        break;
    case "Sargento":
        console.log("Hello Sargento");
        break;
    case "Commander":
        console.log("Hello commander!");
        break;
    case "Captain":
        console.log("Hello captain!");
        break;
    default:
        console.log(rank);
        break;
}

}

function edades(edad){
    var edad = prompt("Dime tu edad");
    switch(true)
    {

      case (edad >= 0 && edad <= 12):
        console.log("Eres un niño");
 break;
    case (edad >= 13 && edad <= 17):
        console.log("Eres adolescente");
break;
    case  (edad >= 18 && edad <= 60):
    console.log("Eres adulto");
    break;
    case  (edad >= 62):
        console.log("Eres envejeciente");
        break;
default:
        console.log("Edad no valida.");
    }
    }
function bucles(){

    var myArray = [30, "Hola", 43,  "Yaerqui", 64, 65, "Como estas?"];
for (var i = 0; i < myArray.length ; i++)
{
    console.log("En la posicion " + i + " esta " + myArray[i] );
}

    //false o true
    //confirm("hola");

    ///llenar un dato
    //prompt("hhhj");
    
    //alertar
    //alert("holis");
}

function juego(){
    let numerobom = "5" ;
    alert("Bienvenido al juego  perro muerto");

    while(true){
        let entrada = prompt("Menciona un numero");

        if (entrada === numerobom){
            alert("Perdiste"); 
            break;
        } else {
          alert("Sigue jugando");
           continue;
        }
      
    }
    
    }

    function bucledenumero(){

for (var i = 0; i < 10; i++)
{
    if (i % 2 == 0)
    {
         continue;
    }
    console.log(i + " is an odd number.");
}
    }

    function objeto(){
        var emptyObject = {};
        var personObject = {
            firstName : "John",
            lastName : "Smith",
            Age : 19,
            Employed : true
        }
        console.log(personObject);
    }

    


    

    


   

   