import { useState, useEffect } from "react";
import "./Hero.css";
import { heroData } from "./HeroData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const slideLength = heroData.length;

  const autoPlay = true;
  let slideInterval;
  let IntervalTime = 9999;

  const nextSlide = () => {
    setcurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setcurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, IntervalTime);
  }

  useEffect(() => {
    setcurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoPlay) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className='hero-slider'>
      <div>
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
      </div>
      <div>
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />
      </div>

      {heroData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={slide.id}>
            {index === currentSlide && (
              <div>
                <img src={slide.linkImg} alt={slide.alt} />
                <div
                  className={
                    slide.lightTxt === true ? "white-content" : "content"
                  }
                  key={slide.id}>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <hr />
                  <button className='btn'>Get Started</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Hero;

//
//
//
//

// slider using react slick

// import React from "react";

// import "./Hero.css";

// import Slider from "react-slick";
// import { useRef } from "react";
// import { heroData } from "./HeroData";

// function Hero() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 5000,
//     autoplay: true,
//     fade: true,
//     variableWidth: false,
//     arrows: true,
//     pauseOnHover: false,
//   };

//   const heroSliderRef = useRef(null);
//   console.log(heroSliderRef.current);

//   return (
//     <div>
//       <Slider ref={heroSliderRef} {...settings}>
//         {heroData.map((item) => (
//           <div className='hero-container' key="id">
//             <div className='hero-text-wrapper'>
//               <h2 className='hero-title' key="title">{item.title}</h2>
//               <p className='hero-tagLine'>{item.tagLine}</p>
//             </div>
//             <div className='hero-img>'>
//               <img src={item.linkImg} />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Hero;
