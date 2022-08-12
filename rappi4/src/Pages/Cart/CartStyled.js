import { display, flexbox } from '@mui/system';
import styled from 'styled-components'
import { Button } from '@mui/material'
import { DisplaySettings } from '@mui/icons-material';

export const DisplayCards = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
margin: 1rem;
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
        color:${props=> props.checkCart > 0 ? '#E86E5A' : "#e86e5a"};
        border: solid 1px ${props=> props.checkCart > 0 ? '#E86E5A' : "#e86e5a"};
        border-radius:8px 0px;
        margin-top: ${props=> props.checkCart > 0 ? "0px": "0px"};
   }
`

export const Frete = styled.div`
display: flex;
text-align: right;
justify-content: flex-end;
margin: 16px 16px 13px 60px;
p{ 
    width: 104px;
  height: 18px;
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

export const Total = styled.section`
display: flex;
align-items: center;
width: 100vw;
justify-content: space-between;

`

export const Subtotal = styled.p`
 margin: 15px 0 25px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
  `

export const Valor = styled.p`
margin: 5px 16px 24px 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: #e86e5a;
`

export const Formas = styled.p`
width: 328px;
  height: 18px;
  margin: 6px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
`

export const EndUser = styled.div`
width:91.3vw;
margin: 0 0 16px;
padding: 1rem;
background-color: #eee;
`

export const Money = styled.div`
display: flex;
gap: 0.4rem;
input{ 
  font-size: 2rem;
}
`

export const Credit = styled.div`
display: flex;
gap: 0.4rem;
`

export const Methods = styled.div`
display: flex;
flex-direction: column;
margin-left: 0.8rem;
gap: 0.4rem;
margin-bottom: 0.9rem;
`

export const ButtonConfirm = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
button{
  background-color: #e86e5a;
  font-family: "Roboto";
    font-size: 16px;
    color: #000000;
    border: none;
    cursor: pointer;
    background-repeat: repeat;
    width: 20.5rem;
    height: 2.625rem;
    padding: 0.75rem 1rem;
}
    
    
    
`


export const TituloEndUser = styled.p`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const ParEnd = styled.p`
width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 0 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
`

export const NameRest = styled.p`
width: 20.5rem;
height: 1.125rem;
margin: 16px 16px 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #e86e5a;
`

export const EndRest = styled.p`
width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 1rem;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const StyledHR = styled.hr`
width: 21.3rem;
`

export const MainContainer = styled.section`
width: 100vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
`