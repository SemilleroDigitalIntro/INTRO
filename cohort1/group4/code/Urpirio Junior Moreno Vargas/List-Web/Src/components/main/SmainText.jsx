import React, { Component, useState } from 'react';
import "./style/SmainText.less";
import SmainModalDeploy from './SmainModalDeploy';
import SmainModal from './SmainModal';




export default class SmainText extends Component {
  render() {

    let placeholderV = "Escribe tus metas aqui";
    
    let clAss;
    let Vacio;

    

    const Cancelar = () =>{
        document.querySelector(".SM_div2_div1").style.display = "none";
        document.getElementById("SM__div1_Addtarea").style.display ="flex";
        if(document.getElementById()){

        }
    };

    const AñadirTarea = () =>{


        let InputTitulo = document.getElementById("inputTitulo").value;
        let TextareaDescripcion = document.getElementById("TextareaDescripcion").value;
        

        if(InputTitulo != ""){
        let listarea = document.querySelector(".listarea");

        listarea.innerHTML += `<div class = '${"SM__list" + clAss} Sm__list'>
        <i class='bx bx-check'></i>
        <div class = 'Sm__list_div1' >
        <h3>${InputTitulo}</h3>
        <p>${TextareaDescripcion}</p>
        </div>
        <div class = 'Sm__list_div2'>
        <button>Remover</button>
        </div>
        
        </div>`;
        }else{
           
        }

    };

    // const AñadirTareaK = (e) =>{
    // };

    const Inputchange = () =>{
        let InputTitulo = document.getElementById("inputTitulo").value;

        if(InputTitulo == ""){
            document.getElementById("Sm__btn3").setAttribute("disabled",true);
            document.getElementById("Sm__btn3").style.background = "#ff00006a";
        }else{
        document.getElementById("Sm__btn3").removeAttribute("disabled");
        document.getElementById("Sm__btn3").style.background = "red";
        };

        if(InputTitulo == ""){
            document.getElementById("warningTitulo").style.display = "flex";
        }else{
            document.getElementById("warningTitulo").style.display = "none";
        };
        
    };
    
    const Inputclick = () =>{

        let InputTitulo = document.getElementById("inputTitulo").value;

        if(InputTitulo == ""){
            document.getElementById("Sm__btn3").setAttribute("disabled",true);
        }else{
        document.getElementById("Sm__btn3").removeAttribute("disabled")
        };
    };

    const Textareachange = () =>{
        let InputTitulo = document.getElementById("inputTitulo").value;

        if(InputTitulo == ""){
            document.getElementById("warningTitulo").style.display = "flex";
        }else{
            document.getElementById("warningTitulo").style.display = "none";
        };
    };



    

    return (
        <div className='SM_div2_div1' id='SM_div2_div1'>

        <div className='SM_d2_d1_div1' >
            <input onChange={Inputchange} onClick={Inputclick} type="text" name="" id="inputTitulo" placeholder={placeholderV} required/>
            <span id='warningTitulo' style={{
                display: "none",
                color: "red",
                fontSize: "10px",
                fontWeight: "600",
                padding: "5px",
                borderBottom: "1px solid red",
            }}>Porfavor ingresa el nombre de la tarea</span>
            <textarea onChange={Textareachange} name="" value={Vacio} id="TextareaDescripcion" placeholder='Descripcion'></textarea>
        </div>

        <div className='SM_d2_d1_div2'>
            <div className='Sm_bandeja'>

                <SmainModalDeploy/>
                <SmainModal/>

                    
            </div>

            <div>
                <button onClick={Cancelar}  className='Sm__btn2' id='Sm__btn2'>Cancelar</button>
                <button onClick={AñadirTarea}  className='Sm__btn3' id='Sm__btn3'>Añadir tarea</button>
            </div>
            
        </div>
    </div>
    );
  };
};
