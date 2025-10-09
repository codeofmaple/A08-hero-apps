import React, { useEffect, useState } from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingStarIcon from '../../assets/icon-ratings.png'
import { toast } from 'react-toastify';
import useApps from '../../hooks/useApps';
import Spinner from '../../components/Spinner/Spinner';

const InstalledApps = () => {
    const [installedList, setInstalledList] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect(() => {
        const existingInstalledList = JSON.parse(localStorage.getItem('installedList'));
        if (existingInstalledList) setInstalledList(existingInstalledList);
    }, [])

    const sortedApps = (() => {
        if (sortOrder === 'value-descending') {
            return [...installedList].sort((a, b) => b.downloads - a.downloads)
        } else if (sortOrder === 'value-ascending') {
            return [...installedList].sort((a, b) => a.downloads - b.downloads)
        } else {
            return installedList
        }
    })()

    const handleUninstall = (id, title) => {
        const existingInstalledList = JSON.parse(localStorage.getItem('installedList'));
        let updatedInstalledList = existingInstalledList.filter(app => app.id !== id)

        setInstalledList(prev => prev.filter(app => app.id !== id))
        localStorage.setItem('installedList', JSON.stringify(updatedInstalledList))

        toast.success(`${title} Uninstalled Successfully!`);

    }

    const gottenAppData = useApps()
    const { loading, error } = gottenAppData;

    if (loading) return <Spinner />;
    if (error) return <ErrorApp />;

    return (
        <div className='p-[4.16%] '>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='font-bold text-5xl'>Our All Applications</h2>
                <p className='details'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between  mb-5'>
                <h4 className='font-semibold text-2xl '>({installedList.length}) Apps Found</h4>
                <div>
                    {/* sort btn */}
                    <select
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                        className="select appearance-none bg-transparent"
                    >
                        <option value='none'>Sort By Download</option>
                        <option value='value-descending'>High-Low</option>
                        <option value='value-ascending'>Low-High</option>
                    </select>

                </div>
            </div>
            {/* installed cards */}
            <div className='flex flex-col gap-4'>
                {/* each cards */}
                {sortedApps.map(app => (
                    <div key={app.id} className='flex md:flex-row flex-col justify-between p-4 bg-white rounded-sm items-center'>
                        <div className='flex md:flex-row flex-col gap-4 '>
                            <img src={app.image} alt="" className='size-20 rounded-lg md:self-auto self-center' />
                            <div>
                                <h6 className='flex md:justify-normal justify-center'> {app.title}</h6>
                                <div className='flex  gap-4 md:items-center mt-4'>
                                    <div className='flex items-center gap-1'>
                                        <img src={downloadIcon} alt="" className='size-4' />
                                        <p>{app.downloads}M</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img src={ratingStarIcon} alt="" className='size-4' />
                                        <p>{app.ratingAvg} </p>
                                    </div>
                                    <p>{app.size} MB</p>
                                </div>
                            </div>
                        </div>
                        <button className='md:w-fit w-full md:mt-0 mt-4' onClick={() => handleUninstall(app.id, app.title)}>
                            <a className="btn flex justify-center items-center bg-[#00d390] text-white">
                                Uninstall
                            </a>
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default InstalledApps;