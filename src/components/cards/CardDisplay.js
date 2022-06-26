import React from 'react';
import './CardDisplay.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='about'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/automaticDoors/AutoSwingDoors.jpeg'
              text='Description goes here. Description goes here. Description goes here. Description goes here. '
              label='Job Name'
              path='#'
            />
            <CardItem
              src='images/hollowMetalDoors/steelDoor1.jpeg'
              text='Description goes here. Description goes here. Description goes here. Description goes here.'
              label='Job Name'
              path='#'
            />
            <CardItem
              src='images/commercialRollUpDoors/fireRatedHeavyDutyRollingSteelDoors.jpeg'
              text='Description goes here. Description goes here. Description goes here. Description goes here.'
              label='Job Name'
              path='#'
            />
          </ul>





        </div>
      </div>
    </div>
  );
}

export default Cards;