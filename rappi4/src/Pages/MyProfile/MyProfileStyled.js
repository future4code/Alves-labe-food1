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
width: 22.5rem;
`

export const ContainerAdress = styled.section`
width: 22.5rem;
height: 4.125rem;
margin: 16px 0;
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
}
`

export const ColumnAdress = styled.div`
display: flex;
flex-direction: column;
`

export const DisplayCards = styled.div`
display: flex;
flex-direction: column;
`

export const Card = styled.section`
width: 328px;
height: 102px;
margin: 7px 0 0;
padding: 16px;
border-radius: 8px;
border: solid 1px #b8b8b8;
flex-direction: column;
`

export const StyledHR = styled.hr`
width: 328px;
margin: 0 0 7px;
`