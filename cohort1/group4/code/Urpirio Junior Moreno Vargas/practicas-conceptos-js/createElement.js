let NewElement = document.createElement('div');
let Content = document.createTextNode("Funciono el Div");
let DivDad = document.querySelector(".divDad");
const Crear = () =>{

    
    NewElement.appendChild(Content);
    NewElement.className = "HOl";

    

    DivDad.appendChild(NewElement)

}

const Borrar = ()=>{
    DivDad.removeChild(NewElement)
}