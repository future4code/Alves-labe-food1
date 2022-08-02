import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../Global/GlobalContext'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import useVerifyAdress from '../../Hooks/useVerifyAdress'
import { goToRestaurants } from '../../Routes/Coordinator'
import { DivCategory, MainContainer } from './FeedStyled'

export default function Feed() {
  const {restaurants} = useContext(GlobalContext)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('')
  const navigate = useNavigate()
  useVerifyAdress()

  const setCategory = (category) => {
    setActiveCategory(category)
  }
  
  const showRestaurants = restaurants.map((restaurant) => {
    return (
      <div key = {restaurant.id}>
      <p>{restaurant.name}</p>
      <button onClick={() => {goToRestaurants(navigate, restaurant.id)}}>Detalhes</button>
      </div>
    )
  })

  const categorias = restaurants.map((restaurant) => {    return restaurant.category})
  let filteredCategories = [...new Set(categorias)]

const mappedCategories = filteredCategories.map((category) => {
  return <p onClick={()=>setCategory(category)}>{category}</p>
})

  return (
<MainContainer>
<input></input>
<DivCategory>{mappedCategories}</DivCategory>
{showRestaurants}
</MainContainer>
  )
}
