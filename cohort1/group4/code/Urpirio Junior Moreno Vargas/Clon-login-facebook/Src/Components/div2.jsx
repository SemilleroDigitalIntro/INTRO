import React, { Component } from 'react'


export default class Div2 extends Component {
  render() {

    const Send = () =>{

    }


    const Change = ()  =>{
        document.getElementById("email").style.boxShadow = "1px 1px 5px 1px #1876f27e";
    };

    const Change2 = () =>{
        document.getElementById("email").style.boxShadow = "none";
    }

    return (
      <div className='SM1__div2'>
        <div className='SM1__div1_div1'>

        <form onSubmit={Send} action="">
            <div>
                <input onClick={Change} onPointerLeave={Change2} type="email" name="" id="email"  required placeholder='Correo electrónico o número de teléfono'/>
            </div>
            <div>
                <input type="password" name="" id="" required  placeholder='Contraseña' />
            </div>
            <div>
                <button type="submit"> Iniciar Sesion</button>
                <a href="">¿Olvidaste tu contraseña?</a>
            </div>
        </form>
        <div className='btnG' >
            <button className='btnNew'>Crear cuenta nueva</button>
        </div>

        </div>
        <div className='SM1__div1_div2'>
            <p><a href="">Crea una página</a> para una celebridad, una marca o un negocio.</p>
        </div>
      </div>
    )
  }
}
