import React from 'react';
import homeLogo from '../assets/logo.png'
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();

    const navLinks = <>
        <li><a onClick={() => navigate("/")}>Home</a></li>
        <li><a onClick={() => navigate("/apps")}>Apps</a></li>
        <li><a>Installation</a></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md px-[4.16%] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <a onClick={() => navigate("/")} className="font-bold cursor-pointer flex items-center justify-center gap-1 ">
                        <img className='size-7 ' src={homeLogo} alt="logo of hero app" />
                        HERO.IO</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn flex justify-center items-center bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-10 py-5">Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;