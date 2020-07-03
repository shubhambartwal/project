import React from 'react';
import Card from './Card';
import sdata from './sdata';
const  Service = () =>
{
  return(
    <>
<div className="my-5">
  <h1 className='text-center'> Our Services 
  </h1>
</div>
<div className= "container-fluid ">
            <div className="row ">
                <div className="col-10 mx-auto">
                  
                   <div className ="col-md-3 col-10 mx-auto ">
                   <div className='row' gy-4>
                   {
                     sdata.map((val,ind)  =>
                     {
                       return <Card key={ind}
                       imgsrc={val.imgsrc}
                      title={val.title}              
                     />
                     })
                   }

                    </div>

                  </div>
                </div>
            </div>
        </div>
		
    </>
  )
};

export default Service;