import styled from "styled-components";

export const MainContainer = styled.section`
width: 100vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerInfos = styled.section`
`
export const ContainerEdit = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 21.4rem;
img{
    cursor: pointer;
}
`

export const ContainerAdress = styled.section`
width: 21.4rem;
height: 4.125rem;
margin: 1rem 0;
background-color: #eee;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 16px 16px;
margin-bottom: 16px;
img{
height: 1.5rem;
width: 1.5rem;
cursor: pointer;
}
`

export const ColumnAdress = styled.div`
display: flex;
flex-direction: column;
margin-left: 8px;
`

export const DisplayCards = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`

export const Card = styled.section`
height: 6.375rem;
margin: 7px 0 0;
padding: 1rem;
border-radius: 8px;
border: solid 1px #b8b8b8;
flex-direction: column;
`

export const StyledHR = styled.hr`
width: 20.5rem;
margin: 0 0 0.4375rem;
`

export const StyledP = styled.p`
margin: 0;
font-family: Roboto;
font-size: 16px;
font-weight: 600;
align-self: flex-start;
margin-left: 16px;
`

export const EndereçoCadastrado = styled.p`
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

export const Rua = styled.p`
margin: 8px 0 0;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
`

export const RestaurantName = styled.p`
margin: 0 0 9px;
font-family: Roboto;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #e86e5a;
`

export const DateStyle = styled.p`
margin: 9px 0 7px;
font-family: Roboto;
font-size: 15px;
`

export const TotalPrice = styled.p`
margin: 7px 0 0;
font-family: Roboto;
font-size: 18px;
font-weight: bold;
`

export const ContainerLogout = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 21.4rem;
img{
    cursor: pointer;
    height: 22px;
}`