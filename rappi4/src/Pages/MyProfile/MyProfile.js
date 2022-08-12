import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constants/urls'
import { Card, ColumnAdress, ContainerAdress, ContainerEdit, ContainerInfos, ContainerLogout, DateStyle, DisplayCards, EndereçoCadastrado, MainContainer, RestaurantName, Rua, StyledHR, StyledP, TotalPrice } from './MyProfileStyled'
import Edit from '../../Assets/edit.svg'
import { goToDefault, goToEditAddress, goToEditProfile } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import FooterMenu from '../../Components/FooterMenu/FooterMenu'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import Logout from '../../Assets/logout.svg'
import { toast } from 'react-toastify'

export default function MyProfile() {
  const [profile, setProfile] = useState()
  const [history, setHistory] = useState()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useProtectedPage()

  useEffect(() => {
    if (token === null) {

    } else {
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
        toast.error(err.response.data.message)
      })
    }
  }, [])

  useEffect(() => {
    if (token === null) {

    } else {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers:
        {
          auth: token
        }
      })
      .then((res) => {
        setHistory(res.data.orders)
      })
      .catch((err) => {
        if (token === null) {
        }
        toast.error(err.response.data.message)
      })
    }
  }, [])

  const showOrders = history && history.map((product) => {
    const timestamp = product.createdAt
    const date = new Date(timestamp);
    const convertedDate = date.toLocaleString('pt-BR');
    return <Card>
      <RestaurantName>{product.restaurantName}</RestaurantName>
      <DateStyle>{convertedDate}</DateStyle>
      <TotalPrice>SUBTOTAL: {product.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TotalPrice>
    </Card>
  })

  const clearToken = () => {
    localStorage.clear("token")
    goToDefault(navigate)
  }

  return (
    <MainContainer>
      <ContainerInfos>
        <ContainerEdit>
          <StyledP>{profile && profile.name}</StyledP>
          <img onClick={() => goToEditProfile(navigate)} alt='edit button' src={Edit} />
        </ContainerEdit>
        <StyledP>{profile && profile.email}</StyledP>
        <ContainerLogout>
        <StyledP>{profile && profile.cpf}</StyledP>
        <img src={Logout} alt='logout button' onClick={clearToken}/>
        </ContainerLogout>
      </ContainerInfos>
      <ContainerAdress>
        <ColumnAdress>
          <EndereçoCadastrado>Endereço cadastrado</EndereçoCadastrado>
          <Rua>{profile && profile.address}</Rua>
        </ColumnAdress>
        <img src={Edit} alt='edit button' onClick={() => goToEditAddress(navigate)} />
      </ContainerAdress>
      <DisplayCards>
        <StyledP>Histórico de Pedidos</StyledP>
        <StyledHR />
        {showOrders}
      </DisplayCards>
      <FooterMenu />
    </MainContainer>
  )
}
