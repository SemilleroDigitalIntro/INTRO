import React, { Component } from 'react';
import "./Style.less"

export default class Formulario extends Component {
  render() {

    let  SaveD;

    const Save = ()=>{
        let Dn = document.getElementById("DT1").value;
        let Dn2 = document.getElementById("DT2").value;
        let Dn3 = document.getElementById("DT3").value;

         let dNL = document.createElement("b");
         let dNL2 = document.createElement("b");
         let dNL3 = document.createElement("b");

         let dNT =  document.createTextNode("Nombre:  ")
         let dNT2 =  document.createTextNode("Apellido: ")
         let dNT3 =  document.createTextNode("Id: ")

         dNL.appendChild(dNT);
         dNL2.appendChild(dNT2);
         dNL3.appendChild(dNT3);


        let Container = document.querySelector(".SM-Show");
        let NewInfo = document.createDocumentFragment();

        let PersonDta = []
        
        if (PersonDta[0] == undefined ){
            
            PersonDta[0] = ` ${dNL.innerHTML} ${Dn} ${dNL2.innerHTML}  ${Dn2} ${dNL3.innerHTML}  ${Dn3}`;

            
          }else if(PersonDta[1] == undefined ){
            PersonDta[1] = ` ${dNL.innerHTML} ${Dn} ${dNL2.innerHTML}  ${Dn2} ${dNL3.innerHTML}  ${Dn3}`;
          };

          PersonDta.forEach(personDta => {
            let div = document.createElement("Div");
            div.className = "Newdiv";
            NewInfo.append(div);
            let indiv = document.createElement("Div");
            indiv.textContent = personDta;
            
            let InfoIndiv = document.createDocumentFragment()
            
            Container.append(NewInfo);

            let btn = document.createElement("button");
            let text = document.createTextNode("Borrar");
            btn.append(text);
            InfoIndiv.append(indiv)
            let Newdiv = document.querySelector("div.Newdiv");
            Newdiv.append(btn)
            Newdiv.append(indiv)
            


          });
    };

    const Evn  = (e) =>{
        e.preventDefault();
    };


    const Save2 = () =>{
      let Dn = document.getElementById("DT1").value;
        let Dn2 = document.getElementById("DT2").value;
        let Dn3 = document.getElementById("DT3").value;;
        document.querySelector(".SM-Show").innerHTML += `<div class='Newdiv2' id = "Con">
        <p> <b>Nombre:  <b/>${Dn}  <b>Apellido:  <b/>${Dn2} <b>Id:  <b/>${Dn3} <p/> 
        <button onClick = "Paz()">Borrar<button/> 
        <div/>`
    }

    return (
      <section className='SM'>
        <form onSubmit={Evn} action='' >
            <div>
                <input id='DT1' type="text" placeholder='Nombre' />
            </div>
            <div>
                <input id='DT2' type="text" placeholder='Apellido' />
            </div>
            <div>
                <input id='DT3' type="text" placeholder='Identificacion' />
            </div>
            <div>
                <button className='btn2' onClick={Save}>Guardar</button>
                <button onClick={Save2}>Guardar</button>
            </div>
        </form>
        <div className='SM-Show'>

        </div>
      </section>
    )
  }
}
