import React from 'react'
import { Container} from './FooterMenuStyled'
import Home from '../../Assets/homepage.svg'
import Cart from '../../Assets/shopping-cart.svg'
import Profile from '../../Assets/avatar.svg'

export default function FooterMenu() {
  return (
    <Container>
        <img onClick={''} src={Home}/>
        <img src={Cart}/>
        <img src={Profile}/>
    </Container>
  )
}
