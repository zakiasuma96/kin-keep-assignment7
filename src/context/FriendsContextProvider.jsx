import React, { createContext } from 'react';

export const FriendContext =createContext();

const FriendsContextProvider = ({children}) => {
    const data = "hello from context";
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendsContextProvider;