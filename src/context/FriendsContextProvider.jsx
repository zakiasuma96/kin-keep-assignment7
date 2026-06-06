import  { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addCallDataToLocalStorage, addTextDataToLocalStorage, addVideoDataToLocalStorage, getCallDataFromLocalStorage, getTextDataFromLocalStorage, getVideoDataFromLocalStorage } from '../utility/localDB';

export const FriendContext =createContext();

const FriendsContextProvider = ({children}) => {
   
const [storedCalls, setStoredCalls]=useState([]);
const [storedTexts, setStoredTexts]=useState([]);
const [storedVideos, setStoredVideos]=useState([]);

useEffect(()=>{
    const calls = getCallDataFromLocalStorage();
    console.log(calls, "calls")
    setStoredCalls(calls);
   const texts = getTextDataFromLocalStorage();
   setStoredTexts(texts);
   const videos = getVideoDataFromLocalStorage();
   setStoredVideos(videos);
},[]);

    


const handleCall = (currentFriend) => {
    addCallDataToLocalStorage(currentFriend);
        if (!currentFriend ) return;

        // 1. Create a new interaction object with a unique ID, name, date, and time
        const newCallLog = {
            id: Date.now(), // Unique timestamp key for React rendering
            name: currentFriend.name,
            date: new Date().toLocaleDateString(), // e.g., "6/2/2026"
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // e.g., "06:45 PM"
        };

        // 2. Trigger the toast notification right away
        toast.success(`Call with ${currentFriend.name}`);

        // 3. Append the new log to the existing history array
        setStoredCalls([
            ...storedCalls,
            newCallLog
        ]);
    };

   

    const handleText = (currentFriend) => {
        addTextDataToLocalStorage(currentFriend);
        if(!currentFriend ) return;

        const newTextLog = {
            id: Date.now(),
            name: currentFriend.name,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setStoredTexts([
            ...storedTexts,
            newTextLog
        ]);
        toast.success(`Texted ${currentFriend.name}`);
    };

    const handleVideo = (currentFriend) => {
        addVideoDataToLocalStorage(currentFriend);
        if(!currentFriend ) return;

        const newVideoLog = {
            id: Date.now(),
            name: currentFriend.name,
            date: new Date().toLocaleDateString(),
            
        };
        setStoredVideos([
            ...storedVideos,
            newVideoLog
        ]);
        toast.success(`Video call with ${currentFriend.name}`);
    };

     const data = {
        storedCalls,
        setStoredCalls,
        storedTexts,
        setStoredTexts,
        storedVideos,
        setStoredVideos,
        handleCall,
        handleText,
        handleVideo
    };
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendsContextProvider;