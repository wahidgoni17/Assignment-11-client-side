import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Catagories from '../Catagories/Catagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;