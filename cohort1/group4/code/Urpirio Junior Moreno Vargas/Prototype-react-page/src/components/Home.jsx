import "../style/Home.css";
import Header from "./Header";
import Section from "./Main.jsx";
import datos from "../Data/Datos1.jsx"
import Footer from "./footer.jsx";

function Home(){
    const datos_main_section1 = datos.map( Datosmain1 => {
        return <Section titulo ={Datosmain1.titulo} Contenido={Datosmain1.contenido} />
    })
    return(
        <section>
            <header>
                <Header/>
            </header>
            <main>
                {datos_main_section1}

            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
    )
}
export default Home