import React, { Component } from 'react';
import { useState } from 'react';
import SvSelect1 from './SvSelect1';
import SvBtnColors from './btns/SvBtnColors';
import SvBtnCloseModalp from './btns/SvbtnCloseModal';
import SvColorData from './Data/SvColorData';
import "./style/SvModalNewProyect.less";
import { id , idcolor } from './btns/SvBtnColors';


export default function SvModalNewProyect(){

  let VariableColor;
    const ColorDatalist = SvColorData.map( SDL =>{
        return(
            <SvSelect1 color ={SDL.color} Svcolor = {SDL.Svcolor}  className = {SDL.className}/>
        );
    });

   
    
   
    const [text, setText] = useState('HOLA');

    const ChangeText = (e)=>{
      setText(e.target.value)
      to
    };

    const SelectAzul = () =>{
      let SvModalNP__div1_Span1 = document.getElementById("SvModalNP__div1_Span1");
      
      switch (VariableColor){
        case undefined:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          VariableColor = 1
          break;
        case 1:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          VariableColor = 1
          break;
        case 2:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectRojo").style.display = "flex";
          VariableColor = 1
          break;
        case 3:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectVerde").style.display = "flex";
          VariableColor = 1
          break;
        case 4:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectAmarrillo").style.display = "flex";
          VariableColor = 1
          break;
        case 5:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectMorado").style.display = "flex";
          VariableColor = 1
          break;
        case 6:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectNegro").style.display = "flex";
          VariableColor = 1
          break
        default:
          alert("Existe un error en el Switch en el documento SvModalNewProyects Linea 36");
          break;  
      };
    };

    const SelectRojo = () =>{
      let SvModalNP__div1_Span1 = document.getElementById("SvModalNP__div1_Span1");

      SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
      
      switch(VariableColor){
        case undefined:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectRojo").style.display = "none";
          VariableColor = 2;
          break;
        case 1:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectAzul").style.display = "flex";
          document.getElementById("SvSelectRojo").style.display = "none";
          VariableColor = 2;
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
      }
    };

    const SelectVerde = () =>{
      VariableColor = 3;
      alert(VariableColor)
    };

    const SelectAmarrillo = () =>{
      VariableColor = 4;
      alert(VariableColor)
    };

    const SelectMorado = () =>{
      VariableColor = 5;
      alert(VariableColor)
    };

    const SelectNegro = () =>{
      VariableColor = 6;
      alert(VariableColor)
    };

    return (
      <dialog className='SvModalNewProyect' id='SvModalNewProyect' open>
        <div className='SvModalNP__div1'>
            <h2>Añadir proyecto<i class='bx bx-question-mark' ></i></h2>
            <SvBtnCloseModalp/>
        </div>
        <div className='SvModalNP__div2'>
            <div className='SvModalNP__d2_div1'>
                <label htmlFor="Nombre">Nombre</label>
                <input onChange={ChangeText} type="text" name='Nombre' value={text}  id='Nombre' maxLength={120}/>
            </div>
            <div className='SvModalNP__d2_div2'>
            <span>{text}/120</span>
            </div>
        </div>
        <div className='SvModalNP__div3'>
            <div className='SvModalNP__d3_div1' >
            <h3>Color</h3>
            <SvBtnColors/>
            </div>
            <dialog className='SvModalNP__d3_div2' id='SvModalNP__d3_div2' open>

            <span className="SvSelectAzul" id="SvSelectAzul" onClick={SelectAzul} >
            <i id="SvAzul" ></i>
            Azul
        </span>

        <span className="SvSelectRojo" id="SvSelectRojo" onClick={SelectRojo} >
            <i id="SvRojo" ></i>
            Rojo
        </span>

        <span className="SvSelectVerde" id="SvSelectVerde" onClick={SelectVerde} >
            <i id="SvVerde" ></i>
            Verde
        </span>

        <span className="SvSelectAmarrillo" id="SvSelectAmarrillo" onClick={SelectAmarrillo} >
            <i id="SvAmarrillo" ></i>
            Amarillo
        </span>

        <span className="SvSelectMorado" id="SvSelectMorado" onClick={SelectMorado} >
            <i id="SvMorado" ></i>
           Morado
        </span>
        <span className="SvSelectNegro" id="SvSelectNegro" onClick={SelectNegro} >
            <i id="SvNegro" ></i>
           Negro
        </span>

            </dialog>
            
        </div>
        <div className='SvModalNP__div4'>
              <button  id='SvModalNP__BtnCancelar'>Cancelar</button>
              <button id='SvModalNP__BtnAñadir' >Añadir</button>
            </div>
      </dialog>
    );
  };

