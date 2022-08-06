import styled from "styled-components";
import { Button } from '@mui/material'

export const ContainerCategory = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
`
export const TitleCategory = styled.section`
    border-bottom: solid 1px #000;
    p{
    font-weight: 600;
    font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
}
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
    margin-right: 1rem;
`
export const ContainerTexts = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
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

export const ContainerButton = styled.section`
    display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
   height: 101%;
   width: 5.625rem;
   position:relative;
   top:-1px;
   right: -1px;
   .MuiButton-root{
        text-transform:lowercase;
        background: 'transparent';
        padding: 4px;
        font-size: 12px;
        width: 90px;
        letter-spacing: -0.29px;
        color:${props=> props.checkCart > 0 ? '#E86E5A' : "#000000"};
        border: solid 1px ${props=> props.checkCart > 0 ? '#E86E5A' : "#000000"};
        border-radius:8px 0px;
        margin-top: ${props=> props.checkCart > 0 ? "0px": "91%"};
   }
`


export const Quantity = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    border: solid 1px #E86E5A;
    color:#E86E5A;
    font-size: 16px;
    letter-spacing: -0.39px;
    border-radius:0px 8px;
    width: 32px;
    height: 32px;
`

export const Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    height: '170px',
    bgcolor: '#fff',
    boxShadow: 1,
    p: '31px 16px 21px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
};

export const MappedDiv = styled.div`

`
