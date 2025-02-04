import SectionDm5 from "./Data/section-main5";
import SectionDm5P2 from "./Data/Section-main5P2";
import "./style/Section_main5.css"

const Section_main5 = () => {
    //Subs componentes SubDiv1 y Div1.
    const SubDiv1 = (props) => {
        return(
                <div className="Card-Experience">
                    <div className="Card-Experience-back">
                    </div>

                    <div className="Card-Experience-Noback">
                    <h2>{props.Time}</h2>
                    <h1>{props.Position}</h1>
                    <p>{props.place}</p>
                    </div>

                </div>
        )
    };

    function Div1(){
        
        const Divlist = SectionDm5.map( SM5 => {
            return(
                <SubDiv1 Time = {SM5.time} Position = {SM5.position} place = {SM5.place} />
            )
        });

        return(
            <div className="Section-main-div1">
                <div className="H1">
                    <h1><i class='bx bxs-chip'></i>My Experience</h1>
                </div>
                {Divlist}
            </div>
        );
    };

    //Subs Componentes SubDiv2 y Div2.
    const Subdiv2 = (props) => {
        return(
            <div className="Card-Education">
                <div className="Card-Education-back">

                </div>
                    <div className="Card-Education-Noback">
                    <h2>{props.Time}</h2>
                    <h1>{props.title}</h1>
                    <p>{props.place}</p>
                    </div>
            </div>
        )
    };


    const Div2 = () => {

        const Divlist = SectionDm5P2.map( SM5P2 => {
            return(
                <Subdiv2 Time = {SM5P2.time} title = {SM5P2.title} place = {SM5P2.place} />
            )
        })

        return(
            <div className="Section-main-div2">
                <div className="H1" >
                      <h1><i class='bx bx-crown'></i>My Education</h1>
                </div>
                {Divlist}
            </div>
            
        )
    };
    
    
    return(

        <section className="Section-main5" id="Section-main5">
            <Div1/>
            <Div2/>
        </section>
    );
};
export default Section_main5