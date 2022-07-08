import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';



function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get a quote today!!!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h4>About Us</h4>
            <a href='/'>Testimonials</a>
            <a href='/'>Careers</a>
          </div>

          <div class='footer-link-items'>
            <h4>Contact Us</h4>
            <a href='/'>Contact</a>
            <a href='/'>Support</a>
          </div>
        
          <div class='footer-link-items'>
            <h4>Social Media</h4>
            <a href='/'>Instagram</a>
            <a href='/'>Facebook</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <a href='/' className='social-logo'>
            <img src="./images/logo-img.png" alt="E-logo" className="navbar-icon" />
            </a>
          </div>
          <small className='website-rights'>BUILT BY E . NAKAGAWA © 2022</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </a>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </a>
            <a
              className='social-icon-link'
              to='https://www.linkedin.com/in/enakagawa21/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;