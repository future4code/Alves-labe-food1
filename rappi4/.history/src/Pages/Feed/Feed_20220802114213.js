import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../Global/GlobalContext'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import useVerifyAdress from '../../Hooks/useVerifyAdress'
import { goToRestaurants, goToSearch } from '../../Routes/Coordinator'
import { DivCategory, MainContainer } from './FeedStyled'

export default function Feed() {
  const {restaurants} = useContext(GlobalContext)
  const [activeCategory, setActiveCategory] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  useVerifyAdress()

  const setCategory = (category) => {
    setActiveCategory(category)
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
  .filter((restaurant) => {
    return restaurant.category
    .toLowerCase()
    .includes(activeCategory.toLowerCase())
  })
  .map((restaurant) => {
    return (
      <div>
        <p>{restaurant.name}</p>
        <button onClick={()=> goToRestaurants(navigate, restaurant.id)}>Detalhes</button>
      </div>
    )
  })

  const categorias = restaurants.map((restaurant) => {    return restaurant.category})
  let filteredCategories = [...new Set(categorias)]
  const teste = [...filteredCategories, 'Todos']

const mappedCategories = teste.map((category) => {
  return <p onClick={()=>setCategory(category)}>{category}</p>
})


  return (
<MainContainer>
<input placeholder='Restaurante' onClick={()=> goToSearch(navigate)}></input>
<DivCategory>{mappedCategories}</DivCategory>
{showRestaurants}
</MainContainer>
  )
}
