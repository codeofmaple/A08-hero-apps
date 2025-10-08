import React from 'react';
import errorImg from '../../assets/error-404.png';
import { useNavigate } from 'react-router';

const ErrorPages = () => {

    const navigate = useNavigate();

    return (
        <div className='p-20 bg-[#62738210]'>
            <div className='flex flex-col items-center justify-center'>
                <img src={errorImg} className='my-14'/>
                <h1 className='text-5xl font-semibold'>Oops, page not found!</h1>
                <p className='text-[#627382] py-2'>The page you are looking for is not available.</p>

                <a onClick={()=>navigate("/")} className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-10 py-3.5">Go Back!</a>
            </div>
        </div>
    );
};

export default ErrorPages;