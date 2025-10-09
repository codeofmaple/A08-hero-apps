import React from 'react';
import playStoreImg from '../../src/assets/play-store.png'
import appStoreImg from '../../src/assets/appStoreImg.png'
import heroImg from '../../src/assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className=' md:pt-20 pt-10 text-center bg-[#62738210]'>
                <h1 className='font-bold text-7xl'>We Build <br /> <span className='text-transparent bg-clip-text bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)]'>Productive</span> Apps</h1>
                <p className='text-[#627382] mt-4 mb-8 text-xl md:mx-0 mx-[4.16%]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-4'>
                    <button
                        onClick={() => window.open('https://play.google.com/store', '_blank')}
                        className='btn btn-ghost border border-solid border-[#d2d2d2] px-6 py-6 font-semibold text-xl'> <img src={playStoreImg} alt="play store img" />Google Play</button>
                    <button
                        onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
                        className='btn btn-ghost border border-solid border-[#d2d2d2] px-6 py-6 font-semibold text-xl'><img src={appStoreImg} alt="app store img" />App Store</button>
                </div>
                <div className='flex justify-center pt-10 md:px-0 px-[4.16%]'>
                    <img src={heroImg} alt="a mobile with apps"/>
                </div>
                <div className='bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] py-10 md:py-20 text-white'>
                    <h2 className='pb-10 font-bold text-5xl md:px-0 px-[1%]'>Trusted by Millions, Built for You</h2>
                    <div className='flex justify-center lg:flex-row flex-col lg:gap-6 gap-10'>
                        <div className='text-center px-[4.375rem]'>
                            <p className=' opacity-80'>Total Downloads</p>
                            <h1 className='text-6xl font-extrabold py-4 '>29.6M</h1>
                            <p className=' opacity-80'>21% more than last month</p>
                        </div>
                        <div className='text-center px-[4.375rem]'>
                            <p className=' opacity-80'>Total Reviews</p>
                            <h1 className='text-6xl font-extrabold py-4 '>906K</h1>
                            <p className=' opacity-80'>46% more than last month</p>
                        </div>
                        <div className='text-center px-[4.375rem]'>
                            <p className=' opacity-80'>Active Apps</p>
                            <h1 className='text-6xl font-extrabold py-4 '>132+</h1>
                            <p className=' opacity-80'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;