import React from 'react';

const FriendCard = ({ friend }) => {
    return (
                            <div className="card bg-base-100 shadow-sm p-8 my-4" key={friend.id}>
  <figure>
    <div className='w-40 h-40 rounded-full overflow-hidden'>
        
    <img className='w-full h-full object-cover'
      src={friend.picture}
      alt={friend.name} />
    </div>
  </figure>
  <div className="card-body text-center items-center">
    <h2 className="card-title text-[20px] font-semibold text-[#1F2937]">
      {friend.name}
      
    </h2>
    <p className='text-[12px] font-medium text-[#64748B]'>{friend.days_since_contact}d ago</p>
    <div>
      <div className='flex gap-2 mb-3 items-center text-[12px] font-medium text-[#244D3F]'>

        {friend.tags.map((tag, ind)=>(<div key={ind} className="badge bg-green-200 uppercase">{tag}</div>))}
      </div>
    

        <div>
            <div className={`badge text-white ${friend.status === "overdue" ? "bg-red-500" : friend.status === "almost due" ? "bg-yellow-500" : "bg-green-900"}`}>{friend.status}</div>
           
        </div>
    </div>
  
  </div>
</div>
    );
};

export default FriendCard;