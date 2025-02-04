import SvheaderData from '../Sventana/Data/SvheaderData';

const SmainModal = () =>{

    const MinPerfil = (props) =>{
        return(
            <div className='Sm__b_Misproyecto'>
                <img src={props.minPerfil} alt={props.descripcion} />
                <h3>Mis proyecto</h3>
            </div>
        )
    };

    const minperfilList = SvheaderData.map( MP =>{
        return(
            <MinPerfil minPerfil = {MP.Photoperfil} descripcion = {MP.descripcionIMG}/>
        )
    });

    return(
        <div className='Sm__b_div1' id='Sm__b_div1' style={{display: "none"}}>
                       <div>
                        <input type="text"  placeholder='Escribe el nombre del proyecto'/>
                       </div>

                       <div className='Sm__b_dv_div2'>
                        <span><i class="bi bi-inbox"></i>Bandeja de entrada</span>
                       </div>

                        {minperfilList}

                        <div className='minProyects'>
                        
                        </div>
    </div>
    )
};
export default  SmainModal;