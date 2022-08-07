import React, { useEffect, useState } from 'react'
import { ButtonCreate, FormStyled, MainContainer } from './EditProfileStyled'
import { BASE_URL } from '../../Constants/urls'
import useForm from '../../Hooks/useForm'
import { TextField } from '@mui/material'
import axios from 'axios'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { toast } from 'react-toastify'

export default function EditProfile() {
  const [profile, setProfile] = useState({})
  const { form, handleChange, setform} = useForm({ name: "" , email: "", cpf: "" })
  const token = localStorage.getItem("token")
  useProtectedPage()

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
        toast.error(err.response.data.message)
      })
  }, [])


  useEffect(() => {
    if (profile) {
      setform({
        name: profile.name,
        email: profile.email,
        cpf: profile.cpf,
      });
    }
  }, [profile]);

  const onSubmitProfile = (event) => {
    event.preventDefault()
  axios.put(`${BASE_URL}/profile`, form,  {
    headers:
    {
        auth: token
    }
})
.then((res) => {
  toast.success("Atualizado!")
})
.catch((err) => {
  toast.error(err.response.data)
})
  }

  //

  
  return (
    <MainContainer>
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
