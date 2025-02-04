import React, { Component } from 'react';
import SHeader from './components/Header/SHeader';
import SMain1 from './components/Main/SMain1';
import SMain2 from './components/Main/SMain2';
import SMain3 from './components/Main/SMain3';

export default class Structure extends Component {
  render() {
    return (
      <section>
        <header>
          
           <SHeader/>
            
        </header>
        <main>
            <SMain1/>
            <SMain2/>
            <SMain3/>
        </main>
      </section>
    )
  }
}

