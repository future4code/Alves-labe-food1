import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToRestaurants } from '../../Routes/Coordinator'
import { ContainerCards, Logo, DivName, Divs, POne, PTwo } from './CardFeedStyled'

export default function CardFeed(props) {
  const navigate = useNavigate()
  return (
    <ContainerCards onClick={() => goToRestaurants(navigate, props.restaurant.id)}>
      <Logo>
        <img src={props.restaurant.logoUrl} />
      </Logo>
      <DivName>
        <p>{props.restaurant.name}</p>
      </DivName>
      <Divs>
        <POne>{props.restaurant.deliveryTime}min </POne>
        <PTwo>Frete {props.restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </PTwo>
      </Divs>
    </ContainerCards>
  )
}

