import React, { useState} from 'react'

export default function useForm(inicialState) {
  const [form, setform] = useState(inicialState)


  const handleChange = (event) => {
    const {name, value} = event.target
    setform({...form, [name]: value})
  }
  

  const cleanFields = () => {
    setform(inicialState)
  }

  return {form, handleChange, setform, cleanFields}

}