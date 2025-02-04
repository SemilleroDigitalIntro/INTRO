import Forget from './forget';

function Login(){
    return(
        <div>
            <div className='formulario'>
    <input id='usuario' type="text" placeholder='usuario' />
</div>

  <div className='formulario' >

    <input id='password' type="password" placeholder='Contraseña' />

  </div>
  <div>
    <Forget/>
  </div>
        </div>
    )
}
export default Login