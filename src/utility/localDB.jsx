const getCallDataFromLocalStorage = (key) => {
    const allCallList  =localStorage.getItem("callList");

    if(allCallList) return JSON.parse(allCallList);
    return [];
    
}
const addCallDataToLocalStorage = (friend) => {
    const allCalls =getCallDataFromLocalStorage();
    const isCallExist =allCalls.find(call=>call.id === friend.id);
    if(!isCallExist)
    {
        allCalls.push(friend);
        localStorage.setItem("callList", JSON.stringify(allCalls));
        
    }
    
    
}

const getTextDataFromLocalStorage =(key)=>{
    const allTextList =localStorage.getItem("textList");

    if(allTextList) return JSON.parse(allTextList);
    return [];
}

const addTextDataToLocalStorage =(friend)=>{
    const allTexts =getTextDataFromLocalStorage();
    const isTextExist =allTexts.find(text=>text.id === friend.id);
    if(!isTextExist)
    {
        allTexts.push(friend);
        localStorage.setItem("textList", JSON.stringify(allTexts));
        
    }
}

const getVideoDataFromLocalStorage =(key)=>{
    const allVideoList =localStorage.getItem("videoList");

    if(allVideoList) return JSON.parse(allVideoList);
    return [];
}

const addVideoDataToLocalStorage =(friend)=>{
    const allVideos =getVideoDataFromLocalStorage();
    const isVideoExist =allVideos.find(video=>video.id === friend.id);
    if(!isVideoExist)
    {
        allVideos.push(friend);
        localStorage.setItem("videoList", JSON.stringify(allVideos));
        
    }
}

export { getCallDataFromLocalStorage, addCallDataToLocalStorage, getTextDataFromLocalStorage, getVideoDataFromLocalStorage, addTextDataToLocalStorage, addVideoDataToLocalStorage };