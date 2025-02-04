import "./style/Section_main4.css";


const Section_main4 = () =>{

    function All(){
        

        if (document.getElementById("Sm4-background-Apps").style.display == "flex"){
            document.getElementById("Sm4-background-All").style.display = "flex";
            document.getElementById("Sm4-background-All").style.animation = "navTranstion1 0.5s"
            document.getElementById("Sm4-background-Apps").style.display = "none";

        }else{
            if(document.getElementById("Sm4-background-Webs").style.display == "flex"){
                document.getElementById("Sm4-background-All").style.display = "flex";
                document.getElementById("Sm4-background-All").style.animation = "navTranstion2 0.5s";
                document.getElementById("Sm4-background-Webs").style.display = "none";
            }else{
                if(document.getElementById("Sm4-background-UX_UI").style.display == "flex"){
                    document.getElementById("Sm4-background-All").style.display = "flex";
                    document.getElementById("Sm4-background-All").style.animation = "navTranstion3 0.5s";
                    document.getElementById("Sm4-background-UX_UI").style.display = "none";
                }else{
                    let NoMoreOption = 1;
                    if( NoMoreOption == 1){
                        document.getElementById("Sm4-background-All").style.display = "flex";
                    };
                };
            };

        };
        if (document.getElementById("Sm4-background-All").style.display == "flex"){

        document.getElementById("Web").style.display = "flex";
        document.getElementById("Web2").style.display = "flex";
        document.getElementById("Web3").style.display = "flex";
        document.getElementById("Web4").style.display = "flex";
        document.getElementById("NoContent").style.display = "none";
        }

    };
    function Apps(){

        

        if(document.getElementById("Sm4-background-All").style.display == "flex"){
            document.getElementById("Sm4-background-Apps").style.display = "flex";
            document.getElementById("Sm4-background-Apps").style.animation = "navTranstion1_Negative 0.5s";
            document.getElementById("Sm4-background-All").style.display = "none";
        }else{
            if(document.getElementById("Sm4-background-Webs").style.display == "flex"){
                document.getElementById("Sm4-background-Apps").style.display = "flex";
                document.getElementById("Sm4-background-Apps").style.animation = "navTranstion1 0.5s";
                document.getElementById("Sm4-background-Webs").style.display = "none";
            }else{
                if(document.getElementById("Sm4-background-UX_UI").style.display == "flex"){
                    document.getElementById("Sm4-background-Apps").style.display = "flex";
                    document.getElementById("Sm4-background-Apps").style.animation = "navTranstion2 0.5s";
                    document.getElementById("Sm4-background-UX_UI").style.display = "none";
                }else{
                    let NoMoreOption2 = 1;
                    if(NoMoreOption2 == 1){

                        document.getElementById("Sm4-background-All").style.display = "none";
                        document.getElementById("Sm4-background-Apps").style.animation = "navTranstion1_Negative 0.5s";
                        document.getElementById("Sm4-background-Apps").style.display = "flex";
                    }
                }
            }
        };

        if (document.getElementById("Sm4-background-Apps").style.display == "flex"){
        
        document.getElementById("Web").style.display = "none";
        document.getElementById("Web2").style.display = "none";
        document.getElementById("Web3").style.display = "none";
        document.getElementById("Web4").style.display = "none";
        document.getElementById("NoContent").style.display = "flex";

        }
    }
    function Webs(){

       if(document.getElementById("Sm4-background-All").style.display == "flex"){
        document.getElementById("Sm4-background-Webs").style.display = "flex";
        document.getElementById("Sm4-background-Webs").style.animation = "navTranstion2_Negative 0.5s";
        document.getElementById("Sm4-background-All").style.display = "none";
        
       }else{
        if(document.getElementById("Sm4-background-Apps").style.display == "flex"){
            document.getElementById("Sm4-background-Webs").style.display = "flex";
            document.getElementById("Sm4-background-Webs").style.animation = "navTranstion1_Negative 0.5s";
            document.getElementById("Sm4-background-Apps").style.display = "none";
        }else{
            if(document.getElementById("Sm4-background-UX_UI").style.display == "flex"){
                document.getElementById("Sm4-background-Webs").style.display = "flex";
                document.getElementById("Sm4-background-Webs").style.animation = "navTranstion1 0.5s";
                document.getElementById("Sm4-background-UX_UI").style.display = "none";
            }else{
                let NoMoreOption3 = 1;
                    if(NoMoreOption3 == 1){

                        document.getElementById("Sm4-background-All").style.display = "none";
                        document.getElementById("Sm4-background-Webs").style.animation = "navTranstion2_Negative 0.5s";
                        document.getElementById("Sm4-background-Webs").style.display = "flex";
                        document.getElementById("Sm4-background-All").style.display = "none";

                    }
            }
        }
       };
       if(document.getElementById("Sm4-background-Webs").style.display == "flex"){
        document.getElementById("Web").style.display = "flex";
        document.getElementById("Web2").style.display = "flex";
        document.getElementById("Web3").style.display = "flex";
        document.getElementById("Web4").style.display = "flex";
        document.getElementById("NoContent").style.display = "none";
       }
    }
    function UX_UI(){
       
        if(document.getElementById("Sm4-background-All").style.display == "flex"){
            document.getElementById("Sm4-background-UX_UI").style.display = "flex";
            document.getElementById("Sm4-background-UX_UI").style.animation = "navTranstion3_Negative 0.5s";
            document.getElementById("Sm4-background-All").style.display = "none";
        }else{
            if(document.getElementById("Sm4-background-Apps").style.display == "flex"){
                document.getElementById("Sm4-background-UX_UI").style.display = "flex";
                document.getElementById("Sm4-background-Apps").style.display = "none";
                document.getElementById("Sm4-background-UX_UI").style.animation = "navTranstion2_Negative 0.5s";
            }else{
                if(document.getElementById("Sm4-background-Webs").style.display == "flex"){
                    document.getElementById("Sm4-background-UX_UI").style.display = "flex";
                    document.getElementById("Sm4-background-UX_UI").style.animation = "navTranstion1_Negative 0.5s";
                    document.getElementById("Sm4-background-Webs").style.display = "none";
                }else{
                    let NoMoreOption4 = 1;
                    if(NoMoreOption4 == 1){

                        document.getElementById("Sm4-background-All").style.display = "none";
                        document.getElementById("Sm4-background-UX_UI").style.animation = "navTranstion3_Negative 0.5s";
                        document.getElementById("Sm4-background-UX_UI").style.display = "flex";
                        document.getElementById("Sm4-background-All").style.display = "none";

                    }
                }
            }
        };
        
        if(document.getElementById("Sm4-background-UX_UI").style.display == "flex"){
            document.getElementById("Web").style.display = "none";
            document.getElementById("Web2").style.display = "none";
            document.getElementById("Web3").style.display = "none";
            document.getElementById("Web4").style.display = "none";
            document.getElementById("NoContent").style.display = "flex";
        }
    };



    return(
        <div className="Section-main4-div1">
            <h1>My Recent Works</h1>
            <nav>

                <button id="All" onClick={All} className="All" >
                    <span id="Sm4-background-All"></span>
                    <span>All</span>
                </button>

                <button id="Apps" onClick={Apps}  className="Apps" >
                    <span id="Sm4-background-Apps"></span>
                    <span>Apps</span>
                </button>

                <button id="Webs" onClick={Webs} className="Webs" >
                    <span id="Sm4-background-Webs"></span>
                    <span>Webs</span>
                </button>

                <button id="UX_UI" onClick={UX_UI} className="UX-UI" >
                    <span id="Sm4-background-UX_UI">
                    </span><span>UX/UI</span>
                </button>

            </nav>
        </div>
    )
}
export default Section_main4