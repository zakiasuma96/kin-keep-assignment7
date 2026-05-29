import React from 'react';
import Banner from '../components/homepage/Banner';
import AllFriends from '../components/homepage/AllFriends';
import Card from '../components/homepage/Card';

const Homepage = () => {
    return (
        <div className='bg-base-200'>
            <Banner/>
            <Card/>
            <AllFriends/>

        </div>
    );
};

export default Homepage;