import React from 'react';
import Web from "./pictures/veg2.jpg";
import {NavLink} from 'react-router-dom';
import Common from './Common';

const  Home = () =>
{
  return(
    <>
<Common  
name="We will provide you all vegitables from local market."
imgsrc ={Web}
visit ="/Service"
btnName="Get Started"
/>
</>
  );
};

export default Home;