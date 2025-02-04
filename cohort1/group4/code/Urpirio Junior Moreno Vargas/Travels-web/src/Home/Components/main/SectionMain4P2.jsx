import React, { Component } from 'react';
import CardScroll from './data/SM4_Scroll';
import "./style/SectionM4.css";

export default class SectionMain4P2 extends Component {
  render() {




    const Cardscroll = (props) =>{
        return(
            <div className='cards'>
                <img src={props.image} alt={props.alt} />
                <div>
                    <a href={props.link}>
                    <span>
                    <h4>{props.place}</h4>
                    <p>{props.price}</p>
                    </span>
                    <p>
                    <i class='bx bxs-right-arrow-alt'></i>
                    </p>
                    </a>
                </div>
            </div>
        )
    };


    const  Cardlist = CardScroll.map(
        CL =>{
            return(
                <Cardscroll image = {CL.image} alt = {CL.alt} link = {CL.link} place = {CL.place} price = {CL.price} />
            )
        }
    );

    return (
      <div className='SectionMain4-div1-div3'>
        <div>
            <h1>Popular tour</h1>
        </div>
        <div className='SM4-div1-div4-div2'>
            {Cardlist}
        </div>
      </div>
    )
  }
};
