import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constants/urls'
import { Card, ColumnAdress, ContainerAdress, ContainerEdit, ContainerInfos, DateStyle, DisplayCards, EndereçoCadastrado, MainContainer, RestaurantName, Rua, StyledHR, StyledP, TotalPrice } from './MyProfileStyled'
import Edit from '../../Assets/edit.svg'
import { goToEditAddress, goToEditProfile, goToSignup } from '../../Routes/Coordinator'
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
        console.log(res)
        setProfile(res.data.user)
      })
      .catch((err) => {
        console.log(err)
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
        console.log(res)
        setHistory(res.data.orders)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log('historico', history)

  const showOrders = history && history.map((product) => {
    const timestamp = product.createdAt
    const date = new Date(timestamp);
    const convertedDate = date.toLocaleString('pt-BR'); 
    return <Card>
      <RestaurantName>{product.restaurantName}</RestaurantName>
      <DateStyle>{convertedDate}</DateStyle>
      <TotalPrice>subTotal: {product.totalPrice}</TotalPrice>
    </Card>
  })



  return (
    <MainContainer>
      <ContainerInfos>
        <ContainerEdit>
          <p>{profile && profile.name}</p>
          <img onClick={()=> goToEditProfile(navigate)} src={Edit} />
        </ContainerEdit>
        <StyledP>{profile && profile.email}</StyledP>
        <p>{profile && profile.cpf}</p>


      </ContainerInfos>
      <ContainerAdress>

        <ColumnAdress>
          <EndereçoCadastrado>Endereço cadastrado</EndereçoCadastrado>
          <Rua>{profile && profile.address}</Rua>
        </ColumnAdress>
        <img src={Edit} onClick={()=> goToEditAddress(navigate)} />
      </ContainerAdress>
      <p>Historico de Pedidos</p>
      <StyledHR />
      <DisplayCards>
        {showOrders}
      </DisplayCards>
      <FooterMenu />
    </MainContainer>
  )
}
