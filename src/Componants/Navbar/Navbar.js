import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#about/about">About Me</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to="/Project">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>

    return (
        <div class="navbar bg-gray-800 sticky top-0 z-50 ">
            <div class="navbar-start sticky top-0 z-50 ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost bg-secondary text-white normal-case text-xl">Portfolio</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal text-white p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <a href='https://drive.google.com/file/d/1GfPxC-eyWO2V6RjEdVZ0QLNl8C9tte-w/view?usp=sharing' target="_blank" download class="btn bg-primary border-0 font-bold text-white">DOWNLOAD RESUME</a>
            </div>
        </div>
    );
};

export default Navbar;