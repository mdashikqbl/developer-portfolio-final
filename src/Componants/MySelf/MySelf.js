
import React from 'react';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const MySelf = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div class="hero min-h-screen bg-gray-800">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#F15412",
                        },
                        links: {
                            color: "#F15412",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {

                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='w-1/2' src="https://i.ibb.co/pZ2Rfb8/ashik1.png" alt='' />
                <div className='w-1/2'>
                    <h1 class="text-5xl font-bold text-white">Hi! I am Ashik Iqbal !</h1>
                    <p class="py-6 text-xl text-white">I am a Front-end developer specializing.I am focused on Learning full-stack web development.</p>
                    <button class="btn bg-secondary font-bold border-0 text-white">HIRE ME</button>
                </div>
            </div>
        </div>
    );
};

export default MySelf;