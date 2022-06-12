import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MyProject from '../MyProject/MyProject';
import MySelf from '../MySelf/MySelf';
import Service from '../Service/Service';



const Home = () => {
    return (
        <div className=''>
            <MySelf></MySelf>
            <About></About>
            <Service></Service>
            <MyProject></MyProject>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;