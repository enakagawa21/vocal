import React from 'react';
import './CardDisplay.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='about'>
      <h1>Our Work</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/img-5.jpg'
              text='Description goes here. Description goes here. Description goes here. Description goes here. '
              label='Job 1'
              path='#'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Description goes here. Description goes here. Description goes here. Description goes here.'
              label='Job 2'
              path='#'
            />
          </ul>


          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Description goes here.'
              label='Job 3'
              path='#'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Description goes here.'
              label='Job 4'
              path='#'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Description goes here.'
              label='Job 5'
              path='#'
            />
          </ul>


        </div>
      </div>
    </div>
  );
}

export default Cards;