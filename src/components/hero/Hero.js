import React from 'react'
import { Button } from '../button/Button'
import './Hero.css'

function Hero() {
  return (
    <>
      <div className='hero-container'>

      <div className='hero-img-container'>
					<a
						href="#"
						onClick={() => window.scrollTo(0, 0)}
						className="hero-img"
					>
						<img
							src="./images/logo-img-large.svg"
							alt="E-logo"
              className='hero-img'
						/>
					</a>
				</div>
          <h2>Proudly Serving All of California</h2>
  



      </div>
    </>
  )
}

export default Hero
