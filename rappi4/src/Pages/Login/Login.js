import React, { useState } from 'react'
import { ButtonCreate, ClickHere, FormStyled, H4Styled, Logo, MainContainer, SpanClick } from './LoginStyled'
import LogoImg from '../../Assets/logo-future-eats-invert.svg'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import useForm from '../../Hooks/useForm'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useUnprotectedPage } from '../../Hooks/useUnprotectedPage'
import { goToSignup, goToFeed } from '../../Routes/Coordinator'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify'

export default function Login() {
  useUnprotectedPage()
  const { form, handleChange } = useForm({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const onSubmitLogin = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  return (
    <MainContainer>
      <Logo src={LogoImg} />
      <H4Styled>Entrar</H4Styled>

      <FormStyled onSubmit={onSubmitLogin}>
        <TextField
          style={{ width: 340 }}
          name='email'
          required
          id="outlined-required"
          label="Email"
          placeholder='email@email.com'
          value={form.email}
          onChange={handleChange}
        />
        <OutlinedInput
          fullWidth 
          inputProps={{ minLength: 6 }}
          name='password'
          type={showPassword ? 'text' : 'password'}
          required
          id="outlined-required"
          label="Senha"
          placeholder='Senha'
          pattern="^.{6,}"
          title='Sua senha precisa ter no mínimo 6 caracteres'
          value={form.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />

        <ButtonCreate>Entrar</ButtonCreate>
      </FormStyled>
      <ClickHere>Não possui cadastro? <SpanClick onClick={() => goToSignup(navigate)}>Clique aqui</SpanClick>.</ClickHere>

    </MainContainer>
  )
}
