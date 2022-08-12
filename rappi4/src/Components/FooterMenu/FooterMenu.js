import React from 'react'
import { Container} from './FooterMenuStyled'
import Home from '../../Assets/homepage.svg'
import Cart from '../../Assets/shopping-cart.svg'
import Profile from '../../Assets/avatar.svg'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToCart, goToMyProfile } from '../../Routes/Coordinator'
import HomeOrange from '../../Assets/homepage-orange.svg'
import CartOrange from '../../Assets/shopping-cart-orange.svg'
import ProfileOrange from '../../Assets/avatar-orange.svg'

export default function FooterMenu() {
  const navigate = useNavigate()

  const renderHomeImage = () => {
    if (window.location.pathname.includes("/feed")) {
      return HomeOrange
    } else {
      return Home
    }
  }

  const renderCartImage = () => {
    if (window.location.pathname.includes("/carrinho")) {
      return CartOrange
    } else {
     return Cart
    }
  }

  const renderProfileImage = () => {
    if (window.location.pathname.includes("/perfil")) {
      return ProfileOrange
    } else {
      return Profile
    }
  }



  return (
    <Container>
        <img src={renderHomeImage()} alt="ícone home" onClick={() => goToFeed(navigate)}/>
        <img src={renderCartImage()} alt="ícone cart" onClick={() => goToCart(navigate)}/>
        <img src={renderProfileImage()} onClick={() => goToMyProfile(navigate)} alt="ícone perfil"/>
    </Container>
  )
}
