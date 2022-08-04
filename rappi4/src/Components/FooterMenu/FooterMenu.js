import React from 'react'
import { Container} from './FooterMenuStyled'
import Home from '../../Assets/homepage.svg'
import Cart from '../../Assets/shopping-cart.svg'
import Profile from '../../Assets/avatar.svg'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToCart, goToMyProfile } from '../../Routes/Coordinator'

export default function FooterMenu() {
  const navigate = useNavigate()
  return (
    <Container>
        <img src={Home} alt="ícone home" onClick={() => goToFeed(navigate)}/>
        <img src={Cart} alt="ícone cart" onClick={() => goToCart(navigate)}/>
        <img src={Profile} onClick={() => goToMyProfile(navigate)} alt="ícone perfil"/>
    </Container>
  )
}
