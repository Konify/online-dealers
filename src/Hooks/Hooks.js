import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios'


export function useMakeRequest(id) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [data, setData] = useState(null);

    async function makeReq(){
        setLoading(true)
        try {
            const respond = await axios(`http://localhost:5000/api/v1/products/${id}`).then(res => res)
            if(respond.data){
                setLoading(false);
                setData(respond.data);
            }
        } catch (error) {
            setLoading(false);
            setMessage('Some thing wen wraong!');
        }
    }

    useEffect(() => {
        makeReq()
    }, [id])
    
    return {loading, data, message}
}


export function UseMakePostRequest(data, path) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [resData, setResData] = useState(null);

    async function makeReq(){
        setLoading(true)
        try {
            const respond = data && await axios(path, data).then(res => res)
            if(respond.data){
                setLoading(false);
                setResData(respond.data);
            }
        } catch (error) {
            setLoading(false);
            setMessage('Some thing wen wraong!');
        }
    }

    useEffect(() => {
        makeReq()
    }, [data])
    
    return {loading, resData, message}
}


