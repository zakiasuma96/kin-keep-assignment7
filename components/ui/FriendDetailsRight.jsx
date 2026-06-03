import React from 'react';
import FriendDetailsRightBottom from './FriendDetailsRightBottom';

const FriendDetailsRight = ({id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date, expectedFriend}) => {
    return (
        <section className=' '>

        <div className='flex justify-between items-center gap-6'> 
                    {/* 1 card  */}
                  <div className="card card-border bg-base-100 w-90  ">
                
  <div className="card-body text-center my-4 ">
    <h2 className='font-semibold text-[30px] text-[#244D3F] '>{days_since_contact}</h2>
    <p className="font-medium text-[18px] text-[#64748B]">Days Since Contact</p>
   
  </div>
      </div>
        {/* 2 card  */}
                  <div className="card card-border bg-base-100 w-90  ">   
                
  <div className="card-body text-center my-4 ">
    <h2 className='font-semibold text-[30px] text-[#244D3F] '>{goal}</h2>
    <p className="font-medium text-[18px] text-[#64748B]">Goal(Days)</p>
   
  </div>
      </div>
        {/* 3 card  */}
                  <div className="card card-border bg-base-100 w-90  ">
                
  <div className="card-body text-center my-4 ">
    <h2 className='font-semibold text-[30px] text-[#244D3F] '>{next_due_date}</h2>
    <p className="font-medium text-[18px] text-[#64748B]">Next Due </p>
   
  </div>
      </div>
        </div>
        <FriendDetailsRightBottom id={id} name={name} picture={picture} email={email} days_since_contact={days_since_contact} status={status} tags={tags} bio={bio} goal={goal} next_due_date={next_due_date} expectedFriend={expectedFriend}/>
        </section>
    );
};

export default FriendDetailsRight;