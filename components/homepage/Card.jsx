import React from 'react';

const Card = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 gap-2 mx-4 md:grid-cols-4 md:gap-6'>

            {/* card-1  */}
            <div className="card card-border bg-base-100 my-4 ">
                
  <div className="card-body text-center my-4 ">
    <h2 className='font-semibold text-[32px] text-[#244D3F] '>10</h2>
    <p className="font-medium text-[18px] text-[#64748B]">Total Friends</p>
   
  </div>
</div>
            {/* card-2  */}
            <div className="card card-border bg-base-100 my-4 ">
                
  <div className="card-body text-center my-4 ">
    <h2 className='font-semibold text-[32px] text-[#244D3F] '>3</h2>
    <p className="font-medium text-[18px] text-[#64748B]">On Track</p>
   
  </div>
</div>
            {/* card-3  */}
            <div className="card card-border bg-base-100 my-4 ">
                
  <div className="card-body text-center my-4 ">
    <h2 className='font-semibold text-[32px] text-[#244D3F] '>6</h2>
    <p className="font-medium text-[18px] text-[#64748B]">Need Attention</p>
   
  </div>
</div>
            {/* card-4  */}
            <div className="card card-border bg-base-100 my-4 ">
                
  <div className="card-body text-center my-4 ">
    <h2 className='font-semibold text-[32px] text-[#244D3F] '>12</h2>
    <p className="font-medium text-[18px] text-[#64748B]">Interactions This Month</p>
   
  </div>
</div>
            </div>
        </div>
    );
};

export default Card;