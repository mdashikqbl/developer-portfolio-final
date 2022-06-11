import React from 'react';
import './Service.css';


const Service = () => {
    return (
        <div className='m-28  '>
            <h1 className='text-4xl font-bold '>Skills</h1>
            <h2 className='font-bold text-lg'>The Technologies that we use in our work:</h2>
            <div className='all-card'>

                <div className='container'>
                    <div className='css-shadow'>
                        <img className='my-3 w-28 mx-auto' src="https://i.ibb.co/SRhC0px/html5-1.png" alt="" />
                        <p className='text-center font-bold'>HTML</p>
                    </div>
                    <div className='css-shadow'>
                        <img className='my-3 w-28 mx-auto' src="https://i.ibb.co/FxNKBpd/css3-1.png" alt="" />
                        <p className='text-center font-bold'>CSS</p>
                    </div>
                    <div className='css-shadow'>
                        <img className='my-3 w-28 mx-auto' src="https://i.ibb.co/DtxZcBN/tailwind-css.png" alt="" />
                        <p className='text-center font-bold'>Tailwind</p>
                    </div>
                    <div className='css-shadow'>
                        <img className='my-3 w-28 mx-auto' src="https://i.ibb.co/d7T7qgY/javascript.png" alt="" />
                        <p className='text-center font-bold'>Javascript</p>
                    </div>
                    <div className='css-shadow'>
                        <img className='my-3 w-28 mx-auto' src="https://i.ibb.co/Jy91kWf/react-js-1.png" alt="" />
                        <p className='text-center font-bold'>React JS</p>
                    </div>
                    <div className='css-shadow'>
                        <img className='my-3 w-28 mx-auto' src="https://i.ibb.co/34hFTXX/node-js.png" alt="" />
                        <p className='text-center font-bold'>Node JS</p>
                    </div>
                    <div className='css-shadow'>
                        <img className='my-3 w-28 mx-auto' src="https://i.ibb.co/g7xHh1M/mongodb.png" alt="" />
                        <p className='text-center font-bold'>MongoDB</p>
                    </div>
                    <div className='css-shadow'>
                        <img className='my-3 w-28 mx-auto' src="https://i.ibb.co/WcxZ4Lx/firebase.png" alt="" />
                        <p className='text-center font-bold'>Firebase</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;