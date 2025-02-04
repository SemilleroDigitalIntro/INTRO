import "../style/Home.css";

function SectionP1(props){

    return(
        
        
        <section>
                <div className="card">
                    <img src={props.ImagenCard} alt="Imgen-card" />
                    <h3>{props.tituloCard}</h3>
                    <p>{props.ContenidoCard}</p>
                </div>
            </section>
    )
}
export default SectionP1