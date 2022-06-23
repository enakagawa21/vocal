import React from 'react'
import './Doors.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { cardData } from './Data';
import Slider from 'react-slick'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';


function Doors() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
 
<div className='doors' id='services'>

<div className='header'>
  <h1>SERVICES</h1>
</div>
<div className='buttons'>

<div className='prev-btn'>
<FaAngleLeft />
</div>
<div className='next-btn'>
  <FaAngleRight />
  </div>

</div>

<Slider{...settings}>

    {cardData.map(item=>(
<div className='card'>
  <div className='card-top'>
    <img src = {item.linkImg}/>
    <h3>{item.title}</h3>
  </div>
  <div className='card-bottom'>
    <p className='description'>{item.description}</p>
  </div>
</div>

  ))}
</Slider>

  </div>
  )
}
export default Doors