import React,{useState} from 'react'
import Drone from '../assets/drone1.jpg'
import Drone1 from '../assets/drone2.jpg'
import Drone2 from '../assets/drone3.jpg'

const Hero = () => {

    const toggleNav=()=>{
        
       
        const navlinks=document.querySelector(".nav-content")
        navlinks.classList.toggle("nav-active")
        const burger=document.querySelector('.burger')
        burger.classList.toggle('toggle')
}







   
  
   


    return (
        <div className="hero">
            <div className="hero-content">
                <div className="logo1">
                <div className="logo">
                    <h3 style={{color:"#fff",fontWeight:"1000"}}>SQUARE</h3>

                    
                </div>
                <div id="burger" className="burger" onClick={toggleNav}>
                        <div className="line1" ></div>
                        <div className="line2" ></div>
                        <div className="line3" ></div>
                    </div>
                </div>
                

                <div className="content">
                    <h2>The new GPS by drones - <br/>VISUAL POSITIONING SYSTEM</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum assumenda mollitia ipsum, soluta reprehenderit aliquid amet reiciendis amet consectetu.
                    </p>

                </div>

            </div>
            <div id="nav-content" className='nav-content'>
                <div className="nav1" >
                    <a href='/'>Overview</a>
                    <a href='/'>Demos</a>
                    <a href='/'>Pages</a>
                    <a href='/'>Docs</a>
                    <a href='/'>BUY NOW</a>
                </div>
                
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner nav-img">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Drone} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Drone1} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Drone2} alt="Third slide"/>
    </div>
  </div>
  <div className="icons">
  <i class="fas fa-arrow-left fa-2x"> <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> 
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a> </i>
  <i class="fas fa-arrow-right fa-2x"><a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a></i>
  </div>
</div>




</div>
            
            
        </div>
    )
}

export default Hero

