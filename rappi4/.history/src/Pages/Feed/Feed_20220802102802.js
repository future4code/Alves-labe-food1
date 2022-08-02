import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../Global/GlobalContext'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import useVerifyAdress from '../../Hooks/useVerifyAdress'
import { goToRestaurants } from '../../Routes/Coordinator'
import { DivCategory, MainContainer } from './FeedStyled'

export default function Feed() {
  const {restaurants} = useContext(GlobalContext)
  const navigate = useNavigate()
  useVerifyAdress()

  const showRestaurantsCategory = restaurants.map((restaurant) => {
    return (
      <p>{restaurant.category}</p>
    )
  })

  const filteredCategory = showRestaurantsCategory.reduce((acumulador, valorAtual) => {
    return acumulador !== valorAtual
  })

  console.log(filteredCategory)

  
  const showRestaurants = restaurants.map((restaurant) => {
    return (
      <div key = {restaurant.id}>
      <p>{restaurant.name}</p>
      <button onClick={() => {goToRestaurants(navigate, restaurant.id)}}>Detalhes</button>
      </div>
    )
  })
  return (
<MainContainer>
<input></input>
<DivCategory>{showRestaurantsCategory}</DivCategory>
{showRestaurants}
</MainContainer>
  )
}
