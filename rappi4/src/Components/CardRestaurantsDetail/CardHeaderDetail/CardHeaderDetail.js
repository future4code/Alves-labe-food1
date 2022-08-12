import React from 'react'
import { ContainerHeaderCard, ContainerTexts, ContainerTimerShipping, LogoRestaurant, TextDetails, TitleRestaurant } from './CardHeaderDetailStyled'

const CardHeaderDetail = ({ rest }) => {
    return (
        <ContainerHeaderCard>
            <LogoRestaurant src={rest.logoUrl} />
            <ContainerTexts>
                <TitleRestaurant>{rest.name} </TitleRestaurant>
                <TextDetails>{rest.category}</TextDetails>
                <ContainerTimerShipping>
                    <TextDetails>{rest.deliveryTime} min</TextDetails>
                    <TextDetails>Frete R${rest.shipping},00</TextDetails>
                </ContainerTimerShipping>
                <TextDetails>{rest.address}</TextDetails>
            </ContainerTexts>


        </ContainerHeaderCard>
    )
}

export default CardHeaderDetail