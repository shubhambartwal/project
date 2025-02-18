import React from 'react';

import Web from '../src/pictures/veg3.jpg';
import { NavLink } from 'react-router-dom';
const  Card = ( props) =>
{
  return(
    <>
    <div className="card" >
  <img src={props.imgsrc} className="card-img-top" alt="card image" />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink >
  </div>
</div> 
    </>
  )
};

export default Card;