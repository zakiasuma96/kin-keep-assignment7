import React, { use } from 'react';
const AllFriendsPromise =fetch("/friends.json")
.then(res=>res.json());
const AllFriends = () => {
    const friends =use(AllFriendsPromise);
    return (
        <div>
            <h2 className='text-[#1F2937] font-semibold text-2xl'>Your Friends</h2>

        </div>
    );
};

export default AllFriends;