import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';

const handleCall =(currentFriend)=>{
    const 

}

const handleText =(currentFriend)=>{

}   
const handleVideo =(currentFriend)=>{

}

const FriendDetailsRightBottom = ({id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date, expectedFriend}) => {
    return (
        <>
    <section>

        <div className="card card-border bg-white w-full gap-6 mt-10 ">
  <div className=" flex justify-between items-start gap-6 p-10 ">
    <div>


    <h2 className="card-title text-[20px] font-medium text-[#244D3F] mb-4">Relationship Goal</h2>
    <span className='text-[18px] text-[#64748B]'>Contact Every <span    className='font-bold text-black'>{goal} Days</span></span>
    </div>
    <div className="card-actions ">
      <button className="btn ">Edit</button>
    </div>
  </div>
</div>

<div className='mt-6'>
    <div className=" bg-base-100 shadow-sm rounded-lg">
  <div className="card-body">
    <h2 className="card-title text-[20px] font-medium text-[#244D3F]">Quick Check-In</h2>
    <div className='grid grid-cols-3 justify-between items-center gap-6 '>
        {/* 1 */}
  <button className=' bg-base-200 p-6 mt-4 flex flex-col justify-center items-center gap-2 rounded-xl text-[18px] 'onClick={()=>handleCall(expectedFriend)}>
    <span><FiPhoneCall /></span>
    <p>Call</p>

  </button>
  {/* 2 */}
  <button className=' bg-base-200 p-6 mt-4 flex flex-col justify-center items-center gap-2 rounded-xl text-[18px] 'onClick={()=>handleText(expectedFriend)}>
    <span><MdOutlineTextsms /></span>
    <p>Text </p>

  </button>
  {/* 3 */}
  <button className=' bg-base-200 p-6 mt-4 flex flex-col justify-center items-center gap-2 rounded-xl text-[18px] 'onClick={()=>handleVideo(expectedFriend)} >
    <span><IoVideocamOutline /></span>
    <p>Video </p>

  </button>
    </div>
  </div>
</div>
</div>
    </section>
        </>
    );
};

export default FriendDetailsRightBottom;