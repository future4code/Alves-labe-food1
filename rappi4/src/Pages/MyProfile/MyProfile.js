import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constants/urls'
import { Card, ColumnAdress, ContainerAdress, ContainerEdit, ContainerInfos, DateStyle, DisplayCards, EndereçoCadastrado, MainContainer, RestaurantName, Rua, StyledHR, StyledP, TotalPrice } from './MyProfileStyled'
import Edit from '../../Assets/edit.svg'
import { goToEditAddress, goToEditProfile } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import FooterMenu from '../../Components/FooterMenu/FooterMenu'

export default function MyProfile() {
  const [profile, setProfile] = useState()
  const [history, setHistory] = useState()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
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
        alert(err.response.data.message)
      })
  }, [])

  useEffect(() => {
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
        alert(err.response.data.message)
      })
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

  return (
    <MainContainer>
      <ContainerInfos>
        <ContainerEdit>
          <StyledP>{profile && profile.name}</StyledP>
          <img onClick={() => goToEditProfile(navigate)} src={Edit} />
        </ContainerEdit>
        <StyledP>{profile && profile.email}</StyledP>
        <StyledP>{profile && profile.cpf}</StyledP>
      </ContainerInfos>
      <ContainerAdress>
        <ColumnAdress>
          <EndereçoCadastrado>Endereço cadastrado</EndereçoCadastrado>
          <Rua>{profile && profile.address}</Rua>
        </ColumnAdress>
        <img src={Edit} onClick={() => goToEditAddress(navigate)} />
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
