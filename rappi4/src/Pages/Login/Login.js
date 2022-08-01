import React from 'react'
import { ButtonCreate, ClickHere, FormStyled, H4Styled, Logo, MainContainer, SpanClick } from './LoginStyled'
import LogoImg from '../../Assets/logo-future-eats-invert.svg'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import useForm from '../../Hooks/useForm'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {useUnprotectedPage} from '../../Hooks/useUnprotectedPage'
import {goToSignup, goToFeed} from '../../Routes/Coordinator'

export default function Login() {
 // useUnprotectedPage()
  const { form, handleChange } = useForm({ email: "", password: "" })
  const navigate = useNavigate()  

  const onSubmitLogin = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/login`, form)
    .then((res) => {
      alert("Você logou")
      console.log(res)
      localStorage.setItem('token', res.data.token)
      goToFeed(navigate)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  console.log(form)

  return (
    <MainContainer>
      <Logo src={LogoImg} />
      <H4Styled>Entrar</H4Styled>

      <FormStyled onSubmit={onSubmitLogin}>
        <TextField
          style = {{width: 340}}
          name='email'
          required
          id="outlined-required"
          label="Email"
          placeholder='email@email.com'
          value={form.email}
          onChange={handleChange}
        />
        <TextField
         style = {{width: 340}}
          name='password'
          required
          id="outlined-required"
          label="Senha"
          placeholder='senha'
          value={form.password}
          onChange={handleChange} 
          type='password'
        />
        
        <ButtonCreate>Entrar</ButtonCreate>
       </FormStyled>
       <ClickHere>Não possui cadastro? <SpanClick onClick={() => goToSignup(navigate)}>Clique aqui</SpanClick>.</ClickHere>

    </MainContainer>
  )
}
