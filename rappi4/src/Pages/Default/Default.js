import React from 'react'
import LogoImgWhite from '../../Assets/logo-branco.svg'
import { ContainerPage } from './DefaultStyled'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../Routes/Coordinator'
import { useUnprotectedPage } from '../../Hooks/useUnprotectedPage'

export default function Default() {
  const navigate = useNavigate()

  useUnprotectedPage()

  setTimeout(() => goToLogin(navigate), 3000);

  return (
    <ContainerPage>
      <img src={LogoImgWhite} alt='logo rappi4' />
    </ContainerPage>
  )
}
