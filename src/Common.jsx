
import React from 'react';
import Web from "./pictures/veg2.jpg";
import web from "./pictures/veg.jpg";
import {NavLink} from 'react-router-dom';

const  Common = (props) =>
{
  return(
    <>
<section id="Header" className="d-flex align-item-centre ">
<div className= "container-fluid ">
            <div className="row "> 
                <div className="col-10 mx-auto">
                  <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h2>
                    Get fresh vegitables from us <strong className='brand-name'> Doon Vegitable Cart</strong>
                  </h2>
                  <h3 className ="my-3">
                    {props.name}
                    Stay safe at Home.
                  </h3>
                  <div className="mt-50">
                    <NavLink to={props.visit} className="btn btn-primary btn-sm">
                     {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div  className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src = {props.imgsrc}  className="img-fluid animated" alt="Common img"/>
                </div>
                </div>
                
                </div>
            </div>
        </div>
</section>
</>

  );
};

export default Common;