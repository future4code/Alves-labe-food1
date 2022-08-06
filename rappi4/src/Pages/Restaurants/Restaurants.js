import React, { useState, useEffect} from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../Constants/urls'
import CardHeaderDetail from '../../Components/CardRestaurantsDetail/CardHeaderDetail/CardHeaderDetail'
import CardProducts from '../../Components/CardRestaurantsDetail/CardProduts/CardProducts'
import { ContainerProducts } from './RestaurantsStyled'
export default function Restaurants() {
  const params = useParams()
  const [restaurantDetail, setRestauranteDetail] = useState([])
  const [restaurant, setRestaurant] = useState([])
  const [categories, setCategories] = useState([])
  useProtectedPage()

  const token = localStorage.getItem('token')

  useEffect(() => {
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
        alert(err.response.data.message)
      })
  }, [])

  useEffect(() => {
    const allCategories = restaurantDetail && restaurantDetail.map((product) => product.category)
    const categories = allCategories?.filter((item, i) => {
      return allCategories.indexOf(item) === i
    })
    setCategories(categories)
  }, [restaurantDetail])


  return (
    <div>
      <ContainerProducts>
        <CardHeaderDetail rest={restaurant} />
        <CardProducts categories={categories} restaurantDetail={restaurantDetail} restaurant={restaurant} />
      </ContainerProducts>
    </div>
  )
}
