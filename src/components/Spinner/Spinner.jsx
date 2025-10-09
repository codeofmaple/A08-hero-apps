import React from 'react';
import spinnerImg from '../../assets/logo.png'

const Spinner = () => {
    return (
        <div className='h-[60vh] w-screen flex justify-center items-center'>
            <div>
                <h1 className='text-6xl font-bold'>H
                    <img
                        src={spinnerImg}
                        alt=""
                        className="size-14 inline-block spin"
                    />
                    RO.IO</h1>
            </div>
        </div>
    );
};

export default Spinner;