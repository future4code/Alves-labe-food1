import { useEffect, useState } from 'react'
import axios from 'axios'
import { HEADER } from '../Constants/urls'


export default function useRequestData(inicialData, url, refresh) {
    const [data, setData] = useState(inicialData)

    useEffect(() => {
        // setIsLoading(true)
        axios.get(url, HEADER)
            .then((res) => {
                // console.log(res)
                setData(res.data.restaurants)
                // setIsLoading(false)
            }).catch((err) => {
                // setIsLoading(false)
                console.log(err)
            })
    }, [url, refresh])
    return (data)
}