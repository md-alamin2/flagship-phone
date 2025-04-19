import React from 'react';
import Hero from '../../components/Hero/Hero';
import PhoneDetails from '../PhoneDetails/PhoneDetails';
import PhonesContainer from '../../components/PhonesContainer/PhonesContainer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PhonesContainer></PhonesContainer>
        </div>
    );
};

export default Home;