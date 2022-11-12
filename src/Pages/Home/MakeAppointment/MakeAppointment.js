import React from "react";
import doctor from "../../../assets/images/doctor.png"
import appointment from "../../../assets/images/appointment.png"

const MakeAppointment = () => {
  return (
    <section style={{background:`url(${appointment})`}}>
      <div className="hero lg:my-10">
        <div className="hero-content flex-col lg:flex-row-reverse lg:mx-5 p-0">
          <img
            src={doctor}
            className="lg:w-1/2 rounded-lg shadow-2xl -mt-32"
          alt="..."/>
          <div className="lg:p-10 text-white m-5">
            <p className="font-bold text-secondary">Appointment</p>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
