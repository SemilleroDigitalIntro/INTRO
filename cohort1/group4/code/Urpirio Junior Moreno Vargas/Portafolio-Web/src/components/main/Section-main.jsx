import SectionIMG from "./Data/SectionIMG";
import  "./style/section_main.css";

const Section_main = () =>{

    const imgDev = SectionIMG.map( Dev => {
        return <img src={Dev.ImagenDev} alt="Foto de Desarrollador" />
    })

    const imgDev2 = SectionIMG.map( Dev => {
        return <img src={Dev.ImagenDev} alt="Foto de Desarrollador" id="imgDev2" />
    })

    return(
        <section className="Section-main">
            <div className="S-main-div1">
                <div>
                    <h2>I am Urpirio Junior</h2>
                    <h1>Web Developer + UX Designer</h1>
                    {imgDev2}
                    <p>I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
                </div>
                <div className="S-main-div1-div2">
                    <a href="src/components/main/Data/Urpirio Junior Moreno Vargas Cv (1) (1).pdf" download="Urpirio Junior Moreno Vargas Cv (1) (1).pdf"><button>Download CV<i class='bx bx-download'></i></button></a>
                    <div>
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-linkedin' ></i>
                    <i class='bx bxl-github' ></i>
                    </div>
                </div>
            </div>
            <div className="S-main-div2">
                {imgDev}
            </div>
        </section>
    )
}

export default Section_main