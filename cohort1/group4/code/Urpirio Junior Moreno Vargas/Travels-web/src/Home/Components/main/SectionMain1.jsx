import "./style/SectionM1.css";
import 'boxicons';
import InfoNav from "./data/SM1_InfoNav";
import Plantrip from "./data/SM1_PlanTrip";
const SectionMain1 = () =>{
    
    //navegador interno dentro de la sectionMain1
    const Nav = (nav) =>{
        return(
            <a href={nav.link}>{nav.name}</a>
        )
    };

    const Navlist = InfoNav.map( N => {
        return(
            <Nav link ={N.link} name = {N.name} />
        )
    })
    //Contenido que va dentro de los rectangulos Plan trip
    const SectionMain1_div2 = (SM1) =>{
        return(
            <div className="SectionMain1-div3-divs">
                <i class='bx bx-map' ></i>
                    <div>
                    <h3>{SM1.place}</h3>
                    <p className="SM1-P">Plan a trip<i class='bx bxs-right-arrow-alt'></i></p>
                    </div>
            </div>
        )
    }

    const Plantriplist = Plantrip.map(P =>{
        return(
            <SectionMain1_div2 place = {P.place}/>
        )
    })

    const scrolling = () =>{
        document.getElementById("SectionHeader1").style.display = "none";
    document.getElementById("SectionHeader1").style.transition = "300ms";
    document.getElementById("SM1-NAV").style.animation = "h1 1s"
    document.getElementById("SM1-NAV").style.display = "flex";
    };

    return(
        <section onMouseEnter={scrolling}  className="SectionMain1" id="SectionMain1">
            <nav id="SM1-NAV">
                {Navlist}
            </nav>
            <div className="SectionMain1-div1">
                <div className="SM1-div1-div1" >
                <i class='bx bxl-instagram-alt' id="SM1-logo-instagram" ></i>
                <i class='bx bxl-facebook-circle' id="SM1-logo-facebook" ></i>
                <i class='bx bxl-twitter' id="SM1-logo-twitter"></i>
                </div>
                <div className="SM1-div1-div2">
                    <h1>Travel</h1>
                </div>
                <div className="SM1-div1-div3">
                    <button id="SM1-btn1"><span></span></button>
                    <button id="SM1-btn2"><span></span></button>
                    <button id="SM1-btn3"><span></span></button>
                </div>
            </div>
            <div className="SectionMain1-div2">
                <h2>plan your experience</h2>
            </div>
            <div className="SectionMain1-div3">
                {Plantriplist}
            </div>
        </section>
    )
};
export default SectionMain1;