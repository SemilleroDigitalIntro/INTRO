import logo from "../assets/colorful-eagle-head-logo-pop-art-style-eagle-face-sticker-pastel-cute-colors-ai-generated-png.webp"

function Header(){
    return(
        <section className="Header-section">
                    <div className="Logo">
                        <img src={logo} alt="Logo" />
                        <h1>
                            Logo
                        </h1>
                    </div>
                    <div>
                        <nav>
                            <h3>Home</h3>
                            <h3>Services</h3>
                            <h3>Stores Proyects</h3>
                            <h3>Aboutt Us</h3>
                        </nav>
                    </div>
        </section>
    )
}
export default Header