import axios from 'axios';
import { useEffect, useState } from 'react';

const MINIMUM_MS = 300;

const useApps = () => {
    const [appsData, setAppsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        Promise.all([
            axios('../appsData.json').then(res => res.data),
            new Promise(res => setTimeout(res, MINIMUM_MS))
        ])
            .then(([data]) => setAppsData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { appsData, loading, error };
};

export default useApps;