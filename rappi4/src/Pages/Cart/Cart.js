import React, {useContext, useEffect, useState} from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import GlobalContext from '../../Global/GlobalContext'
import { BASE_URL } from '../../Constants/urls'
import axios from 'axios'

export default function Cart() {
  const { cart , setCart} = useContext(GlobalContext)
  const [profile, setProfile] = useState({})

  useProtectedPage()

  useEffect(()=>{
    const newCart = JSON.parse(localStorage.getItem("cart"))
    const restaurant = JSON.parse(localStorage.getItem("restaurant"))
    
    console.log("rest", restaurant)
    setCart(newCart)
  },[])

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
        setProfile(res.data.user)
    })
    .catch((err) => {
      console.log(err)
    })
}, [])

  console.log("cart na tela carrinho", cart)
  console.log("perfil",profile)
  
  return (
    <div>Cart</div>
  )
}
