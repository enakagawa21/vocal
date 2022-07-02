import { useState, useEffect } from "react";
import "./Hero.css";
import { heroData } from "./HeroData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const slideLength = heroData.length;

  const autoPlay = true;
  let slideInterval;
  let IntervalTime = 10000;

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
                  <button className='btn'>{slide.buttonTxt}</button>
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

