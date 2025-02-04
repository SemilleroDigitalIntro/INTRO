import React, { Component } from 'react';
import Generalimg from './data/GeneralImg';
import "./style/SectionM4.css";
import SectionMain4P2 from './SectionMain4P2';

export default class SectionMain4 extends Component {

  render() {
    
    const GeneralImgList = Generalimg.map(
        GT =>{
            return(
                <img src={GT.SM4img} alt="Montain" />
            )
        }
    );

    const Scrolling = () =>{

   

      document.getElementById("SectionHeader1").style.display = "flex";
      document.getElementById("SectionHeader1").style.transition = "300ms";
      document.getElementById("SectionHeader1").style.animation = "h1 1s"
      document.getElementById("SM1-NAV").style.display = "none";
      
  };

    return (
      <section onPointerOver={Scrolling} className='SectionMain4' id='SectionMain4'>
        <div className='SectionMain4-div1'>
            <div>
                <div></div>
            </div>
            <h1>Why Us?</h1>
        </div>
        <div className='SectionMain4-div2'>
            <div className='SectionMain4-div1-div1'>
                <h1>Hobbiton</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, quia laudantium ipsa accusamus quas quae harum,
                     nemo distinctio,aperiam provident asperiores voluptates perspiciatis nobis amet nisi? Animi sit similique molestias!</p>
                
                <button>Read More</button>
            </div>
            <div className='SectionMain4-div1-div2'>
                {GeneralImgList}
            </div>
            <SectionMain4P2/>
        </div>
      </section>
    )
  }
};
