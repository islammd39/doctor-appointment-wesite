import React from "react";

const AppointmentOptionCard = ({appointmentOption, setTreatment}) => {
    const {name, slots} = appointmentOption;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl text-center">
        <div className="card-body">
          <h2 className=" text-primary font-semibold text-2xl">{name}</h2>
          <p>{slots.length > 0 ? slots[0]: "Try another day"}</p>
          <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
          <div className="card-actions justify-center">
            <label disabled={slots.length === 0} htmlFor="appointment-modal" onClick={()=>setTreatment(appointmentOption)} className="btn btn-primary text-white my-5">Book Now</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptionCard;
