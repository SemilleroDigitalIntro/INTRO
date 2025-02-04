 
 const Section_main3P2 = (props) =>{

    
    

    return (
                <section onPointerOver={props.function} className="Sm3-container-links"  >
                <a className="Sm3-content-Noback"  href={props.link}>
                <div>
                    <span>{props.number}</span>
                    <h1>{props.title}</h1>
                </div>

                <p>{props.content}</p>
                <i class='bx bx-left-arrow-alt'></i>
                </a>
                <div className="Sm3-link-back" id={props.id} ></div>
                
                </section>
    )
 }
 export default Section_main3P2