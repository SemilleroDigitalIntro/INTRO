import React, { Component } from 'react';
import TripDreams from './data/SM2_TripDreams';
import "./style/SectionM2.css";

const SM2_div2_div1 = (props) =>{
    return(
        <li>{props.Content}</li>
    )
};

const Triplist = TripDreams.map( TD => {
    return(
        <SM2_div2_div1 Content = {TD.content}/>
    )
})

var idPhoto1 = "idPhoto1";
var idPhoto2 = "idPhoto2";
var idPhoto3 = "idPhoto3";
var srcPhoto1 = "src/Home/Assets/main/mountain-4242391_1280.jpg";
var srcPhoto2 = "src/Home/Assets/main/mountain-5649827_1280.jpg";
var srcPhoto3 = "src/Home/Assets/main/nature-6817376_1280.jpg";
var altPhoto1 = "altPhoto1";
var NumberPhoto;

const MousePhoto = () =>{
  if(NumberPhoto == 2){
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto1").style.zIndex = "1";
  }else if(NumberPhoto == 3){
    document.getElementById("idPhoto3").style.opacity = "1";
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto1").style.zIndex = "1";
  };
};
const MausePhotoL = () =>{
  if(NumberPhoto == 1){
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto1").style.zIndex = "2";
  }else if(NumberPhoto == 2){
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto1").style.opacity = "0.7";
    document.getElementById("idPhoto1").style.zIndex = "1";
  }else if(NumberPhoto == 3){
    document.getElementById("idPhoto3").style.opacity = "1";
    document.getElementById("idPhoto1").style.opacity = "0.7";
    document.getElementById("idPhoto1").style.zIndex = "1";
  };
};
const MousePhoto2 = () =>{
  if(NumberPhoto == 1){
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto2").style.zIndex = "1";
  }else if(NumberPhoto == 3){
    document.getElementById("idPhoto3").style.opacity = "1";
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto2").style.zIndex = "1";
  }else if(NumberPhoto == 2){
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto2").style.zIndex = "2";
  }else{
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto2").style.zIndex = "1";
  };
};
const MausePhotoL2 = () =>{
  if(NumberPhoto == 1){
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto2").style.opacity = "0.7";
    document.getElementById("idPhoto2").style.zIndex = "1";
  }else if(NumberPhoto == 2){
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto2").style.zIndex = "2";
  }else if(NumberPhoto == 3){
    document.getElementById("idPhoto3").style.opacity = "1";
    document.getElementById("idPhoto2").style.opacity = "0.7";
    document.getElementById("idPhoto2").style.zIndex = "1";
  }else{
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto2").style.opacity = "0.7";
    document.getElementById("idPhoto2").style.zIndex = "1";
  }
};
const MousePhoto3 = () =>{
  if(NumberPhoto == 1){
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto3").style.opacity = "1";
    document.getElementById("idPhoto3").style.zIndex = "1";
  }else if(NumberPhoto == 2){
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto3").style.opacity = "1";
    document.getElementById("idPhoto3").style.zIndex = "1";
  }else{
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto3").style.opacity = "1";
    document.getElementById("idPhoto3").style.zIndex = "1";
  };
};
const MausePhotoL3 = () =>{
  if(NumberPhoto == 1){
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto3").style.opacity = "0.7";
    document.getElementById("idPhoto3").style.zIndex = "1";
  }else if(NumberPhoto == 2){
    document.getElementById("idPhoto2").style.opacity = "1";
    document.getElementById("idPhoto3").style.opacity = "0.7";
    document.getElementById("idPhoto3").style.zIndex = "1";
  }else if(NumberPhoto == 3){
    document.getElementById("idPhoto3").style.opacity = "1";
    document.getElementById("idPhoto3").style.zIndex = "2";
  }else{
    document.getElementById("idPhoto1").style.opacity = "1";
    document.getElementById("idPhoto3").style.opacity = "0.7";
    document.getElementById("idPhoto3").style.zIndex = "1";
  }
  
};
const Clickphoto1 = () =>{
  let idp2 = document.getElementById("idPhoto2");
  let idp1 = document.getElementById("idPhoto1");
  let idp3 =  document.getElementById("idPhoto3");

    idp1.style.position = "absolute";
    idp1.style.zIndex = "2";
    idp1.style.opacity = "1";
    idp1.style.height = "400px";
  
   idp2.style.position = "relative";
   idp2.style.zIndex = "1";
   idp2.style.height = "300px";
   idp2.style.opacity = "0.7";
  
   idp3.style.position = "relative";
   idp3.style.zIndex = "1";
   idp3.style.height = "300px";
   idp3.style.opacity = "0.7";

   NumberPhoto = 1;
   if(NumberPhoto = 1){
    document.getElementById("B-carga").style.width = "35%";
   }
  
};
const Clickphoto2 = () => {
let idp2 = document.getElementById("idPhoto2");
let idp1 = document.getElementById("idPhoto1");
let idp3 =  document.getElementById("idPhoto3");

 
  idp2.style.position = "absolute";
  idp2.style.zIndex = "2";
  idp2.style.opacity = "1";
  idp2.style.height = "400px";

 idp1.style.position = "relative";
 idp1.style.zIndex = "1";
 idp1.style.height = "300px";
 idp1.style.opacity = "0.7";

 idp3.style.position = "relative";
 idp3.style.zIndex = "1";
 idp3.style.height = "300px";
 idp3.style.opacity = "0.7";

 NumberPhoto = 2;

 if(NumberPhoto = 2){
  document.getElementById("B-carga").style.width = "70%";
 }
};
const Clickphoto3 = () => {
  let idp2 = document.getElementById("idPhoto2");
  let idp1 = document.getElementById("idPhoto1");
  let idp3 = document.getElementById("idPhoto3");
  
   
    idp3.style.position = "absolute";
    idp3.style.zIndex = "2";
    idp3.style.opacity = "1";
    idp3.style.height = "400px";
  
   idp2.style.position = "relative";
   idp2.style.zIndex = "1";
   idp2.style.height = "300px";
   idp2.style.opacity = "0.7";
  
   idp1.style.position = "relative";
   idp1.style.zIndex = "1";
   idp1.style.height = "300px";
   idp1.style.opacity = "0.7";

   NumberPhoto = 3;

   if(NumberPhoto = 3){
    document.getElementById("B-carga").style.width = "100%";
   }
  
  };



  const Scrolling = () =>{

   

    document.getElementById("SectionHeader1").style.display = "flex";
    document.getElementById("SectionHeader1").style.transition = "300ms";
    document.getElementById("SectionHeader1").style.animation = "h1 1s"
    document.getElementById("SM1-NAV").style.display = "none";
    
};


