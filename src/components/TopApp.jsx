import React from 'react';
import '../App.css';
import sampleImg from '../assets/demo-app (1).webp'
import downloadIcon from '../assets/icon-downloads.png'
import ratingStarIcon from '../assets/icon-ratings.png'

const TopApp = () => {
    return (
        <div className='py-20 bg-[#62738210]'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='font-bold text-5xl'>Trending Apps</h2>
                <p className='details'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* top app cards */}
            <div className='mx-[4.16%] grid grid-cols-4 gap-4 pb-10'>
                <div className='p-4 bg-white rounded-sm'>
                    <img src={sampleImg} alt="app-img" className='rounded-lg w-full' />
                    <h6 className='text-xl font-medium my-4'>Forest: Focus for Productivity</h6>
                    <div className='flex justify-between'>
                        <div className='py-1.5 px-2.5 bg-[#f1f5e8] rounded-sm flex gap-2 items-center justify-center'>
                            <img src={downloadIcon} alt="" className='size-4' />
                            <p className=''>9M</p>
                        </div>
                        <div className='py-1.5 px-2.5 bg-[#fff0e1] rounded-sm flex gap-2 items-center justify-center'>
                            <img src={ratingStarIcon} alt="" className='size-4' />
                            <p className=''>5</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <a className="btn flex justify-center items-center bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-10 py-5">Show All</a>
            </div>
        </div>
    );
};

export default TopApp;