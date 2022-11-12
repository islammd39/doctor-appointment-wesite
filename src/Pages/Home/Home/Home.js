import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import InfoCard from '../InfoCard/InfoCard';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceData from '../Service/ServiceData';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <InfoCard></InfoCard>
         <ServiceData></ServiceData>
         <Treatment></Treatment>
         <MakeAppointment></MakeAppointment>
         <Testimonial></Testimonial>
         <ContactUs></ContactUs>
        </div>
    );
};

export default Home;