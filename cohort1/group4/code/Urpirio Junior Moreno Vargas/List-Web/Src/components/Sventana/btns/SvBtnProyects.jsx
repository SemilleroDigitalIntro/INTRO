import { useState } from "react";

export default function SvBtnProyects(){
let NumF;
const [SvModalP, setSvModalP] = useState(true)

    const ModalProyects = () =>{
      let SvModalProyects = document.getElementById("SvModalProyects");
      
      setSvModalP(!SvModalP);

      if(NumF === undefined){
      SvModalProyects.style.display = 'flex';
      SvModalProyects.style.zIndex = "3";
      NumF = 1;
      } else if(SvModalP === false){
        SvModalProyects.style.display = 'flex';
        SvModalProyects.style.zIndex = "3";
      }else if(SvModalP === true){
        SvModalProyects.style.display = 'none';
        SvModalProyects.style.zIndex = "1";
      };

    };


    return(
        <div className='SvmainProyects__div1'>
                    <h3>Mis proyectos</h3>
                    <div className='SVMP_div1'>
                    <button onClick={ModalProyects}><i class="bi bi-plus"></i></button>
                    <button><i class='bx bx-chevron-down'></i></button>
                    </div>
        </div>
    )
};