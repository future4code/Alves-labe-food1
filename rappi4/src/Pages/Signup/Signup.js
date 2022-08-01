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
import {useUnprotectedPage} from '../../Hooks/useUnprotectedPage'

export default function Signup() {
//   useUnprotectedPage()
    const navigate = useNavigate()
    const { form, handleChange, cleanFields } = useForm({ name: "", email: "", cpf: "", password: "" })
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

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
                    console.log(res)
                    localStorage.setItem('token', res.data.token)
                    alert("Seu Email Foi Cadastrado com sucesso")
                    cleanFields()
                    goToAdressSignup(navigate)
                })
                .catch((err) => {
                    alert(err.response.data.message)
                    console.log(err.response.data)
                })
        } else {
            alert('Senha não é igual')
        }
    }


    const InputCPF = (props) => (
        <InputMask mask="999.999.999-99" value={form.cpf} onChange={handleChange}>
            {(inputProps) => <TextField
                name='cpf'
                required
                id="outlined-required"
                label="CPF"
                //pattern="/^(\d{3}\.){2}\d{3}\-\d{2}$/"
                pattern="[0-9]{11}"
                title='Digite um CPF no formato: xxx.xxx.xxx-xx'
                placeholder='000.000.000-00'

                type='text'

            />}
        </InputMask>
    );

    return (
        <MainContainer>
            <Logo src={LogoImg} alt='logo rappi4' />
            <h4>Cadastrar</h4>
            <FormStyled onSubmit={onSubmitSignup}>
                <TextField
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
                <TextField
                    inputProps={{ minLength: 6 }}
                    name='password'
                    type='password'
                    required
                    id="outlined-required"
                    label="Senha"
                    placeholder='Mínimo 6 caracteres'
                    pattern="^.{6,}"
                    title='Sua senha precisa ter no mínimo 6 caracteres'
                    value={form.password}
                    onChange={handleChange}
                />
                <TextField
                    inputProps={{ minLength: 6 }}
                    type='password'
                    required
                    id="outlined-required"
                    label="Confirmar"
                    placeholder='Confirme a senha anterior'
                    title='Sua senha precisa ter no mínimo 6 caracteres'
                    pattern={"^.{6,}"}
                    onChange={onChangePasswordConfirm}
                />

                <ButtonCreate type='submit'>Criar</ButtonCreate>
            </FormStyled>
        </MainContainer>
    )
}
