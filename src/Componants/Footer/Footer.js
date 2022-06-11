import React from 'react';

const Footer = () => {
    return (
        <footer class="footer items-center p-4 bg-neutral text-neutral-content">
            <div class="items-center grid-flow-col">
                <p className='text-lg font-bold text-white'>Copyright © 2022 - All right reserved</p>
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">


                <a ><img className='w-8' src="https://i.ibb.co/VYx25x3/linkedin.png" alt="" /> </a>
                <a ><img className='w-8' src="https://i.ibb.co/XpsCSd8/facebook.png" alt="" /> </a>

                <a ><img className='w-8' src="https://i.ibb.co/1m0kLfL/twitter.png" alt="" /> </a>

                <a ><img className='w-8' src="https://i.ibb.co/2ytpPqS/githuub.png" alt="" /> </a>

            </div>
        </footer>
    );
};

export default Footer;