import React, { Component } from 'react';
import "./SMain3.less";
import SMain3Data from './SMain3Data';

export default class SMain3 extends Component {
  render() {


    const FrameP = (props) =>{
        return(
            <div className='SM3__div1' id={props.id}>
            <div className='div1' >
                <img src={props.img} alt={props.descrip} />
            </div>
            <div className='div2'>
                <h2>{props.title}</h2>
                <p>{props.content}</p>

                <div>
                <button className='btn'>Contact Us</button>
                <button className='btn R'>Read More</button>
               </div>
            </div>
            
        </div>
        );
    };

    const FrameList = SMain3Data.map( FL =>{
        return(
            <FrameP img = {FL.img} descrip = {FL.descrip} title = {FL.title}  content = {FL.content}/>
        )
    });

    return (
      <section className='SMain3'>
        {FrameList}
      </section>
    )
  }
}
