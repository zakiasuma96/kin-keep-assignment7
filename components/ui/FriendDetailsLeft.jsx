import React from 'react';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { IoArchiveSharp } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';

const FriendDetailsLeft = ({id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date}) => {
    return (
        <>

                <div className="card bg-base-100 shadow-sm justify-center items-center py-3 text-center ">
  <figure>
    <img
      src={picture}
      alt="Album"
      className='w-40 h-40 rounded-full'
    />
  </figure>
  <div className="card-body flex justify-center items-center gap-3">
    <h2 className="card-title text-2xl font-semibold text-[#1F2937]">
      {name}
    </h2>
      <div className={`badge text-white ${status === "overdue" ? "bg-red-500" :status === "almost due" ? "bg-yellow-500" : "bg-green-900"}`}>{status}</div>
      <div className='flex justify-center items-center gap-2'>

      {
        tags.map((tag, ind)=>(<div key={ind} className="badge bg-green-200 uppercase">{tag}</div>))
      }
      </div>
    <p className='text-[14px] font-medium text-gray-500'>"{bio}"</p>
    <p className='text-[16px] font-medium text-gray-500'>{email}</p>
   
  </div>
</div>

      <div className="card card-border bg-white w-full gap-4 mt-6 ">
        <button className="btn "> <HiOutlineBellSnooze /> Snooze 2 weeks</button>
      <button className="btn"><IoArchiveSharp />Archive</button>
      <button className="btn "> <MdDeleteForever />Delete</button>

      </div>
        </>
    );
};

export default FriendDetailsLeft;