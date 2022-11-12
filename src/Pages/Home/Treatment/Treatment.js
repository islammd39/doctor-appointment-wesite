import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="lg:p-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row p-0">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
          alt=".."/>
          <div className="m-10">
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
