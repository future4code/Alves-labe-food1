import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constants/urls'
import { Card, ColumnAdress, ContainerAdress, ContainerEdit, ContainerInfos, DisplayCards, MainContainer, StyledHR } from './MyProfileStyled'
import Edit from '../../Assets/edit.svg'
import { goToSignup } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

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
      <p>{product.restaurantName}</p>
      <p>{convertedDate}</p>
      <p>subTotal: {product.totalPrice}</p>
    </Card>
  })



  return (
    <MainContainer>
      <ContainerInfos>
        <ContainerEdit>
          <p>{profile && profile.name}</p>
          <img onClick={''} src={Edit} />
        </ContainerEdit>
        <p>{profile && profile.email}</p>
        <p>{profile && profile.cpf}</p>


      </ContainerInfos>
      <ContainerAdress>

        <ColumnAdress>
          <p>Endereço cadastrado</p>
          <p>{profile && profile.address}</p>
        </ColumnAdress>
        <img src={Edit} />
      </ContainerAdress>
      <p>Historico de Pedidos</p>
      <StyledHR />
      <DisplayCards>
        {showOrders}
      </DisplayCards>
    </MainContainer>
  )
}
