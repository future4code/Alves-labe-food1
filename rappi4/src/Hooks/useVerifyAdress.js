import React, { useEffect } from 'react'
import { BASE_URL } from '../Constants/urls'
import axios from 'axios';
import { goToAdressSignup, goToFeed } from '../Routes/Coordinator';
import { useNavigate } from 'react-router-dom'

export default function useVerifyAdress() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        axios
        .get(`${BASE_URL}/profile`, {
          headers:
          {
              auth: token
          }
      })
        .then((res) => {
            if(res.data.user.hasAddress === false) {
                goToAdressSignup(navigate)
            }
        })
        .catch((err) => {
            if (token === null) {
            }
          
        })
    
    }, [])

}
