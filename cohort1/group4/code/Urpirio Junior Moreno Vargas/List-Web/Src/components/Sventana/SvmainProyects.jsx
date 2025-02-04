import React, { Component, createElement, useState } from 'react';
import "./style/Svmainproyects.less";
import SvModalproyects from './SvModalproyects';
import SvBtnProyects from './btns/SvBtnProyects';

export default class SvmainProyects extends Component {
  render() {

    

    return (
      <div className='SvmainProyects'>
        <SvBtnProyects/>
        <SvModalproyects/>
        <div className='SvmainProyectsdiv2'>
            
        </div>
      </div>
    )
  }
}
