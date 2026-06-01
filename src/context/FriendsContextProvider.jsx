// import React, { createContext, useState } from 'react';

// export const FriendContext =createContext();

// const FriendsContextProvider = ({children}) => {
   
//     const [storedFriends, setStoredFriends]=useState([]);
// const handleCall =(currentFriend)=>{


// const isExpectedFriedExist=storedFriends.find(friend=>friend.id === currentFriend.id);
// if(isExpectedFriedExist){
    
//     alert(`call ${currentFriend.name}`);
    
// }
// else{
//     setStoredFriends([...storedFriends, currentFriend]);
//         alert(`call ${currentFriend.name}`);
// }
// }
//      const data = {
//         storedFriends,
//         setStoredFriends,
//         handleCall, 
        
//      };
//     return <FriendContext.Provider value={data}>
//         {children}
//     </FriendContext.Provider>
// };

// export default FriendsContextProvider;