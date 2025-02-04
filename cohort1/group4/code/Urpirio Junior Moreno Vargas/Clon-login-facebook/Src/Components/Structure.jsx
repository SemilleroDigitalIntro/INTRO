import React, { Component } from 'react';
import Div1 from './div1';
import Div2 from './div2';
import "../style/style.less";

export default class Structure extends Component {
  render() {
    return (
      <section className='SMain1'>
        <Div1/>
        <Div2/>
      </section>
    )
  }
}
