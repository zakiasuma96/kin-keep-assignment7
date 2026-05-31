import React, { use } from 'react';
import FriendCard from '../ui/FriendCard';
const AllFriendsPromise =fetch("/friends.json")
.then(res=>res.json());
const AllFriends = () => {
    const friends =use(AllFriendsPromise);
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='text-[#1F2937] font-semibold text-2xl'>Your Friends</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8'>
              {

                friends.map((friend, ind)=>{
                    return ( 
                        <FriendCard friend={friend} key={ind} />
)
                    
                })
            
            }
          </div>

        </div>
    );
};

export default AllFriends;