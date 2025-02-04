import React, { Component } from 'react'
import ReviewsData from './data/SM5_Reviews';
import "./style/SectionM5.css";

export default class SectionMain5 extends Component {
  render() {


    const ReviewC = (props) =>{
        return(
            <div className='SectionMain5-div2-div1'>
                <div className='SM5-Review-Back'>

                </div>
                <img src={props.img} alt={props.imgDescription} />
                <div className='SM5-Review-GComments'>
                  <span>
                    <h3>{props.name}</h3>
                    </span>
                  <div className='SM5-Review-Comment'>
                    <h4>{props.date}</h4>
                    <p>{props.comment}<span>..<a href="">Read more</a></span> </p>
                  </div>

                </div>
            </div>
        )
    };

    const ReviewsList = ReviewsData.map( 
        RV =>{
            return(
                <ReviewC img = {RV.Image} imgDescription = {RV.Dimage} name ={RV.name} date = {RV.date} comment = {RV.Comment} id = {RV.id}/>
            )
        }
    );

    var X;
    const NextCard = () =>{
      let Scroll =  document.querySelector(".SectionMain5-div2");

        if (X == undefined){
            X = 350;
            Scroll.scrollTo(350,0)
        }else if(X == 350){
            X = 700;
            Scroll.scrollTo(700,0)
        }else if(X == 700){
          X = undefined;
            Scroll.scrollTo(0,0)
        }else{
          X = 350;
          Scroll.scrollTo(350,0)
        };


    };
    
    const NextCardL = () =>{
      let Scroll =  document.querySelector(".SectionMain5-div2");
      if ( X ==  undefined){
        X = 700;
        Scroll.scrollTo(700,0)
      }else if( X == 350){
        X = undefined;
        Scroll.scrollTo(0,0)
      }else if(X == 700){
        X = 350;
        Scroll.scrollTo(350,0)
      };
    };


    const Scrolling = () =>{

   

      document.getElementById("SectionHeader1").style.display = "flex";
      document.getElementById("SectionHeader1").style.transition = "300ms";
      document.getElementById("SectionHeader1").style.animation = "h1 1s"
      document.getElementById("SM1-NAV").style.display = "none";
      
  };

    return (
      <section onPointerOver={Scrolling} className='SectionMain5' id='SectionMain5'>
        <div className='SectionMain5-div1'>
            <h1>Reviews</h1>
            <div>

            </div>
        </div>
        
        <div className='SectionMain5-div2'>
            <div style={{
                position: "absolute",
                zIndex: "3",
                width: "90%",
                display: "flex",
                justifyContent: "space-between",

            }} className='SM5-div2-btn'>
                <button onClick={NextCardL} ><i class='bx bxs-chevron-right bx-rotate-180' ></i></button>
              <button onClick={NextCard}><i class='bx bxs-chevron-right' ></i></button>
            </div>
            {ReviewsList}
            
        </div>
      </section>
    )
  }
};