export default class SectionMain2 extends Component {
  render() {
    return (
      <section onPointerEnter={Scrolling} className='SectionMain2' id='SectionMain2'>
        <div className='SectionMain2-div1'>
            <h1>5 reasons why you should visit new zealand</h1>
        </div>

        <div className='SectionMain-div2'>
            <div className='SM2-div2-div1'>

                <div>

                <h1>trip of your Dream</h1>
                <ul>
                    {Triplist}
                </ul>

                </div>

                <div>
                    <button >Book A tour</button>
                    <span id='pepe'></span>
                </div>
            </div>
            <div className='SM2-div2-div2'>
              <div className='SM2-div2-div2-photos' >
              <img onClick={Clickphoto1} onMouseOver={MousePhoto} onMouseLeave={MausePhotoL} src={srcPhoto1} alt={altPhoto1} id={idPhoto1} />
                <img onClick={Clickphoto2}  onMouseOver={MousePhoto2} onMouseLeave={MausePhotoL2} src={srcPhoto2} alt={altPhoto1} id={idPhoto2} />
                <img onClick={Clickphoto3} onMouseOver={MousePhoto3} onMouseLeave={MausePhotoL3} src={srcPhoto3} alt={altPhoto1} id={idPhoto3} />
              </div>
                <div className='barra-de-carga'>
                  <div id='B-carga'>

                  </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
};

