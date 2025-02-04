import SectionDH1 from "./Data/SectionHeader";
import "./style/Section_1H.css"

const Section_1H = () => {

    const headerlist = SectionDH1.map( H => {
        return <img src={H.Logo}/>
    })

    return(
        <section className="Section-header1">
            <div className="S-header-div1">
            {headerlist}
            <h1>UrpirioDev</h1>
            </div>
            <div className="S-header-div2">
                <nav>
                    <a href="#Section-main3">Services</a>
                    <a href="#Section-main4">Works</a>
                    <a href="#Section-main5">Resume</a>
                    <a href="#Section-main6">Skills</a>
                    <a href="#Section-main7">Testimonials</a>
                    <a href="#Section-main8">Contact</a>
                </nav>
                <div>
                    <a href=""><button>Hire me!</button></a>
                </div>
            </div>
        </section>
    )
}
export default Section_1H