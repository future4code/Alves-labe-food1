import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../Constants/urls'
import GlobalContext from './GlobalContext'
import useRequestData from '../Hooks/useRequestData'

const GlobalState = (props) => {
  const [refresh, setRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const restaurants = useRequestData([], `${BASE_URL}/restaurants`, refresh, setIsLoading)


    
    const Provider = GlobalContext.Provider

    const values = {
        restaurants
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState