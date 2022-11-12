import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceData from '../Service/ServiceData';
import Treatment from '../Treatment/Treatment';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <InfoCard></InfoCard>
         <ServiceData></ServiceData>
         <Treatment></Treatment>
         <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;