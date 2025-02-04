let num1 =  2;
let num2 = 5;
num1=Number(num1);
num2=Number(num2);
let result = num1+num2;
console.log(result+" Console.log")//Mostrar cualquier informacion y este mas usado para esto.
console.trace(result+" Console.trace");//muestra todo el trayecto de la informacion que se pide.
console.error(result+" Console.error");//Muesta informacion de error, esta aparece en rojo.
console.warn(result+" console.warn");//muestra informacion de advertencia, esta aparece en amarillo.
console.info(result+" console.info");// muesta un mensaje de informacion.

 let Numeros = [1,2,3,4,5,6,7,8,9,null]; //Array en javascripts practica
result = Numeros[0]+Numeros[3];
alert(result)
console.log(result)
Numeros[4]=20
result = Numeros[4] + 2;// confirmancion de que le puede cambiar el valor interno a un array
console.log(result);
alert(Numeros);
 console.log(Numeros)//confirmacion de que puedes ver todos los valores de un array y aqui tambien se puede ver el valor de array que modificamos.
//asi se ve un condicional en javascripts
 if (result == 4){
    console.clear(result);
    console.info("Es igual a 4");
}else{
    console.error("Esto es mayor a 4");
};
while (result < 20){
result = result + 1
console.log(result);//asi se ve un while en javascripts
};
for(result = result; result < 40; result++ /*El X++ significa x = x + 1 si corremos con esto notaremos que esta cumpliendo con lo que dice */){

//asi se ve un for en javascripts
console.log(result)
console.clear(result)
console.log(result) // si podemos hacer un reloj en la consolo de javascripts en el navegador.



}
