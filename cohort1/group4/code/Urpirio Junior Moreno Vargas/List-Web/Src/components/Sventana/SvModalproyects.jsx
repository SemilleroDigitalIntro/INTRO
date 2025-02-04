import React, { Component, useState } from 'react';
import "./style/SvModalproyects.less";
import SvBtnProyects2 from './btns/SvbtnProyects2';
export default class SvModalproyects extends Component {
  render() {
    

    return (
      <dialog className='SvModalProyects' id='SvModalProyects'>
        <SvBtnProyects2/>
        <div className='SvModalProyects__div2' >
            <span><i class='bx bxs-inbox'></i></span>
            <div className='SvMP__div2'>
                <span className='SvMP_spanH1'>Explorar plantillas</span>
                <span className='SvMP_spanH2'>Empieza facilmente con una plantilla de proyecto</span>
            </div>
        </div>
      </dialog>
    )
  }
}
