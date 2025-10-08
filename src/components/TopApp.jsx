import React from 'react';
import '../App.css';
import downloadIcon from '../assets/icon-downloads.png'
import ratingStarIcon from '../assets/icon-ratings.png'
import useApps from '../hooks/useApps';

const TopApp = () => {

    const gotenAppData = useApps()
    const { appsData } = gotenAppData;
    console.log(appsData)

    return (
        <div className='py-20 bg-[#62738210]'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='font-bold text-5xl'>Trending Apps</h2>
                <p className='details'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* top app cards */}
            <div className='mx-[4.16%] grid grid-cols-4 gap-4 pb-10'>

                {
                    appsData.slice(0, 8).map(app => (
                        <div key={app.id} className='p-4 bg-white rounded-sm'>
                            <img src={app.image} alt="app-img" className='rounded-lg w-full' />
                            <h6 className='text-xl font-medium my-4'>{app.companyName}</h6>
                            <div className='flex justify-between'>
                                <div className='py-1.5 px-2.5 bg-[#f1f5e8] rounded-sm flex gap-2 items-center justify-center'>
                                    <img src={downloadIcon} alt="" className='size-4' />
                                    <p className=''>{app.downloads}M</p>
                                </div>
                                <div className='py-1.5 px-2.5 bg-[#fff0e1] rounded-sm flex gap-2 items-center justify-center'>
                                    <img src={ratingStarIcon} alt="" className='size-4' />
                                    <p className=''>{app.ratingAvg}5</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

            {/* btn show all apps*/}
            <div className='flex justify-center'>
                <a className="btn flex justify-center items-center bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-10 py-5">Show All</a>
            </div>
        </div>
    );
};

export default TopApp;