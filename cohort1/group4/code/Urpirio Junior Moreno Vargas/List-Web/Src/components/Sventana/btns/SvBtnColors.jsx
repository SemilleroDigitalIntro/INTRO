import { useState } from "react"; 
import { boleanoCloseModal } from "./SvbtnCloseModal";


export let id;
export let idcolor;
export let numF;
export let ColorSelect;
export default function SvBtnColors(){

    const [ShowColor , setShowColor] = useState(true);
    
    
    const ChangeColor = () =>{
        setShowColor(!ShowColor);

        if(numF == undefined){
            ShowColor ? document.getElementById("SvModalNP__d3_div2").style.display = "flex" 
        : document.getElementById("SvModalNP__d3_div2").style.display = "none";
        }
        
        if(boleanoCloseModal === true){
            ShowColor ? document.getElementById("SvModalNP__d3_div2").style.display = "flex" 
            : document.getElementById("SvModalNP__d3_div2").style.display = "none";
        }else if(boleanoCloseModal === false){
            ShowColor ? document.getElementById("SvModalNP__d3_div2").style.display = "none" 
        : document.getElementById("SvModalNP__d3_div2").style.display = "flex";
        }else if (numF !== undefined){
            alert("Tenemos un error en la linea 14 en  la funcion change color ");
        };

        ColorSelect = ShowColor;
        
    };

    return(
        <button onClick={ChangeColor}>
                <span className='SvModalNP__div1_Span1' id="SvModalNP__div1_Span1"><i id={idcolor}></i><span id = "ColorWork"></span></span>
                <span className='SvModalNP__div1_Span2'><i class='bx bx-chevron-down'></i></span>
        </button>
    )
};
