import React from "react";
import chair from "../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import bg from "../../assets/images/bg.png"

const AppointmentBanner = ({selected, newSelected}) => {
    return (
        <div style={{
            background:`url(${bg})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
        }} className="">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={chair}
                className="lg:w-1/3 rounded-lg shadow-2xl hidden lg:flex"
              alt="..."/>
              <div className="border-2 border-primary">
              <DayPicker 
               mode="single"
               selected={selected}
               onSelect={newSelected}
              />
              </div>
            </div>
          </div>
        </div>
    );
};

export default AppointmentBanner;