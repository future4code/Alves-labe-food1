import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


export default function useRequestData(inicialData, url, refresh) {
    const [data, setData] = useState(inicialData)

    useEffect(() => {
        if (window.location.pathname === "/default") {
        } else {
        axios.get(url, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setData(res.data.restaurants)
            }).catch((err) => {   
            })
        }
    }, [url, refresh])
    return (data)
}