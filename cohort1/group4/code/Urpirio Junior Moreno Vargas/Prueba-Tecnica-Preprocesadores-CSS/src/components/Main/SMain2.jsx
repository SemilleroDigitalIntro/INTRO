import React, { Component } from 'react';
import SMain2Data from './SMain2Data';
import "./SMain2.less";

export default class SMain2 extends Component {
  render() {

   

    const Cards = (props) =>{
        return(
            <div className='SM2__Cards'>
                
                
                <div>
                <img src={props.Icon} alt="" />
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                </div>
                <a href= {props.link}>{props.Nextcontent}<i class='bx bxs-left-arrow-alt bx-rotate-180' ></i></a>
            </div>
        )
    };

    const Cardslist = SMain2Data.map(
        CL =>{
            return(
                <Cards title = {CL.title} content = {CL.content} Nextcontent = {CL.NextContent} link = {CL.link} Icon = {CL.icon} />
            )
        }
    );

    return (
      <section className='SMain2'>
        <div className='SMain2__div1'>
            <span>How can we help?</span>
            <h2>Flexibility for your lifestyle</h2>
        </div>
        <div className='SMain__div2'>
            {Cardslist}
        </div>
      </section>
    )
  }
}
