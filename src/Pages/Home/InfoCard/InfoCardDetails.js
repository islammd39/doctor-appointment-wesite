import React from "react";

const InfoCardDetails = ({card}) => {
    const {icon, name, details, bgColor} = card;
  return (
    <div>
      <div className={`card card-side bg-base-100 shadow-xl ${bgColor} text-white p-6 h-40`}>
        <figure>
          <img src={icon} alt="icon" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCardDetails;
