import React from 'react';
import { Button } from '../button/Button';
import './Services.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';


function Services() {
  return (
    <IconContext.Provider value={{ color: '#000', size: 84 }}>
      <div className='pricing__section' id='services'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Services</h1>


          <div className='pricing__container'>
            <a href='#' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h4>Doors</h4>
                <ul className='pricing__container-features'>
                  <li>Overhead Doors</li>
                  <li>Commercial RolUp Doors</li>
                  <li>Hollow Metal & Wood Doors</li>
                  <li>Glass Entry Doors</li>
                  <li>Gates & Grilles</li>
                  <li>Access Control</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Learn More
                </Button>
              </div>
            </a>
            
            <a href='#' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h4>Dock Equipment</h4>
                <ul className='pricing__container-features'>
                  <li>Hydraulic & Manual</li>
                  <li>Edge Mount</li>
                  <li>Loading Dock Accessories</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </a>

            <a href='#' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h4>Specialty</h4>
                <ul className='pricing__container-features'>
                  <li>Hangar Doors</li>
                  <li>Air Curtains & Fly fans</li>
                  <li>Specialty Doors</li>
                  <li>Securtiy Systems</li>
                  <li>High Speed Doors</li>
                  <li>Specialty Doors</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </a>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Services;