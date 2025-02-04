import SectionDm8P2 from "./Data/Section-main8P2";

const Section_main8P2 = () =>{


    const Divgen = (props) => {
        return(
               <div className="S-M8-Dv2-Contact">
                   <div className="S-M8-Dv2-Contact-div1">
                    <i class={props.TypeIcon}></i>
                    </div>

                    <div>
                         <h3>{props.typeContact}</h3>
                         <a href={props.typelink}>{props.infoContact}</a>
                    </div>
                </div>
        )
    }

    const Contactlist = SectionDm8P2.map(SM8P2 => {
        return(
            <Divgen typeContact = {SM8P2.TypeContact} TypeIcon = {SM8P2.TypeIcon} typelink = {SM8P2.Typelink} infoContact = {SM8P2.InfoContact} />
        )
    })

    return(


        <div className="Section-main8-div2">
             {Contactlist}   
            </div>
    )
}
export default Section_main8P2