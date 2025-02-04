
const juan = "hola, como estas?";

console.log(juan.indexOf("m"))
/* El método .indexOf(text, from) realiza la función «opuesta» a charAt(). El método .indexOf(text)
 buscará el subtexto text en nuestro  y nos devolverá un  con la posición de la primera aparición
  de dicho subtexto. En caso de no encontrarlo, devolverá -1. El parámetro from es opcional, y es
   la posición en la que empezará a buscar, que si no se suministra, es 0. */

console.log(juan.lastIndexOf("s")) //funciona exactamente igual solo que este parte desde un punto diferente.


console.log(juan.charAt(0))//con esto pdemos perdir una parte del texto, pero para ser mas tecnicos
/* El método .charAt(pos) nos permite comprobar que carácter se encuentra en la posición pos del texto.
 Este método devolverá un  con dicho carácter. En caso de pasarle una posición que no existe o imposible
(negativa), simplemente nos devolverá un  vacío. */

console.log(juan.repeat(2))//Devuelve el  repetido num veces. en este caso dos.

console.log(juan.substring(8))// elimina los string desde el inicio has el final que marques, en ejemplo usamos el 8 este inicioa desde la 
//el caracter 1 hasta el numero 8 por eso cuando corres el codigo basicamente te aparecee desde "mo" en adelante,
//tambien se puede escribir de otra menera ejemplo "Substr()".


console.log(juan.substring(1,6))
//Aqui le estoy especificando que me mueste la informacion,
 //desde el caracter 1 hasta el 6. pero solo me mostrara 2 hasta 5 osea 4 caRACTERES.


 console.log(juan.split("",5/* para esfecificar los caracteres que quieres que formen el array */)) 
 /* Te devuelve cada substring en un array, recordademos que los substring son los caracteres */

 console.log(juan.startsWith("h")) //devolverá true si el  comienza por text. De lo contrario, false.

if (juan.startsWith("h") == false){
console.log("No empieza por esa letra")
}else{
    console.log("si empieza por esa letra")
}

console.log(juan.endsWith("?"))//devolverá true si el  acaba en text. De lo contrario, false.

console.log(juan.includes("est"))//devolverá true si el  contiene text. De lo contrario, false.

var oracion = "HOLAAAA PEDROOO";
const gato = "t"
console.log(oracion.search(gato))//El método .search() devuelve la posición de la primera ocurrencia. -1 si no se encuentra.
console.log(oracion.match(gato))//El método .match() devuelve un  con las coincidencias encontradas. null si no se encuentran.
console.log(oracion.matchAll(gato))


console.log( oracion.replace("H","M"))//Esto se usa para remplazar una parte especifica de un texto o oracion.

    let click1 = document.getElementById("click1");

    click1.addEventListener(//aplicacion de event listener.
        "click",
        function (){
            var oracion1 = document.getElementById("Sorpre");
               oracion1.replaceWith(oracion)//PARA REMPLAZARLO CON ALGO ESPECIFICO.
               document.getElementById("span").innerHTML = `<h1 id="hola"  >hola</h1>
               <p>Esto es un parrafo</p>`;//para agregar html desde java script.
               let hola = document.getElementById("hola");
               hola.style.color = "blue";
        }
    )
    
    var pedro = `que tal todos ${juan}`// con el ${} y usando las `` pueda agregar variables o mas contenido a los string;
    var chicas = "todas"
    console.log(pedro.replace("todos", chicas))//aqui se demuestra como el replace permite remplazar coas de la oracion con variables internas.
    
    
    console.log(pedro.toUpperCase())/* Los métodos .toLowerCase() y .toUpperCase() devuelven el  original, transformando
    todo el texto a minúsculas o a mayúsculas respectivamente: */

    console.log(pedro[0].toUpperCase()+ pedro.substring(1)) //Aqui estamos transformando el primer caracter en mayuscula.
    
    var jhon = "100";
    console.log(jhon.padStart(6,"1")); // con esta funcion puedes ampliar la cantidad de caracteres que puede almacenar la variable,
    //en este caso la padstart() lo hace desde el inicio y la padend() desde el final.
    /* Ejemplo */ console.log(jhon.padEnd(6,"0"));
    
    var yuca = "  hola ";
    console.log(yuca.trim());/*
    El método .trim() y sus métodos derivados, informalmente traducido como «afeitar» o «recortar»,
     se encarga de devolver el  original, pero eliminando los espacios sobrantes que puedan existir
      a la izquierda o a la derecha del texto (y sólo esos, nunca los que hay entre carácteres).
    */
   class personas{
    name;
    edad;
    constructor(name,edad){
        this.name = name;
        this.edad = edad;
        console.log(`tu nombre es ${this.name} y tienes  ${this.edad} `)
    };
   }
   let pedroA = new personas("pedro",`18 años`)
   let junita = new personas("juanita","18 años")
   
   console.log(junita)
   
      
   
  