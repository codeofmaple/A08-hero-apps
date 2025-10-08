import React from 'react';
import errorImg from '../../assets/App-Error.png';

const AppNotFound = () => {
    return (
        <div>
            <div className='p-[4.16%] -mb-20'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={errorImg} className='my-14' />
                    <h1 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-[#627382] py-2'>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
            </div>
        </div>
    );
};

export default AppNotFound;