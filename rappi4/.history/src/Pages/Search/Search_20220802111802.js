import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../Global/GlobalContext'
import useVerifyAdress from '../../Hooks/useVerifyAdress'
import { goToRestaurants } from '../../Routes/Coordinator'
import { MainContainer } from './Styled'

export default function Search() {
    const {restaurants} = useContext(GlobalContext)
    const [searchInput, setSearchInput] = useState()
    const navigate = useNavigate()
    useVerifyAdress()
  
    const onChangeSearch = (event) => {
      setSearchInput(event.target.value)
    }
    
  
    const showRestaurants = restaurants.filter((restaurant) => {
      return restaurant.name 
      .toLowerCase()
      .includes(searchInput.toLowerCase()) || restaurant.description
      .toLowerCase()
      .includes(searchInput.toLowerCase()) || restaurant.category
      .toLowerCase()
      .includes(searchInput.toLowerCase())
    })
    .map((restaurant) => {
        if(searchInput.length >= 1) {
      return (
        <div>
          <p>{restaurant.name}</p>
          <button onClick={()=> goToRestaurants(navigate, restaurant.id)}>Detalhes</button>
        </div>
      )
        } else if (searchInput.length === 0) {
            <p>Busque por nome do restaurante</p>
        }
    })
  
    const categorias = restaurants.map((restaurant) => {    return restaurant.category})
    let filteredCategories = [...new Set(categorias)]
  
  
    return (
  <MainContainer>
  <input value={searchInput} onChange={onChangeSearch}></input>
  {showRestaurants}
  </MainContainer>
    )
  }

