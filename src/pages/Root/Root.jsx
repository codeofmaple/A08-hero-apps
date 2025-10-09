import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../components/Spinner/Spinner';

const Root = () => {

    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>



            <ToastContainer position="top-right" autoClose={2500} />
        </>
    );
};

export default Root;