import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCardDetails from './InfoCardDetails';

const InfoCard = () => {
    const viewCards = [
        {
            "id":1,
            "name":"Opening Hours",
            "icon":clock,
            "details":"Opening 7.30 am Close 1.30pm",
            "bgColor":"bg-gradient-to-r from-primary to-secondary"
        },
        {
            "id":2,
            "name":"Visit Our location",
            "icon":location,
            "details":"1/2 united street, United State-7704",
            "bgColor":"bg-secondary"
        },
        {
            "id":3,
            "name":"Contact Us",
            "icon":phone,
            "details":"+2 401255",
            "bgColor":"bg-gradient-to-r from-primary to-secondary"
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 lg:m-10'>
            {
                viewCards.map(card=><InfoCardDetails key={card.id} card={card}></InfoCardDetails>)
            }
        </div>
    );
};

export default InfoCard;