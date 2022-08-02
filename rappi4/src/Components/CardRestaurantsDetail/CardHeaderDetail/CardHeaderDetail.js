import React from 'react'
import { ContainerHeaderCard, LogoRestaurant, TextDetails, TitleRestaurant } from './CardHeaderDetailStyled'

const CardHeaderDetail = ({rest}) => {
    console.log(rest)
    return (
    <ContainerHeaderCard>
    <LogoRestaurant src={rest.logoUrl} />
    <TitleRestaurant>{rest.name} </TitleRestaurant>
    <TextDetails>{rest.category}</TextDetails>
    <TextDetails>{rest.deliveryTime}</TextDetails>
    <TextDetails>{rest.shipping}</TextDetails>
    <TextDetails>{rest.address}</TextDetails>
    
    </ContainerHeaderCard>
  )
}

export default CardHeaderDetail