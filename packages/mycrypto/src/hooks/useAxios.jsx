import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url);
                setResponse(res);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return [response, error, loading];
}

export default useAxios;