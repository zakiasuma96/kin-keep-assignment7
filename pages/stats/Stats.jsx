import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../src/context/FriendsContextProvider';
// import { RechartsDevtools } from '@recharts/devtools';

const Stats = () => {
    const {storedCalls, storedTexts, storedVideos} = useContext(FriendContext);
    const data = [
  { name: 'Call', value: storedCalls.length, fill: '#0088FE' },
  { name: 'Text', value: storedTexts.length, fill: '#00C49F' },
  { name: 'Video', value: storedVideos.length, fill: '#FFBB28' },
  
];
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-3xl text-gray-900 my-8'>Friendship Analytics</h2>

            <div className='flex justify-center border border-gray-200 rounded-lg p-6 bg-white shadow'>
                 <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
        
      />
      {/* <RechartsDevtools /> */}
      

      <Legend />
      <Tooltip/>
    </PieChart>
            </div>
        </div>
    );
};

export default Stats;