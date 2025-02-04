import React, { Component } from 'react'
import InfoNav from '../main/data/SM1_InfoNav';
import "./style/SectionH1.css"

export default class SectionHeader1 extends Component {
  render() {

    const Nav = (nav) =>{
        return(
            <a href={nav.link}>{nav.name}</a>
        )
    };

    const Navlist = InfoNav.map( N => {
        return(
            <Nav link ={N.link} name = {N.name} />
        )
    });

   

    return (
      <section className='SectionHeader1' id='SectionHeader1'>
        <nav>
        {Navlist}
        </nav>
      </section>
    )
  }
}
