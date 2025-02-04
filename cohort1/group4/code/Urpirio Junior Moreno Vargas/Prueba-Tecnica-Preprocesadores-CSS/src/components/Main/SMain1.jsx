import React, { Component } from 'react';
import StatsList from './SMain1Data';
import "./SMain.less";

export default class SMain1 extends Component {
  render() {


    const Company = (props) =>{
        return(
            <div className='Sm1__Cards'>
                <h4>{props.Stats}</h4>
                <p>{props.Title}</p>
            </div>
        )
    };

    const statslist = StatsList.map( ST => {
        return(
            <Company Stats = {ST.Stats} Title = {ST.title} />
        )
    })


    const Photo = StatsList.map(P =>{
        return(
            <img src={P.img} alt={P.Descripcion} />
        )
    })

    
    return (
     <section className='SMain1'>
        <div className='SMain__div1'>
            <span>About Us</span>
            <h1>A proficient team with extensive khowledge</h1>
            {Photo}
        </div>
        <div className='SMain__div2'>
            {statslist}
        </div>
     </section>
    )
  }
}

