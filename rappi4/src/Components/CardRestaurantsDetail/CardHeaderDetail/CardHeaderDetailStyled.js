import styled from "styled-components";

export const ContainerHeaderCard = styled.section`
    display: flex;
    flex-direction: column;
`
export const LogoRestaurant = styled.img`
    width: 100%;
    height: 7.5rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    object-fit: cover;
    align-self: center;
`
export const ContainerTexts = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
`

export const TitleRestaurant = styled.h1`
    font-size: 16px;
    color: #e86e5a;
    font-weight: 400;
    margin: 0;
    margin-bottom: 0.5rem;
    `

export const TextDetails = styled.p`
    color: #b8b8b8;
    font-size: 16px;
    margin: 0;
    margin-bottom: 0.5rem;
`

export const ContainerTimerShipping = styled.section`
    display: flex;
    width: 50%;
    justify-content: space-between;
`