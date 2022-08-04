import React, { useEffect, useState } from 'react'
import { ButtonCreate, FormStyled, MainContainer } from './EditProfileStyled'
import { BASE_URL } from '../../Constants/urls'
import useForm from '../../Hooks/useForm'
import { TextField } from '@mui/material'
import axios from 'axios'

export default function EditProfile() {
  const { form, handleChange, cleanFields } = useForm({ name: "" , email: "", cpf: "" })
  const [profile, setProfile] = useState({})
  const token = localStorage.getItem("token")
  
  useEffect(() => {
  axios
      .get(`${BASE_URL}/profile`, {
        headers:
        {
          auth: token
        }
      })
      .then((res) => {
        setProfile(res.data.user)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const onSubmitProfile = (event) => {
    event.preventDefault()
  axios.put(`${BASE_URL}/profile`, form,  {
    headers:
    {
        auth: token
    }
})
.then((res) => {
    console.log(res)
  alert("Atualizado!")
})
.catch((err) => {
  alert(err.response.data)
})
  }
  return (
    <MainContainer>
         <h4>Cadastrar</h4>
            <FormStyled onSubmit={onSubmitProfile}>
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
                    defaultValue={profile && profile.name}
                />
                
                <TextField
                    inputProps={{ minLength: 4 }}
                    name='email'
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder='Email'
                    onChange={handleChange}
                    value={form.email}
                    type='text'
                />
                
                <TextField
                    inputProps={{ minLength: 4 }}
                    name='cpf'
                    required
                    id="outlined-required"
                    label="cpf"
                    placeholder='Nome e sobrenome'
                    onChange={handleChange}
                    value={form.cpf}
                    type='text'
                />
                <ButtonCreate type='submit'>Salvar</ButtonCreate>
                
                </FormStyled> 
    </MainContainer>
  )
}
