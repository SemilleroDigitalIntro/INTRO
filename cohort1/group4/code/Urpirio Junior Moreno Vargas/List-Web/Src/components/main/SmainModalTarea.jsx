

export default function SmainModalTarea(){    

    const AddHomerwork = () =>{
        document.getElementById("SM_div2_div1").style.display = "flex";
        document.getElementById("SM__div1_Addtarea").style.display = "none";
        document.getElementById("Smain__div1").style.gap = "5px";
    };

    return(
        <div className='SM_div1_div1'> 
            <h1>Bandeja de entrada</h1>
            <span onClick={AddHomerwork} id="SM__div1_Addtarea"><i class="bi bi-plus" ></i>Añadir tarea</span>
        </div>
    )
}