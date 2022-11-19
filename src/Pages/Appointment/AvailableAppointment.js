import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';
import AppointmentOptionCard from './AppointmentOptionCard';

const AvailableAppointment = ({selected}) => {
    // const [appointmentOptions, setAppointments] = useState([])
    const [treatment, setTreatment] = useState(null)
    
    const {data:appointmentOptions =[]} = useQuery({
        queryKey:['appointmentOptions'],
        queryFn: ()=> fetch('http://localhost:5000/appointmentOptions')
        .then(res => res.json())
    })


    return (
       <section className='my-20 '>
            <h2 className='text-center font-semibold text-secondary my-10'>Available Appointment {format (selected, "PP")}</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-10'>
        {
            appointmentOptions.map(appointmentOption=><AppointmentOptionCard key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment}></AppointmentOptionCard>)
        }
                
        </div>
       { treatment && <AppointmentModal treatment={treatment} selected={selected}></AppointmentModal>}
       </section>
    );
};

export default AvailableAppointment;