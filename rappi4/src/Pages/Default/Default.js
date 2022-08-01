import React from 'react'
import LogoImgWhite from '../../Assets/logo-branco.svg'
import { ContainerPage } from './DefaultStyled'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../Routes/Coordinator'

export default function Default() {
  const navigate = useNavigate()

  setTimeout(() => goToLogin(navigate), 2000);

  return (
    <ContainerPage>
      <img src={LogoImgWhite}/>
    </ContainerPage>
  )
}
