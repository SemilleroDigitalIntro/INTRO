import React, { Component } from 'react';
import SvmainProyects from './SvmainProyects';
import "./style/Svmain.less";
import SvModalproyects from './SvModalproyects';

export default class SVmain extends Component {
  render() {

    const AddHomeTarea = () =>{
      document.getElementById("SM_div2_div1").style.display = "flex";
    };


    return (
      <main className='Svmain'>
        <div className='Svmain__div1'>
            <span onClick={AddHomeTarea} id='Svm__tareas'><i class="bi bi-plus"></i>Añadir tarea</span>
            <span id='Svm__Buscador'><i class="bi bi-search"></i>Buscador</span>
            <span id='Svm__BnEntrada'><i class="bi bi-inbox"></i>Bandeja de entrada</span>
        </div>
        <SvmainProyects/>
      </main>
    )
  }
}
