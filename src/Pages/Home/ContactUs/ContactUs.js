import React from 'react';
import contact from "../../../assets/images/appointment.png"

const ContactUs = () => {
    return (
        <section style={{
            background:`url(${contact})`,
            backgroundSize:"cover"
            }} className="py-10 lg:my-20 m-2 rounded">
            <div className='text-center'>
            <h4 className='text-xl text-secondary font-semibold'>Contact Us</h4>
            <h2 className='text-white text-2xl mb-5'>Stay connected with us</h2>
            <form className=' grid grid-cols-1'>
            <input type="email" placeholder="Your email" className="input w-80 lg:w-5/12 mx-auto mt-5" />
            <input type="text" placeholder="Subject" className="input w-80 lg:w-5/12 mx-auto my-5"/>
            <textarea className="textarea w-80 lg:w-5/12 mx-auto h-28 mb-5" placeholder="Bio"></textarea>
            <div>
            <button className='btn btn-primary text-white mt-5' type="submit">Submit</button>
            </div>
            </form>
            </div>
        </section>
    );
};

export default ContactUs;