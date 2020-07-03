import React from 'react';
import Common from './Common';
import {NavLink} from 'react-router-dom';
import Web from "./pictures/veg.jpg";
const  About = () =>
{
  return(
    <>
<Common
name="  Get best quality vegetables"
imgsrc={Web}
visit="/Contact"
btnName="Contact Us"

/>
    </>
  )
};

export default About;