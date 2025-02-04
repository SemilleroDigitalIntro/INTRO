import React, { Component } from 'react';
import "./style/Smain.less";
import SmainText from './SmainText';
import SmainModalTarea from './SmainModalTarea';

export default class Smain extends Component {
  render() {

     

    return (
      <div className='Smain__div1' id='Smain__div1'>
        <SmainModalTarea/>
        <div className='listarea'>

        </div>
       <SmainText/>
       
      </div>
    )
  }
}
