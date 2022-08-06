import React from 'react'
import Clock from '../../Assets/clock.svg'
import { ContainerAlert, DivClock, DivInformations, OrderPrice, OrderTitle, RestaurantOrder } from './ModalAlertStyled'

export default function ModalAlert(props) {
  return (
    <ContainerAlert>
  
    <DivClock>
      <img src={Clock} />
    </DivClock>

    <DivInformations>
      <OrderTitle>Pedido em andamento</OrderTitle>
      <RestaurantOrder>{props.restaurantName}</RestaurantOrder>
      <OrderPrice>SUBTOTAL {props.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</OrderPrice>
    </DivInformations>

  </ContainerAlert>
  )
}
