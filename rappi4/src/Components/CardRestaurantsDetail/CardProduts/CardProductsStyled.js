import styled from "styled-components";

export const ContainerCategory = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
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
    height: 7rem;
    border: solid 1px #b8b8b8;
    margin-top: 0.5rem;
    width: 100%;
`
export const ImgProducts = styled.img`
    width: 6.0625rem;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
    margin-right: 16px;
`
export const ContainerTexts = styled.section`
    display: flex;
    flex-direction: column;
    padding-left: 5px;
`
export const TitleProduct = styled.h1`
    font-size: 16px;
    color: #e86e5a ;
    font-weight: 400;
    margin: 0;
    margin-bottom: 6px;
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
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: transparent;
    border: 1px solid #000;
    /* position: absolute;
    right: 23px; */
    align-self: flex-end;

`
export const ContainerPriceButton = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`