import { useState } from "react";

const SmainModalDeploy = () => {

    let [Dbandeja, setDbandeja] = useState(true);
    let deployB = document.getElementById("Sm__b_div1");
    let changeIcon = document.getElementById("i2");
    let btnBack = document.querySelector(".Sm__btn1");

    const DeployBandeja = () =>{
        
        setDbandeja(!Dbandeja);

        Dbandeja ? document.getElementById("Sm__b_div1").style.display = "flex" : document.getElementById("Sm__b_div1").style.display = "none";
        Dbandeja ? document.getElementById("i2").style.rotate = "90deg" : document.getElementById("i2").style.rotate = "0deg";
        Dbandeja ? btnBack.style.background = "gray" : btnBack.style.background = "#ebebeb";
        Dbandeja ? btnBack.style.color = "white" : btnBack.style.color = "black";



    };

    const Changebtn = () =>{
        
        switch (Dbandeja) {
            case (false):
                btnBack.style.color = "black";
                btnBack.style.background = "#ebebeb";
                break;
                
        
            case (true):
                btnBack.style.color = "white";
                btnBack.style.background = "gray";
                break;
                
            default:
                alert("existe un error en la linea 23, funcion Changebtn")
                break;
                
        }

    };

    const Changebtn2 = () =>{
        switch (Dbandeja){
            case (false):
                btnBack.style.color = "white";
                btnBack.style.background = "gray";
                break;
            case (true):
                btnBack.style.color = "black";
                btnBack.style.background = "#ebebeb";
                break;
            default:
                alert("existe un error en la linea 45, funcion Changebtn2");
                break;
        };
    };

    return(
        <button onClick={DeployBandeja} onMouseEnter={Changebtn} onMouseLeave={Changebtn2} className='Sm__btn1'>
                    <i id='i1' class="bi bi-inbox"></i>
                    Bandeja de entrada
                    <i id='i2' class='bx bx-chevron-right'></i>
        </button>
    )
};
export default SmainModalDeploy;