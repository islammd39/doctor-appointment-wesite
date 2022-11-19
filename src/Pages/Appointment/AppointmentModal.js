import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const AppointmentModal = ({ treatment, selected }) => {
    const Date = format(selected, 'PP')
  const { name:treatmentName, slots } = treatment;
  // console.log(treatment);
  const {user} = useContext(AuthContext)
  const handleSubmit = (e) =>{
      e.preventDefault()
      const from = e.target;
      const slot = from.slot.value;
      const name = from.name.value;
      const email = from.email.value;
      const number = from.number.value;
      
      const appointment = {
        bookingDate:Date,
        treatment:treatmentName,
        patient:name,
        slot,
        email,
        number
      }
      fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
          
                }
                else{
                    toast.error(data.message);
                }
            })

  }
  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center font-bold text-primary">
            {treatmentName}
          </h3>
          <form onSubmit={handleSubmit} className="mt-3">
            <input
              type="text"
              disabled
              value={Date}
              className="input input-bordered w-full my-2"
            />
            <select name="slot" className="select select-bordered w-full my-2">
              {
                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
              }
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="name"
              className="input input-bordered w-full my-2"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}  
              placeholder="your email"
              className="input input-bordered w-full my-2"
            />
            <input
              name="number"
              type="text"
              placeholder="Your phone number"
              className="input input-bordered w-full my-2"
            />
            <input
              type="submit"
              className="btn btn-accent input input-bordered w-full mt-2"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
