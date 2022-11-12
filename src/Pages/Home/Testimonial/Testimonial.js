import React from 'react';
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import TestimonialReview from './TestimonialReview';

const Testimonial = () => {
    const testimonialCards = [
        {
            id:1,
            name:"David Jeo",
            address:"California",
            reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people1
        },
        {
            id:2,
            name:"Jon Deo",
            address:"Australia",
            reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people2
        },
        {
            id:3,
            name:"Wile Son",
            address:"Canada",
            reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:people3
        },
    ]
    return (
        <section>
            <div className='flex justify-between m-10'>
            <div>
            <h4 className='text-xl font-bold text-secondary'>Testimonial</h4>
            <h2 className='text-2xl text-accent'>What Our Patients Says</h2>
            </div>
            <figure>
               <img className='w-16 lg:w-48' src={quote} alt=".." />
            </figure>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-10 gap-10'>
                {
                    testimonialCards.map(testimonial=><TestimonialReview key={testimonial.id} testimonial={testimonial}></TestimonialReview>)
                }
            </div>
        </section>
    );
};

export default Testimonial;