import styled from "styled-components";
import Search from '../../Assets/Search.svg'

export const MainContainer = styled.section`
width: 100vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
`

export const DivCategory = styled.section`
display: flex;
flex-direction: row;
overflow: auto;
gap: 1.125rem;
width: 22.5rem;
min-height: 1.625rem;
margin: 0.5rem 0 0;
padding: 0.75rem 0 0.75rem 1rem;
overflow-y: hidden;
margin-bottom: 0.5rem;
`

export const SearchBar = styled.input`
box-sizing: border-box;
width: 18.4375rem;
min-height: 3.25rem;
background: #FFFFFF;
border: 0.0625rem solid #E8E6EA;
border-radius: 3px;
outline: none;
padding-left: 2.5rem;
background: url(${Search});
background-position: 0.625rem;
background-repeat: no-repeat;
background-size: 1.0862rem 1.0862rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 150%;
color: rgba(0, 0, 0, 0.4);
margin-top: 1rem;
margin: 3px 0 3px 15.3px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #8a8383;
`
export const CategoryP = styled.button`
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: #000;
border: none;
background-color: transparent;
&:focus {
    color: #e86e5a;
}
`

export const DisplayCards = styled.section`
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 3.125rem;
`

export const ContainerAlert = styled.section`
width: 99%;
height: 118px;
background-color: #e86e5a;
position: fixed;
bottom: 48px;
display: flex;
flex-direction: row;
`

export const OrderTitle = styled.p`
margin: 0 0 0 24px;
font-family: Roboto;
font-size: 16px;
color: #fff;
`

export const RestaurantOrder = styled.p`
margin: 8px 0 8px 24px;
font-family: Roboto;
font-weight: 600;
font-size: 16px;
`

export const DivInformations = styled.div`
display: flex;
flex-direction: column;
margin-top: 24px;
`

export const OrderPrice = styled.p`
margin: 0 0 0 24px;
font-family: Roboto;
font-size: 16px;
font-weight: 600;
`

export const DivClock = styled.div`
margin-top: 34px;
margin-left: 24px;
`