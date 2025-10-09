import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>


            <ToastContainer position="top-right" autoClose={2500} />
        </>
    );
};

export default Root;