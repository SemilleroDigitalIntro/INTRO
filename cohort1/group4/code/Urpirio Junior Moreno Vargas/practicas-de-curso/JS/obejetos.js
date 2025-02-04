const player = {
    name:"Juan",life: 99, color:"Black" //asi se declara un objeto en Js.
}
console.log(player.name);
console.log(player.life);
console.log(player.color); 

let juan = {
    edad: 18, Estadocivil: "soltero",Gradoeducativo: "bachiller"
}
alert("edad: "+juan.edad);
console.log("Edad: " +juan.edad);
alert("Estado civil: "+juan.Estadocivil);
console.log("Estado civil: "+juan.Estadocivil);
alert("Grado educativo: "+juan.Gradoeducativo);
console.log("Grado educativo: "+juan.Gradoeducativo);//confirmando si se pueden mostrar atravez de un alert()

//Tambien podemos agregarle las propiedades al objetos despues de haberlo creado.
//ejemplo:
var Nashla = {};
Nashla.edad = 18;
Nashla.apellido = "Sena";
Nashla.NivelEducativo = "Bachiller Tecnico";

console.log("Nahla Sena ",Nashla);