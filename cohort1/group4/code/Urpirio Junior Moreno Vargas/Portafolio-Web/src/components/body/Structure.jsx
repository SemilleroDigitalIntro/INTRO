import Section_1H from "../header/Section_1H";
import Section_main from "../main/Section-main";
import "./style/Structure.css";
import SectionDm2 from "./Data/Section-main2";
import Section_main2 from "../main/Section-main2";
import Section_main3 from "../main/Section-main3";
// import SectionDm3 from "../data/Section-main3";
import Section_main3P2 from "../main/Section-main3P2";
import Section_main4 from "../main/Section-main4";
import Section_main4P2 from "../main/Section-main4P2";
import SectionDm4 from "./Data/Section-main4";
import Section_main5 from "../main/Section-main5";
import Section_main6 from "../main/Section-main6";
import Section_main7 from "../main/Section-main7";
import Section_main8 from "../main/Section-main8";
import "../main/style/Section_main8.css";
// import React, {useState} from "react";

function Structure(){
{/*Mapeado y agregado de la informacion a la section 2 */}
    const SectionM2list = SectionDm2.map( SM2 => {
        return (
            <Section_main2 number = {SM2.Numbers} title = {SM2.title}  />
        )
    })



    /*Mapeado y agregado de la informacion a la section 3 */
    
// const SectionM3list = SectionDm3.map( SM3 => {
//        return(
//            <Section_main3P2 title = {SM3.title} content = {SM3.content} link = {SM3.link} number = {SM3.Number} id = {SM3.id} function={SM3.function}  />
//        )
//    })


{/*Mapeado y agregado de la informacion a la section 4 */}
    const SectionM4list = SectionDm4.map( SM4 => {
        return(
            <Section_main4P2 imagen = {SM4.image} imgName = {SM4.imgName}  pageName = {SM4.pageName} summary = {SM4.summary} link ={SM4.link} id = {SM4.class} />
        )
    })
   

    // let [Showcolor, SetShowcolor] = useState(false)
    // let [Showcolor2, SetShowcolor2] = useState(false)
    //Animacion de contenedor de la section 3.
    const Container_sm3_F1 = () =>{
        if (document.getElementById("Container-sm3-2").style.display == "flex"){
            document.getElementById("Container-sm3-1").style.display = "flex";
            document.getElementById("Container-sm3-1").style.animation = "trans1 0.5s";
            document.getElementById("Container-sm3-2").style.display = "none";
            
        }else{
            if(document.getElementById("Container-sm3-3").style.display == "flex"){
                document.getElementById("Container-sm3-1").style.display = "flex";
                document.getElementById("Container-sm3-1").style.animation = "trans3 0.5s";
                document.getElementById("Container-sm3-3").style.display = "none";
                
            }else{
                if (document.getElementById("Container-sm3-4").style.display == "flex"){
                    document.getElementById("Container-sm3-1").style.display = "flex";
                    document.getElementById("Container-sm3-1").style.animation = "trans4 0.5s";
                    document.getElementById("Container-sm3-4").style.display = "none";
                }else{
                    let neverback = 1;
                    if (neverback == 1){
                        document.getElementById("Container-sm3-1").style.display = "flex";
                    }
                }
            }
        };
        
    };

    const Container_sm3_F2 = () =>{
        if (document.getElementById("Container-sm3-1").style.display == "flex"){
            document.getElementById("Container-sm3-2").style.display = "flex";
            document.getElementById("Container-sm3-2").style.animation = "Ntrans2 0.5s";
            document.getElementById("Container-sm3-1").style.display = "none";
            
        }else{
            if(document.getElementById("Container-sm3-3").style.display == "flex"){
                document.getElementById("Container-sm3-2").style.display = "flex";
                document.getElementById("Container-sm3-2").style.animation = "trans1 0.5s";
                document.getElementById("Container-sm3-3").style.display = "none";
            }else{
                if(document.getElementById("Container-sm3-4").style.display == "flex"){
                    document.getElementById("Container-sm3-2").style.display = "flex";
                    document.getElementById("Container-sm3-2").style.animation = "trans3 0.5s";
                    document.getElementById("Container-sm3-4").style.display = "none";
                }else{
                    let neverback = 1;
                    if(neverback == 1){
                        document.getElementById("Container-sm3-2").style.display = "flex";
                    }
                }
            }
        };
        

    };

    const Container_sm3_F3 = () =>{
        if (document.getElementById("Container-sm3-1").style.display == "flex"){
            document.getElementById("Container-sm3-3").style.display = "flex";
            document.getElementById("Container-sm3-3").style.animation = "Ntrans3 0.5s";
            document.getElementById("Container-sm3-1").style.display = "none";
    }else{
        if(document.getElementById("Container-sm3-2").style.display == "flex"){
            document.getElementById("Container-sm3-3").style.display = "flex";
            document.getElementById("Container-sm3-3").style.animation = "Ntrans2 0.5s";
            document.getElementById("Container-sm3-2").style.display = "none";
        }else{
            if(document.getElementById("Container-sm3-4").style.display == "flex"){
                document.getElementById("Container-sm3-3").style.display = "flex";
                document.getElementById("Container-sm3-3").style.animation = "trans1 0.5s";
                document.getElementById("Container-sm3-4").style.display = "none";
            }else{
                let neverback = 1;
                    if(neverback == 1){
                        document.getElementById("Container-sm3-3").style.display = "flex";
                    };
            };
        };
    };
    
    
    
};

    const Container_sm3_F4 = () =>{
        if (document.getElementById("Container-sm3-1").style.display == "flex"){
            document.getElementById("Container-sm3-4").style.display = "flex";
            document.getElementById("Container-sm3-4").style.animation = "Ntrans4 0.5s";
            document.getElementById("Container-sm3-1").style.display = "none";
    }else{
        if(document.getElementById("Container-sm3-2").style.display == "flex"){
            document.getElementById("Container-sm3-4").style.display = "flex";
            document.getElementById("Container-sm3-4").style.animation = "Ntrans3 0.5s";
            document.getElementById("Container-sm3-2").style.display = "none";
        }else{
            if(document.getElementById("Container-sm3-3").style.display == "flex"){
                document.getElementById("Container-sm3-4").style.display = "flex";
                document.getElementById("Container-sm3-4").style.animation = "Ntrans2 0.5s";
                document.getElementById("Container-sm3-3").style.display = "none";
            };
        };
    };
    };

    return(
        <div>
            <header>
                <Section_1H/>
            </header>
            <main>
                <Section_main/>

                <section className="Section-main2">
                {SectionM2list}
                </section>

                <section className="Section-main3" id="Section-main3">
                    <Section_main3/>
                    <div  className="Section-main3-div2">
                        {/* {SectionM3list} */}
                    <div id="pepe" onMouseEnter={Container_sm3_F1}>
                        <Section_main3P2 
                        title = "Web Development" 
                        content = "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utiling methods.." 
                        link = "" 
                        number = "01" 
                        id = "Container-sm3-1" 
                        />
                    </div>

                    <div onPointerOver={Container_sm3_F2}>
                    <Section_main3P2 
                    title = "UI/UX Design"
                    content = "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utiling methods.."
                    number = "02"
                    link = ""
                    id = "Container-sm3-2" 
                    />
                    </div>

                    <div onPointerOver={Container_sm3_F3}>
                    <Section_main3P2 
                    title = "Content Writing"
                    content = "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utiling methods.."
                    number = "03"
                    link = ""
                    id = "Container-sm3-3"
                    />
                    </div>

                    <div onPointerOver={Container_sm3_F4}>
                        <Section_main3P2 
                        title = "Digital Marketing"
                        content = "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utiling methods.."
                        number = "04"
                        link = ""
                        id = "Container-sm3-4"
                        />
                    </div>
                    



                    </div>
                </section>

                <section className="Section-main4" id="Section-main4">
                    <Section_main4/>
                    <div className="Divs-cards">
                       {SectionM4list}
                    </div>
                </section>

                <Section_main5/>

                <Section_main6/>

                <Section_main7/>

                <Section_main8/>

            </main>
            <footer>

            </footer>
        </div>
    );
};
export default Structure