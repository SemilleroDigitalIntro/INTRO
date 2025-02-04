import React, { Component } from 'react';
import "./structura.less"
import SVheader from './components/Sventana/SVheader';
import SVmain from './components/Sventana/SVmain';
import SvheaderData from './components/Sventana/Data/SvheaderData';
import Smain from './components/main/Smain';
import SvModalNewProyect from './components/Sventana/SvModalNewProyect';

export default class Structura extends Component {
  render() {
    
    const startlist = SvheaderData.map(
        SvhD =>{

            const CerrarE = (props) =>{

                return(
                    <div style={{display: "none"}} className='Svheader__div2'>
                        <span>
                            <h4>{props.Username}</h4>
                        </span>
                        <span><i class='bx bx-log-out'></i>Cerrar sesion</span>
                   </div>
                )
            };

            const CerrarElist = SvheaderData.map(
                CE =>{
                    return(
                        <CerrarE Username = {CE.Username}/>
                    )
                }
            );

            return(
                <SVheader Photoperfil = {SvhD.Photoperfil} descripcionIMG = {SvhD.descripcionIMG}
                Username = {SvhD.Username} CerrarS = {CerrarElist}
                />
            )
        }
    );


    const CloseModal = () =>{
        
    }
    
    return (
      <div className='body'>
        <section className='Sventana' >
            {startlist}
            <SVmain/>
        </section>
        <section onClick={CloseModal} className='SvModalNewProyets' id='SvModalNewProyets'>
        <SvModalNewProyect/>
        </section>
        <section className='Smain'>
            <Smain/>
        </section>
      </div>
    )
  }
}
