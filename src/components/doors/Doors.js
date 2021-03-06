import React from "react";
import "./Doors.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardData } from "./Data";
import Slider from "react-slick";
import { useRef } from "react";

function Doors() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  console.log(sliderRef.current);

  return (
    <div className='doors' id='services'>
      <div className='header'>
        <h2>Services</h2>

        <div className='buttons'>
          <div
            className='prev-btn'
            onClick={() => sliderRef.current.slickPrev()}>
            Prev
          </div>
          <div
            className='next-btn'
            onClick={() => sliderRef.current.slickNext()}>
            Next
          </div>
        </div>
          <hr></hr>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {cardData.map((item) => (
          <div className='card' >
            <div className='card-top'>
              <img src={item.linkImg} />
            </div>
            <div className='card-bottom'>
              <h3>{item.title}</h3>
              <ul>
              <li className='description'>{item.desc1}</li>
              <li className='description'>{item.desc2}</li>
              <li className='description'>{item.desc3}</li>
              <li className='description'>{item.desc4}</li>
              <li className='description'>{item.desc5}</li>
              <li className='description'>{item.desc6}</li>
              <li className='description'>{item.desc7}</li>


              </ul>
              <button url='espn.com' className="doors-btn">Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Doors;
