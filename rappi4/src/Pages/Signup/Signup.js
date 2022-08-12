import React, { useState } from 'react'
import { ButtonCreate, FormStyled, Logo, MainContainer } from './SignupStyled'
import LogoImg from '../../Assets/logo-future-eats-invert.svg'
import useForm from '../../Hooks/useForm'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import { goToAdressSignup } from '../../Routes/Coordinator'
import { BASE_URL } from '../../Constants/urls'
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useUnprotectedPage } from '../../Hooks/useUnprotectedPage'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify'

export default function Signup() {
      useUnprotectedPage()
    const navigate = useNavigate()
    const { form, handleChange, cleanFields } = useForm({ name: "", email: "", cpf: "", password: "" })
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    //

    const onChangePasswordConfirm = (event) => {
        setPasswordConfirmation(event.target.value)
    }

    //

    const onSubmitSignup = (event) => {
        event.preventDefault()
        if (form.password === passwordConfirmation) {
            axios
                .post(`${BASE_URL}/signup`, form)
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    toast.success("Seu Email Foi Cadastrado com sucesso")
                    cleanFields()
                    goToAdressSignup(navigate)
                })
                .catch((err) => {
                    toast.error(err.response.data.message)
                })
        } else {
            toast.error('Senha não é igual')
        }
    }


    const InputCPF = (props) => (
        <InputMask mask="999.999.999-99" value={form.cpf} onChange={handleChange}>
            {(inputProps) => <TextField
                name='cpf'
                required
                id="outlined-required"
                label="CPF"
                pattern="[0-9]{11}"
                title='Digite um CPF no formato: xxx.xxx.xxx-xx'
                placeholder='000.000.000-00'

                type='text'

            />}
        </InputMask>
    );

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleClickShowPassword2 = () => {
        setShowPassword2(!showPassword2)
    };

    return (
        <MainContainer>
            <Logo src={LogoImg} alt='logo rappi4' />
            <h4>Cadastrar</h4>
            <FormStyled onSubmit={onSubmitSignup}>
                <TextField
                inputProps={{ minLength: 4 }}
                    name='name'
                    required
                    id="outlined-required"
                    label="Nome"
                    placeholder='Nome e sobrenome'
                    onChange={handleChange}
                    value={form.name}
                    type='text'
                />
                <TextField
                    name='email'
                    required
                    id="outlined-required"
                    label="E-mail"
                    placeholder='email@email.com'
                    value={form.email}
                    onChange={handleChange}
                />
                {InputCPF()}


                <OutlinedInput
                    inputProps={{ minLength: 6 }}
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    required
                    id="outlined-required"
                    label="Senha"
                    placeholder='Mínimo 6 caracteres'
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

                <OutlinedInput
                    inputProps={{ minLength: 6 }}
                    name='password'
                    type={showPassword2 ? 'text' : 'password'}
                    required
                    id="outlined-required"
                    label="Confirmar senha"
                    placeholder='Confirme sua senha'
                    pattern="^.{6,}"
                    title='Sua senha precisa ter no mínimo 6 caracteres'
                    value={passwordConfirmation}
                    onChange={onChangePasswordConfirm}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                edge="end"
                            >
                                {showPassword2 ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />


                <ButtonCreate type='submit'>Criar</ButtonCreate>
            </FormStyled>
        </MainContainer>
    )
}
