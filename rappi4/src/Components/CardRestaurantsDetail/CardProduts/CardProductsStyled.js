import styled from "styled-components";

export const ContainerCategory = styled.section`
   display: flex;
   flex-direction: column;
`

export const TitleCategory = styled.section`
    font-size: 16;
    border-bottom: solid 1px #000;
    font-weight: 600;
`

export const ContainerCard = styled.section`
    display: flex;
    flex-direction: column;
`
export const ContainerProducts = styled.section`
    display: flex;
    border-radius: 8px;
    /* padding: 1.125rem 0 0 7.0625rem; */
    height: 7rem;
    border: solid 1px #b8b8b8;
    margin-top: 0.5rem;
`

export const ImgProducts = styled.img`
    width: 6.0625rem;
    height: 7.0375rem;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
`

export const ContainerTexts = styled.section`
    display: flex;
    flex-direction: column;
    margin: 16px;
`
export const TitleProduct = styled.h1`
    font-size: 16px;
    color: #e86e5a ;
    font-weight: 400;
    margin: 0;
`
export const DescriptonText = styled.p`
    font-size: 16px;
    color: #b8b8b8;
    margin: 0;
`
export const ValueProduct = styled.p`
    font-size: 19px;
    color: #000;
    font-weight: 400;
    margin: 0;
`

export const ButtonAdd = styled.button`
    width: 5.625rem;
    height: 1.9375rem;
    /* padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 20px; */
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: transparent;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #000;

`

export const ContainerPriceButton = styled.section`
    display: flex;
    /* justify-content: space-between; */
`