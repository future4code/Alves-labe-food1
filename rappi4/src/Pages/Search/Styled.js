import styled from "styled-components";
import Search from '../../Assets/Search.svg'

export const MainContainer = styled.section`
width: 100vw;
height: 100vh;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
`

export const DivCategory = styled.section`
display: flex;
flex-direction: row;
overflow: auto;
gap: 4px;
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