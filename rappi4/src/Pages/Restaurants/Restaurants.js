import React, { useState, useEffect, useContext} from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../Constants/urls'
import CardHeaderDetail from '../../Components/CardRestaurantsDetail/CardHeaderDetail/CardHeaderDetail'
import CardProducts from '../../Components/CardRestaurantsDetail/CardProduts/CardProducts'
import { ContainerProducts, MainContainer } from './RestaurantsStyled'
import GlobalContext from '../../Global/GlobalContext'
import { toast } from 'react-toastify'

export default function Restaurants() {
  const params = useParams()
  const { cart, setCart } = useContext(GlobalContext)
  const [restaurantDetail, setRestauranteDetail] = useState([])
  const [restaurant, setRestaurant] = useState([])
  const [categories, setCategories] = useState([])
  useProtectedPage()

  const setCartNotNull = () => {
    if (cart === null) {
      setCart([])
    }
  }

  useEffect(() => {
    setCartNotNull()
  
    
  }, [])
  

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token === null) {

    } else {
    axios.get(`${BASE_URL}/restaurants/${params.id}`, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        setRestaurant(res.data.restaurant)
        setRestauranteDetail(res.data.restaurant.products)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
    }
  }, [])

  useEffect(() => {
    const allCategories = restaurantDetail && restaurantDetail.map((product) => product.category)
    const categories = allCategories?.filter((item, i) => {
      return allCategories.indexOf(item) === i
    })
    setCategories(categories)
  }, [restaurantDetail])


  return (
    <MainContainer>
      <ContainerProducts>
        <CardHeaderDetail rest={restaurant} />
        <CardProducts categories={categories} restaurantDetail={restaurantDetail} restaurant={restaurant} />
      </ContainerProducts>
    </MainContainer>
  )
}
