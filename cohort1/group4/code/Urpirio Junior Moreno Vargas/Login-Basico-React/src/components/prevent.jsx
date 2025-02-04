
import Tlogin from './TLogin.jsx';


function FormOrigen(){
    return (
        <div class= "Login-boby2" >

        <h1 id='titulo'>REGISTER-REACT</h1> 

  <div className='formulario'>
    <input id='usuario' type="text" placeholder='usuario' />
  </div>

  <div className='formulario' >
    <input id='Email' type="Email" placeholder='Email' />
  </div>

  <div className='formulario' >
    <input id='password' type="password" placeholder='Contraseña' />
  </div>
  <Tlogin/>
    </div>
    )
 }
 export default FormOrigen