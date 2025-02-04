import { useState } from "react";
import { ColorSelect } from "./SvBtnColors";
import { numF } from "./SvBtnColors";

export let boleanoCloseModal;
export default function SvBtnCloseModalp(){

    const [closeModal,setcloseModal] = useState(true);
    const closeModalNewProyects = () =>{
       
        setcloseModal(!closeModal);
        document.getElementById("SvModalNewProyets").style.display = "none"; 
        if(ColorSelect === true){
            document.getElementById("SvModalNP__d3_div2").style.display = "none";
            boleanoCloseModal = false;
            numF = 1;
            alert("funcina el True de la funcion close modal " + numF);
        }else if(ColorSelect === false ){
            boleanoCloseModal = true;
            document.getElementById("SvModalNP__d3_div2").style.display = "none";
            numF = 1;
            alert("funcina el False de la funcion close modal " + numF);
        }else{
           
        };

        
    };

    return(
        <button onClick={closeModalNewProyects}><i class='bx bx-x'></i></button>
    )
};

