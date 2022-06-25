import React from 'react'

import './Hero.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useRef } from "react";
import { heroData } from "./HeroData";




function Hero() {
	
	  const settings = {
		dots: false,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 5000,
  		autoplay: true,
  		fade: true,
		variableWidth: false,
		arrows:true,

	  };

	  const heroSliderRef = useRef(null);
	  console.log(heroSliderRef.current);

	  return (
		<div>
		  <Slider ref={heroSliderRef} {...settings}>
        {heroData.map((item) => (
          <div className="hero-container">
            <div className="hero-img">
              <img src={item.linkImg} />
  
            </div>
          </div>
        ))}
      </Slider>
		</div>
	  );
	}
  
export default Hero