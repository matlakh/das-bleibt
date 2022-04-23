import React, { Fragment } from 'react'

import ImageTeaser from '../components/MainPage/ImageTeaser/ImageTeaser';
import OurPhilosophy from '../components/MainPage/Philosophy/Philosophy';
import RoomTypes from '../components/MainPage/RoomTypes/RoomTypes';
import Slider from '../components/MainPage/Slider/Slider';


function Main() {
  return (
    <Fragment>
    
      <Slider></Slider>
      <RoomTypes></RoomTypes>
      <ImageTeaser></ImageTeaser>
      <OurPhilosophy></OurPhilosophy>

    </Fragment>
  );
}

export default Main;