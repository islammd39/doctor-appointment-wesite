import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
    const [selected, newSelected]=useState(new Date()) 

  return (
     <div className="m-2">
       <AppointmentBanner selected={selected} newSelected={newSelected}></AppointmentBanner>
       <AvailableAppointment selected={selected}></AvailableAppointment>
     </div>
  );
};

export default Appointment;
