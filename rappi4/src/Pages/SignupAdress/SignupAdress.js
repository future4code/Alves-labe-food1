import React from 'react'
import { ButtonCreate, FormStyled, MainContainer } from './SignupAdressStyled'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { BASE_URL } from '../../Constants/urls'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { goToFeed } from '../../Routes/Coordinator'
import { toast } from 'react-toastify'


export default function SignupAdress() {
  // useUnprotectedPage()
  const navigate = useNavigate()
  const { form, handleChange, cleanFields } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

  const onSubmitAdress = (event) => {
    const token = localStorage.getItem('token')
    event.preventDefault()

    axios
    .put(`${BASE_URL}/address`, form, {
      headers:
      {
          auth: token
      }
  })
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      cleanFields()
      goToFeed(navigate)
      toast.success("Endereço cadastrado com sucesso!")
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })
  }

  return (
    <MainContainer>
      <h4>Meu endereço</h4>

      <FormStyled onSubmit={onSubmitAdress}>
        <TextField
          name='street'
          required
          id="outlined-required"
          label="Logradouro"
          placeholder='Rua / Av'
          onChange={handleChange}
          value={form.street}
          type='text'
        />
        <TextField
          name='number'
          required
          id="outlined-required"
          label="Número"
          placeholder='Número'
          value={form.number}
          onChange={handleChange}
          type='number'
        />
        <TextField
          name='complement'
          type='text'
          id="outlined-required"
          label="Complemento"
          placeholder='Apto / Bloco'
          value={form.complement}
          onChange={handleChange}
        />
        <TextField
          name='neighbourhood'
          required
          id="outlined-required"
          label="Bairro"
          placeholder='Bairro'
          value={form.neighbourhood}
          onChange={handleChange}
          type='text'
        />
       <TextField
          name='city'
          required
          id="outlined-required"
          label="Cidade"
          placeholder='Cidade'
          value={form.city}
          onChange={handleChange}
          type='text'
        />
        <TextField
          name='state'
          required
          id="outlined-required"
          label="Estado"
          placeholder='Estado'
          value={form.state}
          onChange={handleChange}
          type='text'
        />

        <ButtonCreate type='submit'>Salvar</ButtonCreate>
      </FormStyled>
      
    </MainContainer>
  )
}
