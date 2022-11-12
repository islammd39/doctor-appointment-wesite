import React from "react";
import bannerImage from "../../../assets/images/chair.png"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 lg:py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImage}
            className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="..."/>
          <div>
            <h1 className="text-5xl font-bold lg:mt-5">Box Office News!</h1>
            <p className="py-6 mt-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn h-14 bg-gradient-to-r from-primary to-secondary text-white border-none lg:mt-5">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
