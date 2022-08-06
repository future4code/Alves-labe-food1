import React, { useContext, useEffect, useState } from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import GlobalContext from '../../Global/GlobalContext'
import { BASE_URL } from '../../Constants/urls'
import axios from 'axios'
import { EndUser, StyledHR, DisplayCards, TituloEndUser, ParEnd, NameRest, EndRest } from './CartStyled'
import FooterMenu from '../../Components/FooterMenu/FooterMenu'
import { Button } from '@mui/material'
import { ContainerProducts, ImgProducts, TitleProduct, DescriptonText, ValueProduct, Style, ContainerButtons, Quantity, ContainerTexts } from '../../Components/CardRestaurantsDetail/CardProduts/CardProductsStyled'
import { ContainerButton, Money, Credit, Frete, Subtotal, Valor, Total, Formas, Methods, ButtonConfirm } from './CartStyled'
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

  const removeItem = (itemID) => {
    const newBruto = newCart
      .map((item) => {
        if (item.id === itemID) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }

        }
        return item;
      })
      .filter((item) => item.quantity > 0)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newBruto))
  }

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
        alert(`Seu pedido foi feito`)
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


  const newCart = JSON.parse(localStorage.getItem("cart"))
  useEffect(() => {
    let totalCart = 0;
    if (newCart?.length > 0) {
      newCart?.forEach((product) => {
        totalCart = totalCart + product.price * product.quantity
      })
      const subTotal = totalCart + restaurant?.shipping
      setTotal(subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    } else if (newCart?.length === 0) {
      setTotal(0)
    }
  }, [newCart])

  const payment = (method) => {
    setPaymentMethod(method)
  }

  const renderCart = newCart.map((product) => {
    return (
      <ContainerProducts>
        <ImgProducts src={product.photoUrl} alt="Foto do produto" />
        <ContainerTexts>
          <TitleProduct>{product.name}</TitleProduct>
          <DescriptonText>{product.description}</DescriptonText>
          <ValueProduct>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValueProduct>
        </ContainerTexts>
        <ContainerButton>
          {
            newCart.map((quant) => {
              if (quant.id === product.id) {
                return (
                  <ContainerButton>
                    <Quantity>{quant.quantity}</Quantity>
                  </ContainerButton>
                )
              } else {
                <div></div>
              }
            })
          }
          <Button onClick={() => removeItem(product.id)} >Remover</Button>
        </ContainerButton>
      </ContainerProducts>
    )
  })

  return (
    <>
      <EndUser>
        <TituloEndUser>Endereço de entrega</TituloEndUser>
        <ParEnd>{profile.address}</ParEnd>
      </EndUser>
      <>

        <NameRest>{restaurant?.name}</NameRest>
        <EndRest>{restaurant?.address}</EndRest>
        <EndRest>{restaurant?.deliveryTime}min</EndRest>

      </>
      <DisplayCards>
        {renderCart}
      </DisplayCards>

      <Frete>Frete: R$ {restaurant?.shipping},00</Frete>
      <Total>
        <Subtotal>SUBTOTAL:
        </Subtotal>
        <Valor> {total}</Valor>
      </Total>
      <Formas>Forma de pagamento</Formas>
      <StyledHR />
      <Methods>
        <Money>
        <input onClick={() => payment("money")} type="radio" name="options" id="dinheiro" value="money" />
        <label for="dinheiro">Dinheiro</label>
        </Money>
      <Credit>
        <input onClick={() => payment("creditcard")} type="radio" name="options" id="cartao" value="creditcard" />
        <label for="cartao">Cartão de Crédito</label>
        </Credit>
      </Methods>
      <ButtonConfirm>
        <button onClick={placeOrder}>Confirmar</button>
      </ButtonConfirm>
      <FooterMenu />
    </>

  )
}
