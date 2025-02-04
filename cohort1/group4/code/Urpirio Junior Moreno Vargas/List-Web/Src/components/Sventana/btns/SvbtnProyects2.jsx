import { useState } from "react";
import { boleanoCloseModal } from "./SvbtnCloseModal";

export default function SvBtnProyects2(){

    const [ModalNewProyect, setModalNewProyect] = useState(true);

    const NewProyects = () =>{
        
        setModalNewProyect(!ModalNewProyect);
        document.querySelector(".SvModalNewProyets").style.display = "flex" 
        

        if (ModalNewProyect === true){
            document.getElementById("SvModalProyects").style.display = "none" ;
        }else{
            document.getElementById("SvModalProyects").style.display = "none" ;
        };

    };


    return(
        <div onClick={NewProyects} className='SvModalProyects__div1' >
            <span>#</span>
            <div  className='SvMP__div1'>
                <span className='SvMP_spanH1'>Añadir proyecto</span>
                <span className='SvMP_spanH2'>Planificar tareas</span>
            </div>
        </div>
    );
};