import React, { useContext } from 'react';
import { FriendContext } from '../../src/context/FriendsContextProvider.jsx';
import { FaHandshake } from 'react-icons/fa';
import { RiMessage2Line } from 'react-icons/ri';
import { IoVideocam } from 'react-icons/io5';

const Timeline = () => {
    
    const {storedCalls, storedTexts, storedVideos} = useContext(FriendContext);

    
    return (
        <>
        <section className='container mx-auto'>

        <div>
              <h2 className='text-2xl font-bold mb-4 text-black'>Timeline</h2>

              <select defaultValue="Filter Timeline" className="select mb-6">
  <option disabled={true}>Filter timeline</option>
  <option>Call</option>
  <option>Text</option>
  <option>Video</option>
</select>

              
    {
        storedCalls.map((call, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow mb-4 border border-gray-200 '>
                <div className='flex items-center gap-4'>
                    <div className='text-yellow-400 text-5xl'>
                        <FaHandshake />
                    </div>
                    <div>
                        <p className='text-gray-400 text-xl'><span className='font-bold text-black '>MeetUp</span> with {call.name}</p>
                <p className='text-sm text-gray-500'>{call.date}</p>
                    </div>
                </div>
            </div>
        ))
    }
    {
        storedTexts.map((text, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow mb-4 border border-gray-200 '>
              <div className='flex items-center gap-4'>
                <div className=' text-5xl'>
                    <RiMessage2Line />
                </div>
                <div>
                       <p className='text-gray-400 text-xl'><span className='font-bold text-black '>Text</span> with {text.name}</p>
                <p className='text-sm text-gray-500'>{text.date} </p>
                </div>
              </div>
            </div>
        ))
    }
    {
        storedVideos.map((video, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow mb-4 border border-gray-200 '>
               <div className='flex items-center gap-4'>
                 <div className='text-gray-500 text-5xl'>
                    <IoVideocam />
                </div>
                <div>
                    <p className='text-gray-400 text-xl'><span className='font-bold text-black '>Video</span> with {video.name}</p>
                <p className='text-sm text-gray-500'>{video.date}</p>
                </div>
               </div>
            </div>
        ))
    }
        </div>
        </section>
        </>
    );
};

export default Timeline;