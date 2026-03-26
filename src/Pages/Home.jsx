import React from 'react';
import Banner from '../Components/Banner';
import States from '../Components/States';
import TrendingApps from '../Components/TendingApps';

const Home = () => {
    return (
        <div>
            <Banner />
            <States />
            <TrendingApps />
        </div>
    );
};

export default Home;