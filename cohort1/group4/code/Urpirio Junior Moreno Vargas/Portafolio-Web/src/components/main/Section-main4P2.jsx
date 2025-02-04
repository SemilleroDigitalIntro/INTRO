
const Section_main4P2 = ({imagen,imgName,link,summary,pageName,className = "Cards-pages",id}) =>{
    return(
        <div id={id} className={className}>
            <img src={imagen} alt={imgName} />
            <a href={link} className="Cards-pages-div1">
                <div>
                <h1>{pageName}</h1>
                <p>{summary}</p>
                </div>
                <i class='bx bx-left-arrow-alt'></i>
            </a>
        </div>
    )
}
export default Section_main4P2