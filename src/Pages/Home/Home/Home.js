import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import ServiceData from '../Service/ServiceData';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <InfoCard></InfoCard>
         <ServiceData></ServiceData>
        </div>
    );
};

export default Home;