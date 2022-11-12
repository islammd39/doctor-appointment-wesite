import React from 'react';
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import ServiceCard from './ServiceCard';

const ServiceData = () => {
    const services = [
        {
            id:1,
            name:"Fluoride Treatment",
            details:"Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.",
            img:fluoride
        },
        {
            id:2,
            name:"Cavity Filling",
            details:"You should expect to be at your dentist's office for around an hour.",
            img:cavity
        },
        {
            id:3,
            name:"Teeth Whitening",
            details:"It is really very important to choose the right dentist for you and your family.",
            img:whitening
        }
    ]

    return (
        <div className='text-center my-10 lg:m-10'>
            <h4 className='text-lg uppercase font-semibold text-secondary'>Our Services</h4>
            <h2 className='text-4xl text-accent mt-2'>Services We Provide</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10'>
            {
               services.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default ServiceData;