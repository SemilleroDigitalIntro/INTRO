import SHeaderData from './SHeaderData';
import "./SHeader.less";
import { useState } from 'react';
import { flushSync } from 'react-dom';


function SHeader() {


  const Nav = (props) =>{
    return(
      <a href={props.link}>{props.title}</a>
    )
  };

  const Datalist = SHeaderData.map( SHD1 => {
    return(
      <Nav link = {SHD1.link} title ={SHD1.title}/>
    )
  });

  

  var [Menu,SetMenu] = useState(true);
  var [SearchBar, SetSearchBar] = useState(false);
  
  const MenuShow = () =>{
    
    SetMenu(!Menu);
     Menu ? document.querySelector(".SHeader__div3_Nav").style.display = "flex" : document.querySelector(".SHeader__div3_Nav").style.display = "none";
  };

  
  const SearchBarShow = () =>{
    
    SetSearchBar(!SearchBar);

    if(SearchBar == false){
      document.querySelector(".SHeader1__div2_Nav").style.display = "none"; 
    document.querySelector(".SHeader1__div2_input").style.display ="flex";
    document.querySelector(".SHeader1__div2_btn1").style.display ="flex";
    document.querySelector(".SHeader1__div2_btn2").style.display ="none";
    }else if(SearchBar == true){
      document.querySelector(".SHeader1__div2_Nav").style.display = "flex";
      document.querySelector(".SHeader1__div2_input").style.display ="none";
      document.querySelector(".SHeader1__div2_btn1").style.display ="none";
      document.querySelector(".SHeader1__div2_btn2").style.display ="flex";
    }
    

  };

  const SubmitEventF = (event) =>{
    event.preventDefault()
  }

  const NotShow =() =>{
    document.querySelector(".SHeader__div3_Nav").style.display = "none";
  }


   
    return (
      <section className='SHeader1'>
        <div className='SHeader1__div1'>
        <i class='bx bx-home' ></i>
        <h1>AllState</h1>
        </div>

        <div className='SHeader1__div2'>

    
          <form onSubmit={SubmitEventF} className='SHeader1__div2_input' style={{display: "none",}}>
          
          <div className='SHeader1__div2_btn1' style={{display: "none",}} >
            <button onClick={SearchBarShow} ><i class='bx bx-x' ></i></button>
          </div>

            <input type="text" placeholder='Buscar' />

            <div>
            <button type="submit"><i class='bx bx-search'></i></button>
            </div>
          </form>
          
          <nav className='SHeader1__div2_Nav'>
             {Datalist}
          </nav>

          <div className='SHeader1__div2_btn2'>
            <button onClick={SearchBarShow}><i class='bx bx-search'></i></button>
          </div>

        </div  >
        <div className='SHeader1__div3'>
          <div >
          <button className='SHeader1__div3_btn' onClick={MenuShow}>other services<i class='bx bx-chevron-left bx-rotate-270' ></i></button>
          <nav style={{display: "none"}} onPointerLeave={NotShow} className='SHeader__div3_Nav'>
            <a href="">services 1</a>
            <a href="">services 2</a>
            <a href="">services 3</a>
            <a href="">services 4</a>
          </nav>
          </div>
          <div className='div1'>
            <button className='btn'><i class='bx bxs-sun'></i></button>
            <button>Contact Us</button>
          </div>
        </div>
       

      </section>
    )
  
};
export default SHeader;
