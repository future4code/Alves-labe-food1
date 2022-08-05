import styled from "styled-components";

export const Container = styled.div`
width: 375px;
height: 49px;
position: fixed;
display: flex;
flex-direction: row;
justify-content: space-evenly;
bottom: 0;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
img {
width: 27px;
height: 27px;
object-fit: contain;
padding: 11px 46px;
cursor: pointer;
}
`