import React, { useContext, useEffect, useState } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import GlobalContext from '../../Global/GlobalContext'
import { BASE_URL } from '../../Constants/urls'
import axios from 'axios'
import { EndUser, StyledHR, TituloEndUser, ParEnd, NameRest, EndRest } from './CartStyled'
import FooterMenu from '../../Components/FooterMenu/FooterMenu'
export default function Cart() {
  const { cart, setCart, alert, setAlert } = useContext(GlobalContext)
  const [profile, setProfile] = useState({})
  const [paymentMethod, setPaymentMethod] = useState("")
  const [restaurant, setRestaurant] = useState({})
  const [total, setTotal] = useState(0)

  useProtectedPage()

  const token = localStorage.getItem('token')

  useEffect(() => {
    const newCart = JSON.parse(localStorage.getItem("cart"))
    const restaurant = JSON.parse(localStorage.getItem("restaurant"))

    setRestaurant(restaurant)
    setCart(newCart)
  }, [])


  const placeOrder = () => {
    const arrayProducts = cart && cart?.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity
      }
    })

    const body = {
      products: arrayProducts,
      paymentMethod: paymentMethod
    }

    axios
      .post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
        headers:
        {
          auth: token
        }
      })
      .then((res) => {
        setAlert(true)
        console.log("pedido feito", res)
      })
      .catch((err) => {
        console.log(err.response.data.message)
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



  useEffect(() => {
    let totalCart = 0;
    if (cart?.length > 0) {
      cart?.forEach((product) => {
        totalCart = totalCart + product.price * product.quantity
      })
      const subTotal = totalCart + restaurant?.shipping
      setTotal(subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    } else if (cart?.length === 0) {
      <p>Não tem</p>
    }
  }, [cart])


  const payment = (method) => {
    setPaymentMethod(method)
  }

  return (
    <div>
      <EndUser>
        <TituloEndUser>Endereço de entrega</TituloEndUser>
        <ParEnd>{profile.address}</ParEnd>
      </EndUser>
      <>
        <NameRest>{restaurant?.name}</NameRest>
        <EndRest>{restaurant?.address}</EndRest>
        <EndRest>{restaurant?.deliveryTime}min</EndRest>
      </>
      
      <p>Frete: R$ {restaurant?.shipping},00</p>
      <p>SUBTOTAL: {total}</p>
      <p>Forma de pagamento</p>
      <StyledHR />

      <input onClick={() => payment("money")} type="radio" name="options" id="dinheiro" value="money" />
      <label for="dinheiro">Dinheiro</label>
      <input onClick={() => payment("creditcard")}type="radio" name="options" id="cartao" value="creditcard" />
      <label for="cartao">Cartão de Crédito</label>


      <button onClick={placeOrder}>Confirmar</button>
      <FooterMenu />
    </div>

  )
}
