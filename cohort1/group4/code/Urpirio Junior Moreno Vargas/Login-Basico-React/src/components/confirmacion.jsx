
import '../style/forget.css';
import React, {useState} from 'react';
import FormOrigen from './prevent.jsx';
import FormOrigenEnd from './prevent2.jsx';

    function Confirmacion2(){
         
        let [M_confir, setM_confir] = useState(true)

        function Sconfir(){
       
            setM_confir(!M_confir)

        }

        return(
                <div class= "Login-boby" >
                    <div className='form'  >
                      
                       {M_confir ? <FormOrigen/> : <FormOrigenEnd/> }

                     <div className='formulario' >
                    
                     <button id='btn-r' onClick={Sconfir}>{M_confir ? "Registrar" : "Volver"}</button>
                    
                     
                     </div>
                    
                    </div>
                </div>
        )
        
    }
    
    export default Confirmacion2


