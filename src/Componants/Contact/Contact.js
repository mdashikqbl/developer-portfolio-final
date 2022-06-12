import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h9i35pi', 'template_wgvo0ps', form.current, 'Y8zUB_NfuzM-qfRjX')
            .then((result) => {
                toast('message send successfully');

            }, (error) => {
                alert(error.message);
            });
        e.target.reset()

    };
    return (
        <div class="hero min-h-screen bg-gray-800">
            <div>
                <h1 class=" mt-5 mb-16 text-5xl text-center text-white font-bold">Contact <span className='text-secondary'>Me!</span></h1>
                <div class="hero-content flex-col grid sm:grid-cols-1    lg:grid-cols-2 ">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
                        <div class="card-body">
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="form-control shadow-2xl rounded-2xl">
                                    <input type="text" name="client-Name" placeholder="Your Name" class="input input-bordered border-0 " />
                                </div>
                                <div class="form-control  shadow-2xl rounded-2xl mt-5">
                                    <input type="text" name="client-Email" placeholder="Email" class="input input-bordered border-0" />
                                </div>
                                <div class="form-control shadow-2xl rounded-2xl mt-5 ">
                                    <textarea name='message' class="textarea" placeholder="Type Your Message"></textarea>
                                </div>
                                <div class="form-control mt-6 flex justify-center">
                                    <input className=' font-semibold text-white text-xl bg-secondary py-2 my-2  rounded  w-28' type="submit" value="send" />


                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="text-center  lg:mb-36 lg:mr-40 ">
                        <h1 class="text-5xl text-white font-bold">Have a question?</h1>
                        <h2 className=' text-2xl text-white font-semibold mt-5'>Write me a Message</h2>
                        <div className='flex items-center'>
                            <img className='w-10' src="https://i.ibb.co/4PJwmNS/location.png" alt="" />
                            <p img class=" ml-3 text-3xl text-white py-6">Current Location</p>
                        </div>
                        <p className=' text-2xl text-white'>Jhenaidah,Dhaka,Bangladesh</p>
                        <p className=' text-2xl text-white'>Serving clients worldwide</p>
                        <div className='flex items-center'>
                            <img className='w-10' src="https://i.ibb.co/6Rh0QM1/contacts.png" alt="" />
                            <p img class=" ml-3 text-3xl text-white py-6">Contact With Me</p>
                        </div>
                        <p className=' text-2xl text-white'>Email:mdashikqbl@gmail.com</p>
                        <p className=' text-2xl text-white'>Phone:+8801852517355</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;