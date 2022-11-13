import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import AppointmentOptionCard from './AppointmentOptionCard';

const AvailableAppointment = ({selected}) => {
    const [appointmentOptions, setAppointments] = useState([])
    const [treatment, setTreatment] = useState({})

    useEffect(()=>{
        fetch('appointmentOption.json')
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[])
    return (
       <section className='my-20 '>
            <h2 className='text-center font-semibold text-secondary my-10'>Available Appointment {format (selected, "PP")}</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-10'>
        {
            appointmentOptions.map(appointmentOption=><AppointmentOptionCard key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment}></AppointmentOptionCard>)
        }
                
        </div>
        <AppointmentModal treatment={treatment} selected={selected}></AppointmentModal>
       </section>
    );
};

export default AvailableAppointment;