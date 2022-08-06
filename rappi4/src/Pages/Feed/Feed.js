import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../Global/GlobalContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import useVerifyAdress from '../../Hooks/useVerifyAdress'
import { goToRestaurants, goToSearch } from '../../Routes/Coordinator'
import { CategoryP, ContainerAlert, DisplayCards, DivCategory, DivClock, DivInformations, MainContainer, OrderPrice, OrderTitle, PedidoTitle, RestaurantOrder, SearchBar } from './FeedStyled'
import CardFeed from '../../Components/CardFeed/CardFeed'
import FooterMenu from '../../Components/FooterMenu/FooterMenu'
import { BASE_URL } from '../../Constants/urls'
import useRequestData from '../../Hooks/useRequestData'
import axios from 'axios'
import Clock from '../../Assets/clock.svg'

export default function Feed() {
  const { cart, alert, setAlert } = useContext(GlobalContext)
  const [activeCategory, setActiveCategory] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const restaurants = useRequestData([], `${BASE_URL}/restaurants`, refresh)
  const [activerOrder, setActiveOrder] = useState({})
  const navigate = useNavigate()
  useVerifyAdress()
  useProtectedPage()

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
    .map((restaurant, index) => {
      return (
        <CardFeed key={index} restaurant={restaurant} />
      )
    })

  const setCategory = (category) => {
    setActiveCategory(category)
  }

  const categorias = restaurants.map((restaurant) => { return restaurant.category })
  let filteredCategories = [...new Set(categorias)]
  const allCategories = ['Todos', ...filteredCategories]

  const mappedCategories = allCategories.map((category, index) => {
    return <CategoryP key={index} onClick={() => setCategory(category)}>{category}</CategoryP>
  })

  const getActiveOrder = () => {
    const token = localStorage.getItem('token')
    if (alert === true) {


      axios
        .get(`${BASE_URL}/active-order`, {
          headers:
          {
            auth: token
          }
        })
        .then((res) => {
          if (res.data.order !== null) {
            setActiveOrder(res.data.order)
          }
          if (res.data.order === null) {
            setAlert(false)
          }
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      return (
        <ContainerAlert>

          <DivClock>
            <img src={Clock} />
          </DivClock>

          <DivInformations>
            <OrderTitle>Pedido em andamento</OrderTitle>
            <RestaurantOrder>{activerOrder?.restaurantName}</RestaurantOrder>
            <OrderPrice>SUBTOTAL {activerOrder?.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</OrderPrice>
          </DivInformations>

        </ContainerAlert>
      )
    }
  }

  useEffect(() => {
    getActiveOrder()


  }, [])


  return (
    <MainContainer>
      <SearchBar placeholder='Restaurante' onClick={() => goToSearch(navigate)}></SearchBar>
      <DivCategory>{mappedCategories}</DivCategory>
      <DisplayCards>

        {showRestaurants}
      </DisplayCards>
      {getActiveOrder()}
      <FooterMenu />
    </MainContainer>
  )
}
