import React from 'react';
import Footer from '../Footer/Footer';
import MyProject from '../MyProject/MyProject';
import MySelf from '../MySelf/MySelf';
import Service from '../Service/Service';



const Home = () => {
    return (
        <div className=''>
            <MySelf></MySelf>
            <Service></Service>
            <MyProject></MyProject>
            <Footer></Footer>
        </div>
    );
};

export default Home;