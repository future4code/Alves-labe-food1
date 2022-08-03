import React, {useContext, useEffect, useState} from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import GlobalContext from '../../Global/GlobalContext'
import { BASE_URL } from '../../Constants/urls'
import axios from 'axios'

export default function Cart() {
  const { cart , setCart} = useContext(GlobalContext)
  const [profile, setProfile] = useState({})
  const [paymentMethod, setPaymentMethod] = useState("creditcard")
  const [restaurant, setRestaurant] = useState({})

  useProtectedPage()

  const token = localStorage.getItem('token')

  useEffect(()=>{
    const newCart = JSON.parse(localStorage.getItem("cart"))
    const restaurant = JSON.parse(localStorage.getItem("restaurant"))
    
    console.log("rest", restaurant)
    setRestaurant(restaurant)
    setCart(newCart)
  },[])
  
  const placeOrder = () =>{
    const arrayProducts = cart && cart?.map((item)=>{
      return {id: item.id,
              quantity: item.quantity}
    })
    
    const body = {
      products: arrayProducts,
      paymentMethod: paymentMethod
    }

    console.log("confia que o pedido vai ser feito")
   
    axios
    .post(`${BASE_URL}/restaurants/${restaurant.id}/order`,body, {
      headers:
      {
          auth: token
      }
  })
    .then((res) => {
        console.log("deu certoooooo",res)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })

  }

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
    <div>Cart
      <h1>Cart</h1>
      <button onClick={placeOrder}>Pedir</button>
    </div>
    
  )
}
