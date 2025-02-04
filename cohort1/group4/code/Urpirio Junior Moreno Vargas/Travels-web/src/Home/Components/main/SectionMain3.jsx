import React, { Component } from 'react'
import Stats_Name from './data/SM3_Stadistic';
import Generalimg from './data/GeneralImg';
import "./style/SectionM3.css";


export default class SectionMain3 extends Component {
  render() {

    const Stadistic = (props) =>{
        return(
            <div className='SM3-Stats'>
                <h4>{props.number}</h4>
                <span>{props.name}</span>
            </div>
        )
    };

    const Stadisticlist = Stats_Name.map(
        St => {
            return(
                <Stadistic number = {St.Stats} name = {St.name}/>
            )
        }
    );

    const MontainImg = Generalimg.map(
        MT =>{
            return(
                <img src={MT.SM3img} alt="Montain Img" />
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
      <section onPointerOver={Scrolling} className='SectionMain3' id='SectionMain3'>
        <div className='SectionMain3-div1'>
            <h1>About Us</h1>
        </div>
        <div className='SectonMain3-div2'>
            <div className='SM3-div2-div1'>
               {MontainImg}
            </div>
            <div className='SM3-div2-div2'>
                <div className='SM3-dv2-div2-div1'>
                    <h3>Get to khow us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta debitis error, voluptatibus saepe
                        aliquam aspernatur delectus pariatur perspiciatis!Saepe quibusdam libero dicta hic accusamus.
                         Repellendus, neque animi! Odit, eveniet dignissimos!</p>
                </div>
                <div className='SM3-dv2-div2-div2'>
                    <button>Read more</button>
                    <div>
                        {Stadisticlist}
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
};
