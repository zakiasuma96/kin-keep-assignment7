import  { useContext } from 'react';

import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { FriendContext } from '../../src/context/FriendsContextProvider.jsx';






const FriendDetailsRightBottom = ({id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date, expectedFriend}) => {

  const {handleCall} = useContext(FriendContext);
  const {handleText} = useContext(FriendContext);
  const {handleVideo} = useContext(FriendContext);
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
        <button className=' btn bg-base-200 mt-4 rounded-xl text-[18px] p-14 ' onClick={()=>{
          console.log("expectedFriend =", expectedFriend);
          handleCall(expectedFriend)}}
          >
        <div className='flex flex-col justify-center items-center text-center gap-2' >
             <span><FiPhoneCall /></span>
             <p>Call</p>
        </div>
        </button>

  {/* 2 */}
  <button className='btn bg-base-200 mt-4 rounded-xl text-[18px] p-14' onClick={()=>handleText(expectedFriend)}>
  <div className='flex flex-col justify-center items-center text-center gap-2  '>

    <span><MdOutlineTextsms /></span>
    <p>Text </p>

  </div>
  </button>
  {/* 3 */}
  <button className=' btn bg-base-200 mt-4 rounded-xl text-[18px] p-14' onClick={()=>handleVideo(expectedFriend)}>
    <div className='flex flex-col justify-center items-center text-center gap-2'>
      <span><IoVideocamOutline /></span>
    <p>Video </p>
    </div>

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