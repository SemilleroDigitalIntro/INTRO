import { flushSync } from "react-dom";
import SectionDm7 from "./Data/Section-main7";
import "./style/Section_main7.css";

const Section_main7 = () => {
 let  ServicesTrans;
 let  ServicesTrans1;
 let  ServicesTrans2;
 let  ServicesTrans3;
   
        



const StopClients = () =>{
    clearInterval(ServicesTrans);
    clearInterval(ServicesTrans1);
    clearInterval(ServicesTrans2);
    clearInterval(ServicesTrans3);
    ServicesTrans  = null;
    ServicesTrans1 = null;
    ServicesTrans2 = null;
    ServicesTrans3 = null;
    console.log("Se detuvo")
}
const StartClients = () =>{
    setTimeout(ServicesTrans);
    console.log("Se prendio")


    ServicesTrans = setInterval(()=>{
        document.getElementById("Cardservices1").style.display = "none";
        document.getElementById("Cardservices2").style.display = "none";
    
    },3000)
    
     ServicesTrans1 = setInterval(()=>{
        document.getElementById("Cardservices3").style.display = "flex";
        document.getElementById("Cardservices4").style.display = "flex";
    },3000);
    
    ServicesTrans2 = setInterval(()=>{
        document.getElementById("Cardservices1").style.display = "flex";
        document.getElementById("Cardservices2").style.display = "flex";
    
    },6000)
    
     ServicesTrans3 = setInterval(()=>{
        document.getElementById("Cardservices3").style.display = "none";
        document.getElementById("Cardservices4").style.display = "none";
    },6000);
}






    const Div2 = (props) => {

        return(
            
                <div id={props.id} onMouseOver={StopClients} onPointerLeave={StartClients} className="Card-services">
                    <div className="Card-services-div1" >
                        <img src={props.clientePhoto} alt={props.clienteName + " Photo"} />
                        <p>{props.opinion}</p>
                    </div>
                    <div className="Card-services-div2">
                        <h3>{props.clienteName}</h3>
                        <p>{props.PositionWork}</p>
                    </div>
                </div>
        )
    }

    const Client_opinion_List = SectionDm7.map( SM7 => {
        return(
            <Div2 clientePhoto = {SM7.clientePhoto} clienteName = {SM7.clientName} opinion = {SM7.opinion} PositionWork = {SM7.positionWork} id = {SM7.id} />
        )
    })

    return(
        <section  className="Section-main7" id="Section-main7">
            <div className="Section-main7-div1">
                <h1>My Client's Stories</h1>
                <p>Empowering people in new a digital journey with my super services</p>
            </div>
            <div  className="Section-main7-div2">
            {Client_opinion_List}
            </div>
            <div className="Section-main7-div3">
                <button className="blue-NOBACK"></button>
                <button className="blue-BACK"></button>
            </div>
        </section>
    )
}
export default Section_main7