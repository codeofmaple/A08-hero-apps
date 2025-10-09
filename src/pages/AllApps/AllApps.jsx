import React, { useEffect, useState } from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingStarIcon from '../../assets/icon-ratings.png'
import useApps from '../../hooks/useApps';
import AppNotFound from '../NotFound/AppNotFound';
import { useNavigate } from 'react-router';
import Spinner from '../../components/Spinner/Spinner';

const AllApps = () => {
    const navigate = useNavigate()
    const gottenAppData = useApps()
    const { appsData, loading, error } = gottenAppData;

    const [search, setSearch] = useState('');
    const term = search.toLowerCase().trim();

    const [searchedApps, setSearchedApps] = useState(appsData);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        if (!appsData) return;
        setSearching(true);
        const timer = setTimeout(() => {
            const filtered = term
                ? appsData.filter(app => app.title.toLowerCase().includes(term))
                : appsData;
            setSearchedApps(filtered);
            setSearching(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [search, appsData, term]);

    if (loading) return <Spinner />;
    if (error) return <ErrorApp />;

    return (
        <div>
            <div className='lg:py-20 pt-10'>
                <div className='text-center space-y-4 mb-10'>
                    <h2 className='font-bold text-5xl'>Our All Applications</h2>
                    <p className='details md:px-0 px-[2%]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                {/* search btn */}
                <div className='flex md:flex-row flex-col md:gap-0 gap-4 justify-between mx-[4.16%] mb-4'>
                    <h4 className='font-semibold text-2xl '>({searchedApps.length}) Apps Found</h4>
                    <div className=''>
                        <label className="input bg-transparent w-full md:w-[25rem]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="search" required placeholder="search Apps" />
                        </label>
                    </div>
                </div>
                {/* top app cards */}
                <div className='mx-[4.16%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10'>
                    {
                        searching ? (
                            <div className='col-span-4 flex justify-center'>
                                <Spinner />
                            </div>
                        ) : searchedApps.length > 0 ? (
                            searchedApps.map(app => (
                                <div onClick={() => navigate(`/apps/${app.id}`)} key={app.id} className='p-4 bg-white rounded-sm'>
                                    <img src={app.image} alt="app-img" className='rounded-lg w-full' />
                                    <h6 className='text-xl font-medium my-4'>{app.title}</h6>
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
                        ) : (
                            <div className='col-span-4'>
                                <AppNotFound />
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default AllApps;