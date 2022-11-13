import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({treatment, selected}) => {
    const {name} = treatment;
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
         <form className="mt-3">
         <input type="text" disabled value={format (selected,"PP")} className="input input-bordered w-full my-2" />
         <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
         <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
         <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
         <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
         <input type="submit" className="btn btn-accent input input-bordered w-full mt-2" />
         </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
