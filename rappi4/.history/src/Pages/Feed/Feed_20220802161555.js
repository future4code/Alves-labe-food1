import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../Global/GlobalContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import useVerifyAdress from '../../Hooks/useVerifyAdress'
import { goToRestaurants, goToSearch } from '../../Routes/Coordinator'
import { CategoryP, DisplayCards, DivCategory, MainContainer, SearchBar } from './FeedStyled'
import CardFeed from '../../Components/CardFeed/CardFeed'
import FooterMenu from '../../Components/FooterMenu/FooterMenu'

export default function Feed() {
  const { restaurants } = useContext(GlobalContext)
  const [activeCategory, setActiveCategory] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  useVerifyAdress()
  useProtectedPage()

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
      if (activeCategory === 'Todos') {
        return restaurant.name
      } else {
        return restaurant.category
          .toLowerCase()
          .includes(activeCategory.toLowerCase())
      }
    })
    .map((restaurant) => {
      return (
        <CardFeed restaurant={restaurant} />
      )
    })

  const categorias = restaurants.map((restaurant) => { return restaurant.category })
  let filteredCategories = [...new Set(categorias)]
  const allCategories = ['Todos', ...filteredCategories]

  const mappedCategories = allCategories.map((category) => {
    return <CategoryP onClick={() => setCategory(category)}>{category}</CategoryP>
  })

  console.log(activeCategory)

  return (
    <MainContainer>
      <SearchBar placeholder='Restaurante' onClick={() => goToSearch(navigate)}></SearchBar>

      <DivCategory>{mappedCategories}</DivCategory>
      <DisplayCards>
        {showRestaurants}
      </DisplayCards>

      <FooterMenu />

    </MainContainer>
  )
}
