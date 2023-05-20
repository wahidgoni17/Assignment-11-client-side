import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Catagories from '../Catagories/Catagories';
import VisitUs from '../VisitUs/VisitUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <VisitUs></VisitUs>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;