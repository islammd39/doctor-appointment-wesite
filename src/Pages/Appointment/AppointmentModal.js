import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({ treatment, selected }) => {
    const Date = format(selected, 'PP')
  const { name, slots } = treatment;
  const handleSubmit = (e) =>{
      e.preventDefault()
      const from = e.target;
      const slot = from.slot.value;
      const name = from.name.value;
      const email = from.email.value;
      const number = from.number.value;
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
            {name}
          </h3>
          <form onClick={handleSubmit} className="mt-3">
            <input
              type="text"
              disabled
              value={Date}
              className="input input-bordered w-full my-2"
            />
            <select name="slot" className="select select-bordered w-full my-2">
              {
                slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
              }
            </select>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered w-full my-2"
            />
            <input
              name="email"
              type="email"
              placeholder="your email"
              className="input input-bordered w-full my-2"
            />
            <input
              name="number"
              type="number"
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
