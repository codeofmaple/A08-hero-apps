import React from 'react';
import Banner from '../../components/Banner';
import TopApp from '../../components/TopApp';
import useApps from '../../hooks/useApps';
import Spinner from '../../components/Spinner/Spinner';


const Home = () => {
    const gottenAppData = useApps()
    const { loading, error } = gottenAppData;

    if (loading) return <Spinner />;
    if (error) return <ErrorApp />;

    return (
        <div>
            <Banner></Banner>
            <TopApp></TopApp>
        </div>
    );
};

export default Home;