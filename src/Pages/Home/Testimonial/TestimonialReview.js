import React from "react";

const TestimonialReview = ({testimonial}) => {
    const {name, address, reviews, img} = testimonial;
  return (
    <div>
      <div className="card lg:w-96 shadow-xl p-5">
        <div className="card-body text">
          <p>{reviews}</p>
          <div className="card-actions mt-5">
             <img className="border-primary w-16 border-4 rounded-full" src={img} alt="..." />
             <div className="flex-row mt-3 ml-4">
             <p>{name}</p>
             <p>{address}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialReview;
