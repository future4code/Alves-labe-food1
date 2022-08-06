import { useEffect, useState } from 'react'
import axios from 'axios'
import { HEADER } from '../Constants/urls'


export default function useRequestData(inicialData, url, refresh) {
    const [data, setData] = useState(inicialData)

    useEffect(() => {
        // setIsLoading(true)
        if (window.location.pathname === "/default") {
        } else {
        axios.get(url, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                // console.log(res)
                setData(res.data.restaurants)
                // setIsLoading(false)
            }).catch((err) => {
                // setIsLoading(false)
                
            })
        }
    }, [url, refresh])
    return (data)
}