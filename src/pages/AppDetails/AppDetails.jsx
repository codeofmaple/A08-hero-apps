import React from 'react';
import { useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import useApps from '../../hooks/useApps';
import ErrorApp from '../ErrorPage/ErrorApp';
import RatingsGraph from '../../components/RatingGraph';

const AppDetails = () => {
    const gottenAppData = useApps()
    const { appsData } = gottenAppData;
    const getId = useParams()
    const { id } = getId;

    const appDetailsData = appsData?.find(app => app.id === Number(id));
    if (!appDetailsData) {
        return <ErrorApp></ErrorApp>;
    }
    const { image, title, companyName, description, downloads, ratingAvg, reviews, size } = appDetailsData || {};

    const handleInstall = () => {
        const existingInstalledList = JSON.parse(localStorage.getItem('installedList'));
        let updatedInstalledList = [];
        if (existingInstalledList) {
            const isDuplicate = existingInstalledList.some(p => p.id === appDetailsData.id)
            if (isDuplicate) return alert("Already Installed!")
            updatedInstalledList = [...existingInstalledList, appDetailsData]
        } else {
            updatedInstalledList.push(appDetailsData)
        }
        localStorage.setItem('installedList', JSON.stringify(updatedInstalledList))
    }

    return (
        <div className='p-[4.16%]'>
            <div className='flex gap-10'>
                <img src={image} alt="" className='size-[21.875rem]' />
                <div className='w-full'>
                    <div>
                        <p className='font-bold text-[2rem] '>{title}</p>
                        <p className='details'>Developed by <span className='font-bold text-[#632ee3]'>{companyName}</span></p>
                    </div>
                    <hr className=' my-8 opacity-20' />
                    <div className='flex gap-16'>
                        <div>
                            <img src={downloadIcon} alt="" />
                            <p className=' opacity-80 mt-2'>Downloads</p>
                            <h2 className='font-extrabold text-[2.5rem]'>{downloads}M</h2>
                        </div>
                        <div>
                            <img src={ratingsIcon} alt="" />
                            <p className=' opacity-80 mt-2'>Average Ratings</p>
                            <h2 className='font-extrabold text-[2.5rem]'>{ratingAvg} </h2>
                        </div>
                        <div>
                            <img src={reviewIcon} alt="" />
                            <p className=' opacity-80 mt-2'>Total Reviews</p>
                            <h2 className='font-extrabold text-[2.5rem]'> {reviews}K</h2>
                        </div>
                    </div>
                    <button onClick={handleInstall} className='mt-5'>
                        <a className="btn flex justify-center items-center bg-[#00d390] text-white px-10 py-5">
                            Install Now ({size}MB)
                        </a>
                    </button>
                </div>
            </div>
            <hr className=' my-8 opacity-20' />

            <div>
                {/* graph chart here */}
                <RatingsGraph appDetailsData={appDetailsData} />

            </div>

            <hr className=' my-8 opacity-20' />
            <div className='space-y-4'>
                <h5 className='font-semibold text-2xl'>Description</h5>
                <p className=' details'>{description}</p>
            </div>

        </div>
    );
};

export default AppDetails;