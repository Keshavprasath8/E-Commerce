import React from 'react'
import Home from './Home'
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'

const Hero = () => {
  return (
    <div>


    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='images' src="https://www.reliancedigital.in/medias/Laptop-Banners-RD-D-hp-240805.jpg?context=bWFzdGVyfGltYWdlc3wxMjI3Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDU0L2g4NC8xMDE4MTE2OTM0ODYzOC5qcGd8Y2RlM2U5N2JiMjNmMTcxN2M2NDAzYWIzNDY3ZmYyMTVjZThlNjMyYTEyMzE1MWQzN2I2YWUxNzVhYmE3ODdmOQ" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='images' src="https://www.reliancedigital.in/medias/Apple-AirPods-Banner-1365x260.jpg?context=bWFzdGVyfGltYWdlc3w5NDIxN3xpbWFnZS9qcGVnfGltYWdlcy9oNmEvaDEwLzEwMjI3OTkxNTc2NjA2LmpwZ3wxNTk1YmNmZDhmZWZlYjI3N2Q1OWYyZWI1MWM1MjViZWIxOGY3YzkyNGQwZjZkOWQ5MTc1OTI1Mzk5ZTE4MzJlw" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className='images' src= "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dd484f1b19c67712.jpg?q=20" alt="" />
      </Carousel.Item>
    </Carousel>

        <Home/>
    </div>
    
  )
}

export default Hero