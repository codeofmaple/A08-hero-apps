import React from 'react';
import errorImg from '../../assets/App-Error.png';
import { useNavigate } from 'react-router';


const ErrorApp = () => {
    const navigate = useNavigate();
    return (
        <div className='p-[4.16%]'>
            <div className='flex flex-col items-center justify-center'>
                <img src={errorImg} className='my-14' />
                <h1 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] py-2'>The App you are requesting is not found on our system.  please try another apps</p>

                {/* <a onClick={() => navigate("/all-apps")} className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-10 py-3.5">Go Back!</a> */}
                <button
                    onClick={() => navigate("/apps")}
                    className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-10 py-3.5"
                >
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default ErrorApp;